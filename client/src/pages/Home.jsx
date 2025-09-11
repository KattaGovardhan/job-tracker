import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* === Hero Section === */}
      <section className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            Track & Organize Your <span className="text-blue-600">Job Applications</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Stay on top of your job search with an intuitive dashboard, powerful filters, and real-time progress tracking.
          </p>
          <Link to="/signup">
            <button className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition">
              Get Started — It’s Free
            </button>
          </Link>
        </div>
      </section>

      {/* === Features === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            Everything You Need To Land Your Next Role
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition bg-gray-50">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Every Detail</h3>
              <p className="text-gray-600">
                Keep a detailed record of job descriptions, companies, and deadlines — all in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition bg-gray-50">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Manage Stages</h3>
              <p className="text-gray-600">
                Easily move applications from Applied → Interview → Offer → Hired, or mark them Rejected.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl shadow hover:shadow-lg transition bg-gray-50">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Visualize Progress</h3>
              <p className="text-gray-600">
                Beautiful charts and insights help you measure success and stay motivated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Supercharge Your Job Hunt?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of job seekers who trust <strong>Job Tracker</strong> to organize and
            accelerate their careers.
          </p>
          <Link to="/signup">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Create Your Free Account
            </button>
          </Link>
        </div>
      </section>

      {/* === Footer === */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Job Tracker. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
