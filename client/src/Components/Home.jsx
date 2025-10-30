

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    navigate(`/books?query=${query}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center relative py-24 text-center flex flex-col justify-center items-center px-4 sm:px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white w-full max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3">
            Find Your Next Book
          </h1>
          <p className="text-base sm:text-lg mb-6 px-2">
            Discover, explore, and learn from thousands of books.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full px-2"
          >
            <input
              type="text"
              placeholder="Search by title, author, or subject..."
              className="w-full sm:w-auto flex-1 p-3 rounded-lg border-none outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold text-white w-full sm:w-auto transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-10 text-center bg-gray-100 mt-10">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-indigo-500 transition">
          <p className="text-3xl sm:text-4xl font-bold text-indigo-600">2M+</p>
          <p className="text-gray-700 text-base sm:text-lg">Books Available</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-indigo-500 transition">
          <p className="text-3xl sm:text-4xl font-bold text-indigo-600">
            500K+
          </p>
          <p className="text-gray-700 text-base sm:text-lg">Authors Listed</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-indigo-500 transition">
          <p className="text-3xl sm:text-4xl font-bold text-indigo-600">150+</p>
          <p className="text-gray-700 text-base sm:text-lg">Genres Covered</p>
        </div>
      </div>

      {/* Why Use Section */}
      <div className="py-14 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 px-4">
          Why Use BookFinder?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-6 md:px-20 text-center">
          <div className="p-6 border border-gray-200 rounded-lg hover:border-indigo-500 hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">📚 Huge Collection</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Access millions of books from all genres and categories.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:border-indigo-500 hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🔍 Smart Search</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Quickly find books by title, author, or topic with ease.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:border-indigo-500 hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">⚡ Fast & Simple</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Get instant results in a clean and user-friendly interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
