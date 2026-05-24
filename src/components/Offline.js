const Offline = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">
        
        {/* Emoji */}
        <div className="text-7xl mb-5 animate-bounce">
          📡
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          You're Offline
        </h1>

        {/* Message */}
        <p className="text-gray-500 text-lg leading-7 mb-8">
          Please check your internet connection and try again.
        </p>

        {/* Retry Button */}
        <button
          onClick={() => window.location.reload()}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Offline;