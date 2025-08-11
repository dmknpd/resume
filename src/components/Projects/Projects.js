import ProjectItem from "../ProjectItem/ProjectItem";

import {
  UP_LOAD_HOST,
  QUOTE_CHAT_HOST,
  WEATHER_HOST,
} from "../../config/config";

import weather from "../../assets/img/weather.png";
import chat from "../../assets/img/chat.png";
import up_load from "../../assets/img/up_load.png";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "UP-load",
      stack: [
        "TypeScript",
        "Express",
        "MongoDB",
        "mongoose",
        "React",
        "Zustand",
        "JWT",
      ],
      description:
        "Secure and modern full-stack web application that allows authenticated users to upload, store, manage, and share files via public and private links. It solves the problem of managing personal cloud storage with fine-grained access control and token-based security.",
      icon: up_load,
      link: UP_LOAD_HOST,
    },

    {
      id: 2,
      title: "QuoteChat",
      stack: [
        "Express.js",
        "MongoDB",
        "mongoose",
        "React.js",
        "Redux",
        "socket.io",
      ],
      description:
        "Dynamic chat service where users interact with a bot that automatically sends motivational quotes. It combines real-time messaging with an uplifting twist, offering an engaging experience that blends regular chat features with inspiring, automated content.",
      icon: chat,
      link: QUOTE_CHAT_HOST,
    },
    {
      id: 3,
      title: "Weather Updates",
      stack: [
        "Express.js",
        "PostgreSQL",
        "Sequelize",
        "nodemailer",
        "node-cron",
      ],
      description:
        "Service designed to provide users with regular weather updates via email. It allows users to subscribe to weather information for specific cities and receive updates at chosen frequencies.",
      icon: weather,
      link: WEATHER_HOST,
    },
  ];

  return (
    <div className={styles.projects} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <ul className={styles.list}>
        {projects.map((proj) => (
          <ProjectItem
            key={proj.id}
            title={proj.title}
            stack={proj.stack}
            description={proj.description}
            img={proj.icon}
            link={proj.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
