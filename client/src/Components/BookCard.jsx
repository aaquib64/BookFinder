import React from "react";

function BookCard({ book }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition border border-blue-200">
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/150x200?text=No+Cover"
        }
        alt={book.title}
        className="w-full h-60 object-cover rounded-lg mb-3"
      />
      <h3 className="font-semibold text-lg">{book.title}</h3>
      <p className="text-gray-600 text-sm">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
      <p className="text-gray-500 text-sm mt-1">
        {book.first_publish_year || "N/A"}
      </p>
       
    </div>
  );
}

export default BookCard;
