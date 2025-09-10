import profileModel from "../models/profileSchema.js";
 import userModel from "../models/userSchema.js";

// GET Profile
export const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    let profile = await profileModel
      .findOne({ user: userId })
      .populate("user", "name email avatar");

    if (!profile) {
      // If profile does not exist, create a new one
      profile = new profileModel({ user: userId });
      await profile.save();
    }

    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE / EDIT Profile
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const updates = req.body;

    let profile = await profileModel.findOne({ user: userId });

    if (!profile) {
      profile = new profileModel({ user: userId });
    }

    // Update profile fields dynamically
    Object.keys(updates).forEach((key) => {
      profile[key] = updates[key];
    });

    await profile.save();
    res.json({
      success: true,
      message: "Profile updated successfully",
      profile,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
