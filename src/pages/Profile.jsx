import { useState } from "react";

import toast from "react-hot-toast";

import useAppointmentStore from "../store/appointmentStore";

function Profile() {

  const profile = useAppointmentStore(
    (state) => state.profile
  );

  const setProfile = useAppointmentStore(
    (state) => state.setProfile
  );

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!name || !email) {
      toast.error("Please enter your name and email.");
      return;
    }

    setProfile({
      name,
      email,
      phone,
    });

    toast.success("Profile saved successfully!");

  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58] py-10 sm:py-12 transition-colors duration-300">

      <div className="max-w-2xl mx-auto px-5 sm:px-6">

        <h1 className="text-3xl sm:text-4xl font-bold text-[#184E6C] dark:text-white text-center">
          My Profile
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-3">
          Manage your personal information.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 sm:mt-10 bg-white dark:bg-gradient-to-br dark:from-[#202A52] dark:via-[#2D3566] dark:to-[#3B315E] rounded-3xl shadow-md dark:shadow-black/30 border border-[#E0F4FF] dark:border-[#59638D] p-5 sm:p-8 transition-colors duration-300"
        >

          {/* Name */}
          <div>

            <label className="block text-[#184E6C] dark:text-white font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#68B0F2] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white placeholder:text-gray-400"
            />

          </div>

          {/* Email */}
          <div className="mt-5">

            <label className="block text-[#184E6C] dark:text-white font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#68B0F2] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white placeholder:text-gray-400"
            />

          </div>

          {/* Phone */}
          <div className="mt-5">

            <label className="block text-[#184E6C] dark:text-white font-medium mb-2">
              Phone
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 rounded-xl border border-[#9BCBE5] dark:border-[#59638D] outline-none focus:ring-2 focus:ring-[#68B0F2] bg-white dark:bg-gradient-to-r dark:from-[#182142] dark:to-[#2D315A] text-[#184E6C] dark:text-white placeholder:text-gray-400"
            />

          </div>

          <button
            type="submit"
            className="w-full mt-7 sm:mt-8 py-3 rounded-xl bg-[#387EA2] dark:bg-gradient-to-r dark:from-[#4D9ED0] dark:to-[#8068B5] text-white font-medium hover:bg-[#184E6C] dark:hover:from-[#68B0F2] dark:hover:to-[#9A82D0] transition-all duration-200 cursor-pointer"
          >
            Save Profile
          </button>

        </form>

      </div>

    </div>
  );
}

export default Profile;