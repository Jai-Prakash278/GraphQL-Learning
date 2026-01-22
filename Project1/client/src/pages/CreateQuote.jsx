import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_QUOTE, UPDATE_QUOTE } from "../gqlOperations/mutations";
import { GET_ALL_QUOTES, GET_MY_PROFILE } from "../gqlOperations/queries";
import { useNavigate, useLocation } from "react-router-dom";

const CreateQuote = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isEdit = location.state?.isEdit;
  const quoteId = location.state?.quoteId;

  const [quote, setQuote] = useState(location.state?.quoteText || "");

  const [createQuote, { loading, error }] = useMutation(CREATE_QUOTE, {
    refetchQueries: [{ query: GET_ALL_QUOTES }, { query: GET_MY_PROFILE }],
    onCompleted: () => {
      navigate("/");
    },
  });

  const [updateQuote, { loading: updating, error: updateError }] = useMutation(
    UPDATE_QUOTE,
    {
      refetchQueries: [{ query: GET_ALL_QUOTES }, { query: GET_MY_PROFILE }],
      onCompleted: () => {
        navigate("/");
      },
    },
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      updateQuote({
        variables: {
          id: quoteId,
          quote,
        },
      });
    } else {
      createQuote({
        variables: { quote },
      });
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 min-h-[calc(100vh-4rem)] animate-fadeIn">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 animate-slideDown">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {isEdit ? "Edit Quote" : "Create a Quote"}
        </h2>

        {(error || updateError) && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {(error || updateError).message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <textarea
            value={quote}
            placeholder="Enter your quote here..."
            required
            rows="4"
            onChange={(e) => setQuote(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 resize-none"
          />

          <button
            type="submit"
            disabled={loading || updating}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-50"
          >
            {loading || updating
              ? "Saving..."
              : isEdit
                ? "Update Quote"
                : "Create Quote"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateQuote;
