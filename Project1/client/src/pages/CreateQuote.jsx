import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_QUOTE } from "../gqlOperations/mutations";
import { GET_ALL_QUOTES } from "../gqlOperations/queries";
import { useNavigate } from "react-router-dom";

const CreateQuote = () => {
  const [quote, setQuote] = useState("");
  const navigate = useNavigate();
  const [createQuote, { loading, error }] = useMutation(CREATE_QUOTE, {
    refetchQueries: [{ query: GET_ALL_QUOTES }],
    onCompleted: () => {
      setQuote("");
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first!");
      navigate("/login");
      return;
    }
    createQuote({
      variables: { quote },
    });
  };
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] animate-fadeIn">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 animate-slideDown transform hover:scale-[1.02] transition-transform duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create a Quote</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <textarea
              name="quote"
              value={quote}
              placeholder="Enter your quote here..."
              required
              rows="4"
              onChange={(e) => setQuote(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 hover:border-purple-300 resize-none"
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating..." : "Create Quote"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateQuote;
