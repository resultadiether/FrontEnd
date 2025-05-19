const Loader = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 backdrop-blur-md">
    <div className="relative w-32 h-32 animate-book-spin">
      <div className="absolute inset-0 transform rotate-6 scale-105 bg-gradient-to-br from-blue-500 to-indigo-600 border-4 border-white rounded-lg shadow-2xl shadow-blue-300" />

  
      <div className="absolute inset-2 bg-gradient-to-r from-white via-gray-100 to-white rounded-md shadow-inner" />

      <div className="absolute left-0 top-0 w-6 h-full bg-blue-700 rounded-l-md shadow-md" />
    </div>

    <div className="mt-6 w-28 h-1.5 bg-blue-300 rounded-full blur-md opacity-60 animate-pulse" />

    <p className="mt-6 text-blue-800 text-xl font-semibold tracking-wide animate-pulse">
      Loading your library...
    </p>

    <style jsx>{`
      @keyframes book-spin {
        0% {
          transform: rotateY(0deg);
        }
        50% {
          transform: rotateY(180deg);
        }
        100% {
          transform: rotateY(360deg);
        }
      }
      .animate-book-spin {
        animation: book-spin 6s ease-in-out infinite;
        transform-style: preserve-3d;
      }
    `}</style>
  </div>
);

export default Loader;
