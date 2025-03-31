"use client";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { useState, useEffect } from "react";

function Projects(posts:SanityDocument[]) {
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchInput, setSearchInput] = useState(""); // input field text
  const [searchQuery, setSearchQuery] = useState(""); // confirmed search

  // Automatically reset search when input is cleared
  useEffect(() => {
    if (searchInput === "") {
      setSearchQuery(""); // Reset search filter when input is empty
    }
  }, [searchInput]);

  // get posts array out of JSON Object structure
  const postsArray = Object.values(posts);

  // Sort posts based on the selected order
  const sortedPosts = postsArray.sort((a, b) => {
    return sortOrder === "newest" ? b.year - a.year : a.year - b.year;
  });

  // Filter posts based on the search query
  const filteredPosts = sortedPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="m-5 flex flex-col items-center">
      <h2 className="text-center text-3xl mb-5">
        Projects
      </h2>
      {/* Sorting & Search Bar Container */}
      <div className="w-11/12 flex justify-end items-center gap-2.5 mb-10">
        <div>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search titles..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="p-2 text-base w-52 border border-gray-300 rounded-md"
          />

          {/* Search Button */}
          <button
            onClick={() => setSearchQuery(searchInput)}
            className="p-2.5 ml-0.5 mr-2.5 text-base bg-black text-background border-none rounded-md cursor-pointer hover:bg-gray-800"
          >
            Search
          </button>
        </div>

        {/* Sorting Dropdown */}
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
          className="p-2 text-base border border-gray-300 rounded-md"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Archive Grid */}
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10 justify-items-center text-center">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link
              href={`/archive/${post.slug.current}`}
              key={post._id}
              className="w-full flex flex-col items-center justify-center no-underline text-teal transform scale-100 transition-transform duration-100 ease-in hover:scale-102 hover:transition-transform hover:duration-100 hover:ease-out"
            >
              <img
                className="w-full object-contain"
                src={'/images/thumbnails/thumb_STS.png'}
                alt={post.thumbnailAlt}
              />
              <h3 className="text-xl leading-tight">{post.title}</h3>
              <h4 className="bg-teal text-text py-0.5 px-1.5">{post.year}</h4>
            </Link>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;