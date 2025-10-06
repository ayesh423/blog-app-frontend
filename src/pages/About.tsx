import React from "react";
import "../CSSfiles/About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Our Blog</h1>
        <p className="tagline">
          A place where ideas, creativity, and technology meet.
        </p>
      </section>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          Welcome to <strong>InsightSphere</strong> — a blog built for learners,
          creators, and innovators. Our goal is to share high-quality articles,
          tutorials, and opinions that inspire growth and creativity in the tech
          world.
        </p>

        <h2>Who We Are</h2>
        <p>
          We’re a small team of passionate developers and writers who love
          exploring the latest trends in software development, web design,
          artificial intelligence, and digital creativity.
        </p>

        <h2>What You’ll Find Here</h2>
        <ul>
          <li>💡 In-depth tutorials on modern web technologies</li>
          <li>📰 Articles about software engineering and design</li>
          <li>🎯 Tips and insights from real-world projects</li>
          <li>🌍 Community-driven discussions and feedback</li>
        </ul>

        <h2>Join Us</h2>
        <p>
          Have a story to share or a topic you’d like us to cover? Reach out
          through our <a href="/contact">contact page</a> — we’d love to hear
          from you!
        </p>
      </section>
    </div>
  );
};

export default About;
