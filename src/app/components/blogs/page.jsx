"use client";
import { useState } from "react";
import {
  FaSearch,
  FaFire,
  FaTags,
  FaEye,
  FaCalendar,
  FaComment,

  FaTimes,
} from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [showFeatured, setShowFeatured] = useState(false);
  const [showTrending, setShowTrending] = useState(false);

  const keywords = [
    "Web Development",
    "AI",
    "Design",
    "Programming",
    "Tech",
    "Lifestyle",
  ];
  const featuredBlogs = [
    {
      title: "The Future of AI in Web Development",
      description:
        "Exploring how AI is revolutionizing the web development industry.",
      image: "/images/blog1.jpg",
      views: 1200,
      date: "Oct 10, 2023",
      comments: 45,
      tags: ["AI", "Web Development"],
    },
    {
      title: "10 Tips for Modern Web Design",
      description:
        "Learn the best practices for creating stunning web designs.",
      image: "/images/blog2.jpg",
      views: 950,
      date: "Sep 25, 2023",
      comments: 32,
      tags: ["Design", "Web Development"],
    },
  ];

  const trendingBlogs = [
    {
      title: "Getting Started with React",
      description:
        "A beginner's guide to building web applications with React.",
      image: "/images/blog3.jpg",
      views: 800,
      date: "Sep 15, 2023",
      comments: 28,
      tags: ["Programming", "Web Development"],
    },
  ];

  const allBlogs = [...featuredBlogs, ...trendingBlogs];

  const handleKeywordClick = (keyword) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesKeywords =
      selectedKeywords.length === 0 ||
      blog.tags.some((tag) => selectedKeywords.includes(tag));
    return matchesSearch && matchesKeywords;
  });

  return (
    <div className="py-20  text-white overflow-x-auto">
      <div className="max-w-[90%] mx-auto ">
      <header className="py-12 px-6  md:px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text  text-orange-600">
        Engineering Chronicles
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4">
          Insights, tutorials, and stories about technology and design.
        </p>
      </header>

      <div className="mx-auto w-[90%]">
        <div className="mb-8">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <FaSearch className="absolute right-6 top-3.5 text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {keywords.map((keyword) => (
              <button
                key={keyword}
                onClick={() => handleKeywordClick(keyword)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedKeywords.includes(keyword)
                    ? "bg-orange-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {keyword}
              </button>
            ))}
            {/* Mobile Buttons */}
            <div className="md:hidden flex gap-2">
              <button
                onClick={() => setShowFeatured(true)}
                className="px-4 py-2 rounded-full bg-blue-700 text-white text-sm font-semibold flex items-center gap-2"
              >
                <FaFire />
                Featured
              </button>
              <button
                onClick={() => setShowTrending(true)}
                className="px-4 py-2 rounded-full bg-purple-700 text-white text-sm font-semibold flex items-center gap-2"
              >
                <FaArrowTrendUp className="text-green-700"/>
                Trending
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Search Results for:{" "}
              <span className="text-orange-500">"{searchQuery}"</span>
            </h2>
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-gray-400 mb-4">{blog.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-700 text-sm text-orange-500 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <div className="flex items-center space-x-2 text-orange-500">
                          <FaEye />
                          <span>{blog.views}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-orange-500">
                          <FaCalendar />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-orange-500">
                          <FaComment />
                          <span>{blog.comments}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">
                No results found for "{searchQuery}".
              </p>
            )}
          </div>
        )}

        {/* Blog Grid and Sidebar */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Blog Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                    <p className="text-gray-400 mb-4">{blog.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-700 text-sm text-orange-500 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center space-x-2 text-orange-500">
                        <FaEye />
                        <span>{blog.views}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-orange-500">
                        <FaCalendar />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-orange-500">
                        <FaComment />
                        <span>{blog.comments}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar (Featured and Trending Blogs) */}
          <div className="w-full md:w-1/4 space-y-8 hidden md:block">
            {/* Featured Blogs */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaFire className="mr-2 text-orange-500" />
                Featured Blogs
              </h2>
              <div className="space-y-4">
                {featuredBlogs.map((blog, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaArrowTrendUp className="mr-2 text-green-700" />
                Trending Blogs
              </h2>
              <div className="space-y-4">
                {trendingBlogs.map((blog, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured and Trending Blogs (Mobile Popups) */}
        {(showFeatured || showTrending) && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-11/12 md:w-1/2 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  {showFeatured ? "Featured Blogs" : "Trending Blogs"}
                </h2>
                <button
                  onClick={() => {
                    setShowFeatured(false);
                    setShowTrending(false);
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                {(showFeatured ? featuredBlogs : trendingBlogs).map(
                  (blog, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                        <p className="text-gray-400 text-sm">
                          {blog.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
</div>    </div>
  );
};

export default Page;
