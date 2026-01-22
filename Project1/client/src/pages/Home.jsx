import { useQuery, useMutation } from "@apollo/client/react";
import { GET_ALL_QUOTES } from "../gqlOperations/queries";
import { DELETE_QUOTE } from "../gqlOperations/mutations";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);

  const [deleteQuote] = useMutation(DELETE_QUOTE, {
    refetchQueries: [{ query: GET_ALL_QUOTES }],
  });

  const token = localStorage.getItem("token");
  const loggedInUserId = token ? jwtDecode(token).userId : null;

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="text-2xl font-semibold text-gray-600">Loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <p className="text-red-600">{error.message}</p>
      </div>
    );
  }

  if (!data || data.quotes.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <h1 className="text-2xl font-semibold text-gray-600">
          No quotes found
        </h1>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {data.quotes.map((quote) => (
          <blockquote
            key={quote._id}
            className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500"
          >
            {/* FLEX CONTAINER */}
            <div className="flex items-center justify-between gap-6">
              {/* LEFT: Quote content */}
              <div className="flex-1">
                <h6 className="text-gray-800 text-lg mb-2">{quote.quote}</h6>
                <p className="flex items-center gap-2 text-sm italic text-gray-600">
                  <span>~{quote.by.firstName}</span>

                  <Link
                    to={`/profile/${quote.by._id}`}
                    className="flex items-center gap-1 text-blue-600 hover:underline transition"
                  >
                    <span role="img" aria-label="view-profile">
                      👁️
                    </span>
                    <span>View Profile</span>
                  </Link>
                </p>
              </div>

              {/* RIGHT: Buttons (centered vertically) */}
              {loggedInUserId === quote.by._id && (
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
              )}
            </div>
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default Home;
