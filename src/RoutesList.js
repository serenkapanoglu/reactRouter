import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import AdminPage from "./AdminPage";
import BlogHome from "./BlogHome";
import Post from "./Post";
import Contact from "./Contact";
import NotFound from "./NotFound";

function RoutesList() {
    return (
        <Routes>
      <Route path="/about" element={<About />} />
    <Route path="/users/:username" element={<AdminPage />} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/blog" element={<BlogHome />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />

        </Routes>
    )
}

export default RoutesList;