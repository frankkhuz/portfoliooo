import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Mock components - replace with your actual imports
const Footer = ({ classname }) => (
  <div style={{ marginTop: "4rem", padding: "2rem", textAlign: "center" }}>
    Footer
  </div>
);
const BgText = ({ text, classname }) => (
  <div
    style={{
      position: "absolute",
      fontSize: "10rem",
      opacity: 0.03,
      fontWeight: "bold",
    }}
  >
    {text}
  </div>
);
const ProjectSection = ({ children }) => <div>{children}</div>;
const MyWorks = ({ children }) => <div>{children}</div>;

const Works = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Sample projects - replace with your actual projects
  const projects = [
    {
      title: "E-commerce store",
      description: "A full blown e-commerce application for shopping.",
      image: "/assets/project1.jpg",
      liveLink: "https://ipm-stores.vercel.app/",
      repoLink: "https://github.com/yourusername/project1",
      tags: ["Nextjs", "Node.js", "Firebase", "Typescript"],
    },
    {
      title: "A Music Producer's Page",
      description: "A music producer page.",
      image: "/assets/project2.jpg",
      liveLink: "https://aibrid2-1.vercel.app/",
      repoLink: "https://github.com/yourusername/project2",
      tags: ["React", "Typescript", "Tailwind"],
    },
    {
      title: "Ticketn Gennerator",
      description:
        "Interactive portfolio showcasing sound design work with embedded audio players.",
      image: "/assets/project3.jpg",
      liveLink: "https://hngg-gules.vercel.app/",
      repoLink: "https://github.com/yourusername/project3",
      tags: ["React", "Tailwind.js"],
    },
    {
      title: "DAW Plugin",
      description:
        "VST plugin for digital audio workstations with advanced synthesis capabilities.",
      image: "/assets/project4.jpg",
      liveLink: "https://example.com",
      repoLink: "https://github.com/yourusername/project4",
      tags: ["Tailwind", "REACT", "NEXT"],
    },
    {
      title: "",
      description:
        "Real-time collaboration platform for musicians to create music together remotely.",
      image: "/assets/project5.jpg",
      liveLink: "https://example.com",
      repoLink: "https://github.com/yourusername/project5",
      tags: ["WebRTC", "Socket.io", "MongoDB"],
    },
  ];

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      if (!isPaused) {
        scrollAmount += scrollSpeed;

        if (scrollContainer) {
          scrollContainer.scrollLeft = scrollAmount;

          // Reset scroll when we've scrolled through half (one full set)
          const maxScroll = scrollContainer.scrollWidth / 2;
          if (scrollAmount >= maxScroll) {
            scrollAmount = 0;
          }
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  return (
    <MyWorks>
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>
      <section className="workSection">
        <BgText text={"Project"} classname="WorkBgText" />
        <ProjectSection>
          <div className="projectSectionContainer">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="aboutTitle"
            >
              My Portfolio
            </motion.h1>
            <div className="projectParagraph">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sectionDescription"
              >
                Here are some select projects I have been excited to work on
                with amazing and talented people.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sectionDescription"
              >
                This is just a glimpse of my capabilities as a developer. I
                would definitely like to add a touch of my magic to your
                project.
              </motion.p>
            </div>
          </div>

          <div
            style={{
              overflow: "hidden",
              width: "100%",
              marginTop: "3rem",
              position: "relative",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={scrollRef}
              style={{
                display: "flex",
                gap: "2rem",
                overflowX: "scroll",
                scrollBehavior: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                padding: "1rem 0",
                width: "100%",
              }}
            >
              {duplicatedProjects.map((project, index) => (
                <motion.div
                  key={index}
                  style={{
                    minWidth: "400px",
                    maxWidth: "400px",
                    backgroundColor: "white",
                    borderRadius: "1rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    flexShrink: 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "250px",
                      background:
                        "linear-gradient(135deg, #2C3640 0%, #4a5a6a 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "5rem",
                        fontWeight: "bold",
                        color: "white",
                        opacity: 0.2,
                      }}
                    >
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  <div style={{ padding: "1.5rem" }}>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#2C3640",
                        marginBottom: "1rem",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: "#666",
                        marginBottom: "1rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          style={{
                            padding: "0.25rem 0.75rem",
                            backgroundColor: "#E5E5E5",
                            color: "#2C3640",
                            fontSize: "0.875rem",
                            borderRadius: "1rem",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "1rem" }}>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          backgroundColor: "#2C3640",
                          color: "white",
                          padding: "0.5rem 1rem",
                          borderRadius: "0.5rem",
                          textDecoration: "none",
                          transition: "background-color 0.3s",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#1a2228";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#2C3640";
                        }}
                      >
                        <FiExternalLink />
                        <span>Live Demo</span>
                      </a>
                      {project.repoLink && (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            border: "2px solid #2C3640",
                            backgroundColor: "white",
                            color: "#2C3640",
                            padding: "0.5rem 1rem",
                            borderRadius: "0.5rem",
                            textDecoration: "none",
                            transition: "all 0.3s",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#2C3640";
                            e.currentTarget.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "white";
                            e.currentTarget.style.color = "#2C3640";
                          }}
                        >
                          <FiGithub />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginTop: "2rem",
              fontSize: "0.875rem",
              fontStyle: "italic",
            }}
          >
            Hover to pause • Auto-scrolling carousel
          </p>
        </ProjectSection>
      </section>
      <Footer classname="workFooter" />

      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </MyWorks>
  );
};

export default Works;
