import { useQuery, useMutation } from "@apollo/client/react";
import { GET_MY_PROFILE, GET_ALL_QUOTES } from "../gqlOperations/queries";
import { DELETE_QUOTE } from "../gqlOperations/mutations";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_MY_PROFILE);

  const [deleteQuote] = useMutation(DELETE_QUOTE, {
    refetchQueries: [{ query: GET_MY_PROFILE }, { query: GET_ALL_QUOTES }],
  });

  // 🔐 Auth check
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return null;
  }

  if (loading)
    return <h2 className="text-center mt-10">Profile is loading...</h2>;

  if (error) {
    console.error(error);
    return (
      <h2 className="text-center mt-10 text-red-600">Error loading profile</h2>
    );
  }

  const handleDelete = (id) => {
    deleteQuote({
      variables: { id },
    });
  };

  const handleEdit = (quote) => {
    navigate("/create", {
      state: {
        isEdit: true,
        quoteId: quote._id,
        quoteText: quote.quote,
      },
    });
  };

  return (
    <div className="py-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PROFILE CARD */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-slideDown">
          <div className="flex flex-col items-center text-center">
            <img
              src={`https://robohash.org/${data.user.firstName}.png`}
              alt="User avatar"
              className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-xl mb-4"
            />
            <h5 className="text-3xl font-bold text-gray-800 mb-2">
              {data.user.firstName} {data.user.lastName}
            </h5>
            <h5 className="text-gray-600">Email – {data.user.email}</h5>
          </div>
        </div>

        {/* QUOTES SECTION */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6 animate-slideRight">
            Your Quotes
          </h3>

          {data.user.quotes.length === 0 && (
            <p className="text-gray-600">You haven’t created any quotes yet.</p>
          )}

          <div className="space-y-4">
            {data.user.quotes.map((quote) => (
              <blockquote
                key={quote._id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl 
                           transition-all duration-300 transform hover:-translate-y-1 animate-slideUp"
              >
                {/* FLEX LAYOUT */}
                <div className="flex items-center justify-between gap-6 p-6 border-l-4 border-purple-500">
                  {/* LEFT: Quote content */}
                  <div className="flex-1">
                    <h6 className="text-gray-800 text-lg leading-relaxed">
                      {quote.quote}
                    </h6>
                  </div>

                  {/* RIGHT: Edit / Delete buttons */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleEdit(quote)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(quote._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
