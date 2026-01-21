import { useQuery } from "@apollo/client/react";
import { GET_ALL_QUOTES } from "../gqlOperations/queries";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] animate-fadeIn">
        <h1 className="text-2xl font-semibold text-gray-600">Loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] animate-fadeIn">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-red-600 mb-2">Error!</h1>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!data || !data.quotes || data.quotes.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] animate-fadeIn">
        <h1 className="text-2xl font-semibold text-gray-600">No quotes found</h1>
      </div>
    );
  }

  return (
    <div className="py-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {data.quotes.map((quote) => (
          <blockquote 
            key={quote.by._id} 
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slideUp"
          >
            <div className="flex items-start p-6 border-l-4 border-purple-500">
              <div className="flex-1">
                <h6 className="text-gray-800 text-lg leading-relaxed mb-3">
                  {quote.quote}
                </h6>
                <p className="text-gray-600 italic text-sm">
                  ~{quote.by.firstName}
                </p>
              </div>
            </div>
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default Home;
