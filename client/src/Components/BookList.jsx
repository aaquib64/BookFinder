

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookCard from "./BookCard";

function BookList() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [yearFilter, setYearFilter] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null); // ✅ Added error state

  useEffect(() => {
    if (!query) return;

    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null); // reset previous error

        const response = await fetch(
          `https://openlibrary.org/search.json?q=${query}&page=${page}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.docs || data.docs.length === 0) {
          setError("No books found for this search.");
          setBooks([]);
        } else {
          setBooks(data.docs.slice(0, 6));
        }
      } catch (err) {
        console.error("Error fetching books:", err);
        setError(
          "Something went wrong while fetching books. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query, page]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  // ✅ Apply filter logic
  const filteredBooks = books.filter(
    (book) =>
      yearFilter === "" ||
      (book.first_publish_year &&
        book.first_publish_year >= parseInt(yearFilter))
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Search Results for “{query}”
        </h2>

        {/* Filter Dropdown */}
        <select
          onChange={(e) => setYearFilter(e.target.value)}
          value={yearFilter}
          className="border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Years</option>
          <option value="2000">After 2000</option>
          <option value="2010">After 2010</option>
          <option value="2020">After 2020</option>
        </select>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="h-12 w-12 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error Message */}
      {error && !loading && (
        <p className="text-center text-red-500 font-medium mt-10">{error}</p>
      )}

      {/* Books Grid */}
      {!loading && !error && filteredBooks.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      )}

      {/* Empty Filter Message */}
      {!loading && !error && filteredBooks.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No books found matching your filter.
        </p>
      )}

      {/* Pagination Controls */}
      {!loading && filteredBooks.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>

          <span className="font-medium text-gray-700">Page {page}</span>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default BookList;
