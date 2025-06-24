import ProjectItem from "../ProjectItem/ProjectItem";

import weather from "../../assets/img/weather.png";
import chat from "../../assets/img/chat.png";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Weather Updates API",
      description:
        "Service designed to provide users with regular weather updates via email. It allows users to subscribe to weather information for specific cities and receive updates at chosen frequencies.",
      icon: weather,
    },
    {
      id: 2,
      title: "QuoteChat",
      description:
        "Dynamic chat service where users interact with a bot that automatically sends motivational quotes. It combines real-time messaging with an uplifting twist, offering an engaging experience that blends regular chat features with inspiring, automated content.",
      icon: chat,
    },
  ];

  return (
    <div className={styles.projects} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <ul className={styles.list}>
        {projects.map((proj) => (
          <ProjectItem
            title={proj.title}
            description={proj.description}
            img={proj.icon}
          />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
