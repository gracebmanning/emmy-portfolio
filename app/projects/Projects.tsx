"use client";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";

const ProjectCard = ({ project }: {project: SanityDocument}) => {
  return(
    <Link className="max-w-sm rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between text-left duration-200 ease-in-out hover:scale-102" href={`/projects/${project.slug}`}>
      <img className="w-full" src={urlFor(project.thumbnail).width(450).url()} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <h2 className="text-xl">{project.title}</h2>
        <div className="mt-4">
          <h3 className="text-lg text-accent m-0">{project.company}</h3>
          <p className="text-gray-700 text-base m-0">{`${project.month} ${project.year}`}</p>
        </div>
      </div>
      <div className="px-5 pb-2">
        {project.role.split(";").map((role:string, index:number)=>(
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{role.trim()}</span>
        ))}
      </div>
  </Link>
  )
}

function Projects({ projects }: { projects: SanityDocument[] }) {
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchInput, setSearchInput] = useState(""); // input field text
  const [searchQuery, setSearchQuery] = useState(""); // confirmed search

  // Automatically reset search when input is cleared
  useEffect(() => {
    if (searchInput === "") {
      setSearchQuery(""); // Reset search filter when input is empty
    }
  }, [searchInput]);

  // get projects array out of JSON Object structure
  const projectsArray = Object.values(projects);

  // Sort projects based on selected order
  const sortedProjects = projectsArray.sort((a, b) => {
    const sortDirection = sortOrder === "newest" ? -1 : 1; // -1 for newest first, 1 for oldest first
  
    // First compare years
    if (a.year !== b.year) {
      return sortDirection * (b.year - a.year); // Sort by year (newest or oldest)
    }
  
    // If years are the same, compare months
    if (a.month && b.month) {
      const monthOrder = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
      const aMonthIndex = monthOrder.indexOf(a.month);
      const bMonthIndex = monthOrder.indexOf(b.month);
  
      return sortDirection * (aMonthIndex - bMonthIndex); // Sort by month (newest or oldest)
    }
  
    return 0; // If years and/or months are the same, maintain original order
  });

  // Filter projects based on the search query
  const filteredProjects = sortedProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle search
  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  // Function to handle key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  
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
            onKeyDown={handleKeyPress}
            className="p-2 text-base w-52 border border-gray-300 rounded-md"
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="p-2.5 ml-0.5 mr-2.5 text-base bg-text text-background border-1 border-text rounded-md cursor-pointer hover:text-text hover:bg-background"
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
      <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10 justify-items-center text-center">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard project={project} key={project._id} />
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;