function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-7xl font-bold text-[#68B0F2]">
        404
      </h1>

      <h2 className="text-3xl font-bold text-[#184E6C] mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-3">
        Sorry, the page you are looking for does not exist.
      </p>

      <a
        href="/"
        className="mt-7 px-6 py-3 rounded-xl bg-[#387EA2] text-white font-medium hover:bg-[#184E6C] transition"
      >
        Back to Home
      </a>
    </div>
  );
}

export default NotFound;