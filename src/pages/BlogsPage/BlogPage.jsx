import React, { useState, useEffect } from "react";
import axios from "axios";
import "./blogsPage.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = "http://localhost:8080/api/blogs";

  const getBlogs = async () => {
    setLoading(true);
    let blogs = await axios.get(API_URL);
    setBlogs(blogs.data.data);
    setLoading(false);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <h1>This is blog page</h1>
      <div className="blogs">
        {blogs.map((blog) => {
          return (
            <div className="blog">
              <div className="header">{blog.header}</div>
              <div className="hero">{blog.content}</div>
              <small className="footer">Author: {blog.author}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
