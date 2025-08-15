import React from "react";
import "./Home.css";
import profileImage from "../assets/sallo.jpeg";

const Home = () => {
  return (
    <>
      <div className="">Portfolio</div>

      <section className="home">
        <div className="intro-section">
          <img src={profileImage} alt="Salma Siddique" className="profile-pic" />
          <h1>Hi, I'm <span>Salma Siddique</span> 👋</h1>
          <h2 className="animated-text">Frontend Developer | Java Enthusiast | React Developer</h2>
          <p>
            Crafting modern & responsive websites with clean UI/UX.
            Currently pursuing <strong>B.Tech IT</strong> at <strong>MSIT, New Delhi</strong>.
          </p>
        </div>

        <div className="projects-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">🎵 Spotify Clone - A music streaming web app</div>
          
            <div className="project-card">E-Commerce Website - food-ordering clone </div>
              <div className="project-card">To do App - A task management app</div>
            <div className="project-card">Social-Media App - A full-fledged social media site, user can create posts, follow other users, and receive updates.</div>
            <div className="project-card">Agency.Ai - A full-fledged social media site built with React, in this project I implemented features like user authentication, real-time messaging, and a dynamic news feed, user can create posts, and receive updates.</div>
            <div className="project-card">E-Commerce Website - A platform for buying and selling products.</div>
          </div>
        </div>

        <div className="todo-section">
          <h2>My To-Do List</h2>
          <div className="todo-list">
            <div className="todo-item">📌 Learn TypeScript</div>
            <div className="todo-item">📌 Build More Portfolio Projects</div>
            <div className="todo-item">📌 Improve Data Structures Knowledge</div>
            <div className="todo-item">📌 Contribute to Open Source</div>
            <div className="todo-item">📌 Learn Node.js</div>
            <div className="todo-item">📌 Learn new technologies...</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
