function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gradient-to-br dark:from-[#111936] dark:via-[#202A52] dark:to-[#342B58] px-6 text-center transition-colors duration-300">

      <h1 className="text-7xl font-bold text-[#68B0F2] dark:text-[#8DD3FF]">
        404
      </h1>

      <h2 className="text-3xl font-bold text-[#184E6C] dark:text-white mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 dark:text-gray-300 mt-3">
        Sorry, the page you are looking for does not exist.
      </p>

      <a
        href="/"
        className="mt-7 px-6 py-3 rounded-xl bg-[#387EA2] dark:bg-gradient-to-r dark:from-[#4D9ED0] dark:to-[#8068B5] text-white font-medium hover:bg-[#184E6C] dark:hover:from-[#68B0F2] dark:hover:to-[#9A82D0] transition-all duration-200"
      >
        Back to Home
      </a>

    </div>
  );
}

export default NotFound;