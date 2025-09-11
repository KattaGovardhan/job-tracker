import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import axios from "axios";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    phone: "",
    skills: [],
    socialLinks: { github: "", linkedin: "", twitter: "" },
  });

  const [skillsInput, setSkillsInput] = useState("");
  const [isEditing, setIsEditing] = useState(false); // toggle edit mode

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get("/profile", {
        withCredentials: true,
      });
      if (data.success) {
        const mergedProfile = {
          ...data.profile,
          ...data.profile.user, // merge name and email into top-level profile
          socialLinks: {
            github: data.profile.socialLinks?.github || "",
            linkedin: data.profile.socialLinks?.linkedin || "",
            twitter: data.profile.socialLinks?.twitter || "",
          },
        };
        setProfile(mergedProfile);
      } else {
        toast.error("Failed to load profile");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const saveProfile = async (updatedProfile) => {
    try {
      const { data } = await axios.put("/profile/edit", updatedProfile, {
        withCredentials: true,
      });
      if (data.success) {
        toast.success("Profile updated successfully!");
        fetchProfile(); 
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("socialLinks.")) {
      const key = name.split(".")[1];
      setProfile((prev) => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [key]: value },
      }));
    } else {
      setProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddSkill = () => {
    if (skillsInput.trim() && !profile.skills.includes(skillsInput.trim())) {
      setProfile((prev) => ({
        ...prev,
        skills: [...prev.skills, skillsInput.trim()],
      }));
      setSkillsInput("");
    }
  };

  const handleRemoveSkill = (skill) => {
    setProfile((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  const handleSave = () => {
    saveProfile(profile);
    setIsEditing(false); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="bg-white shadow-md rounded-lg">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-2xl font-semibold">My Profile</CardTitle>
          {!isEditing && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Name</label>
            {isEditing ? (
              <Input
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full"
              />
            ) : (
              <p className="text-gray-700">{profile.name || "Your name"}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            {isEditing ? (
              <Input
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full"
              />
            ) : (
              <p className="text-gray-700">{profile.email || "Your email"}</p>
            )}
          </div>

          {/* Bio */}
          <div>
            <label className="block font-medium mb-1">Bio</label>
            {isEditing ? (
              <Textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself"
                className="w-full"
              />
            ) : (
              <p className="text-gray-700">{profile.bio || "No bio added"}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1">Phone</label>
            {isEditing ? (
              <Input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full"
              />
            ) : (
              <p className="text-gray-700">
                {profile.phone || "+91 0000000000"}
              </p>
            )}
          </div>

          {/* Skills */}
          <div>
            <label className="block font-medium mb-1">Skills</label>
            <div className="flex gap-2 flex-wrap mb-2">
              {profile.skills.length > 0 ? (
                profile.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full flex items-center gap-2"
                  >
                    {skill}
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-red-500 font-bold"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-700">No skills added</p>
              )}
            </div>
            {isEditing && (
              <div className="flex gap-2">
                <Input
                  value={skillsInput}
                  onChange={(e) => setSkillsInput(e.target.value)}
                  placeholder="Add skill"
                />
                <Button onClick={handleAddSkill}>Add</Button>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div>
            <label className="block font-medium mb-1">GitHub</label>
            {isEditing ? (
              <Input
                name="socialLinks.github"
                value={profile.socialLinks?.github || ""}
                onChange={handleChange}
                placeholder="https://github.com/username"
              />
            ) : (
              <p className="text-gray-700">
                {profile.socialLinks?.github ? (
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600"
                  >
                    {profile.socialLinks.github}
                  </a>
                ) : (
                  "-"
                )}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">LinkedIn</label>
            {isEditing ? (
              <Input
                name="socialLinks.linkedin"
                value={profile.socialLinks?.linkedin || ""}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/username"
              />
            ) : (
              <p className="text-gray-700">
                {profile.socialLinks?.linkedin ? (
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600"
                  >
                    {profile.socialLinks.linkedin}
                  </a>
                ) : (
                  "-"
                )}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Twitter</label>
            {isEditing ? (
              <Input
                name="socialLinks.twitter"
                value={profile.socialLinks?.twitter || ""}
                onChange={handleChange}
                placeholder="https://twitter.com/username"
              />
            ) : (
              <p className="text-gray-700">
                {profile.socialLinks?.twitter ? (
                  <a
                    href={profile.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600"
                  >
                    {profile.socialLinks.twitter}
                  </a>
                ) : (
                  "-"
                )}
              </p>
            )}
          </div>

          {/* Save button */}
          {isEditing && (
            <Button onClick={handleSave} className="mt-4 w-full">
              Save Changes
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
