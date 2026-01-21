const Home = () => {
  return (
    <div className="py-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <blockquote className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slideUp">
          <div className="flex items-start p-6 border-l-4 border-purple-500">
            <div className="flex-1">
              <h6 className="text-gray-800 text-lg leading-relaxed mb-3">any quote</h6>
              <p className="text-gray-600 italic text-sm">~Name</p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default Home;
