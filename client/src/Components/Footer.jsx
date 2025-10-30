import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=" ">
  
<footer className="bg-indigo-800 text-gray-300 py-10 mt-10">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
    {/* About */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-3">BookFinder</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Book Finder helps you quickly discover books from the Open Library database.
        Whether you’re a student, reader, or researcher, find titles, authors,
        and first publication details — all in one place!
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>
          <Link to="/" className="hover:text-indigo-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/books?query=popular" className="hover:text-indigo-400 transition">
            Explore
          </Link>
        </li>
       
      </ul>
    </div>

    {/* Contact / Social */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-3">Connect</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li>Email: aaquibshaikh64@gmail.com</li>
        <li>Phone: +91 90282 64605</li>
      </ul>

      
    </div>
  </div>

  <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
    © {new Date().getFullYear()} BookFinder. All rights reserved.
  </div>
</footer>

</div>
  )
}

export default Footer;