export default function Profile() {
  return (
    <div className="py-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Profile Card - Vertical Layout */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300 animate-slideDown">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://robohash.org/kuchhbhi.png"
              alt="User avatar"
              className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-xl mb-4 hover:rotate-6 transition-transform duration-300"
            />
            <h5 className="text-3xl font-bold text-gray-800 mb-2">Name</h5>
            <h5 className="text-gray-600">Name@gmail.com</h5>
          </div>
        </div>

        {/* Quotes Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6 animate-slideRight">Quotes</h3>
          <div className="space-y-4">
            <blockquote className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slideUp">
              <div className="flex items-start p-6 border-l-4 border-purple-500">
                <div className="flex-1">
                  <h6 className="text-gray-800 text-lg leading-relaxed mb-3">
                    Something else
                  </h6>
                  <p className="text-gray-600 italic text-sm">- Name</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
