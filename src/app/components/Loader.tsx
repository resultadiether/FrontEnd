const Loader = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <div
          className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: '-0.6s', animationDuration: '2s' }}
        ></div>
        <div
          className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: '-0.3s', animationDuration: '2s' }}
        ></div>
        <div
          className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDuration: '2s' }}
        ></div>
      </div>
    </div>
  );
  
  export default Loader;
  