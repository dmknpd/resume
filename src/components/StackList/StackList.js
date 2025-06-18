import StackItem from "../StackItem/StackItem";
import styles from "./StackList.module.css";

import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import scss from "../../assets/img/scss.svg";
import js from "../../assets/img/js.svg";
import react from "../../assets/img/react.svg";
import redux from "../../assets/img/redux.svg";
import vue from "../../assets/img/vue.svg";
import pinia from "../../assets/img/pinia.svg";
import tailwindcss from "../../assets/img/tailwindcss.svg";
import bootstrap from "../../assets/img/bootstrap.svg";
import node_js from "../../assets/img/node_js.svg";
import express from "../../assets/img/express.svg";
import php from "../../assets/img/php.svg";
import laravel from "../../assets/img/laravel.svg";
import rest_api from "../../assets/img/rest_api.svg";
import websocket from "../../assets/img/websocket.svg";
import mysql from "../../assets/img/mysql.svg";
import postgresql from "../../assets/img/postgresql.svg";
import mongodb from "../../assets/img/mongodb.svg";
import git from "../../assets/img/git.svg";
import docker from "../../assets/img/docker.svg";
import figma from "../../assets/img/figma.svg";
import npm from "../../assets/img/npm.svg";
import webpack from "../../assets/img/webpack.svg";
import gulp from "../../assets/img/gulp.svg";
import postman from "../../assets/img/postman.svg";

const StackList = () => {
  const front = [
    { id: 1, title: "HTML", icon: html },
    { id: 2, title: "CSS", icon: css },
    { id: 3, title: "SCSS", icon: scss },
    { id: 4, title: "JavaScript", icon: js },
    { id: 5, title: "React", icon: react },
    { id: 6, title: "Redux", icon: redux },
    { id: 7, title: "Vue", icon: vue },
    { id: 8, title: "Pinia", icon: pinia },
    { id: 9, title: "Bootstrap", icon: bootstrap },
    { id: 10, title: "TailwindCSS", icon: tailwindcss },
  ];

  const back = [
    { id: 11, title: "Node.js", icon: node_js },
    { id: 12, title: "Express.js", icon: express },
    { id: 13, title: "PHP", icon: php },
    { id: 14, title: "Laravel", icon: laravel },
    { id: 15, title: "RESTful API", icon: rest_api },
    { id: 16, title: "WebSocket", icon: websocket },
  ];

  const db = [
    { id: 17, title: "MySQL", icon: mysql },
    { id: 18, title: "PostgreSQL", icon: postgresql },
    { id: 19, title: "MongoDB", icon: mongodb },
  ];

  const tools = [
    { id: 20, title: "Git", icon: git },
    { id: 21, title: "npm", icon: npm },
    { id: 22, title: "Postman", icon: postman },
    { id: 23, title: "Docker", icon: docker },
    { id: 24, title: "Webpack", icon: webpack },
    { id: 25, title: "Gulp", icon: gulp },
    { id: 26, title: "Figma", icon: figma },
  ];

  return (
    <>
      <f3 className={styles.title}>Front-end</f3>
      <div className={styles.stack_list}>
        {front.map((tech) => (
          <StackItem key={tech.id} title={tech.title} icon={tech.icon} />
        ))}
      </div>

      <f3 className={styles.title}>Back-end</f3>
      <div className={styles.stack_list}>
        {back.map((tech) => (
          <StackItem key={tech.id} title={tech.title} icon={tech.icon} />
        ))}
      </div>

      <f3 className={styles.title}>Databases</f3>
      <div className={styles.stack_list}>
        {db.map((tech) => (
          <StackItem key={tech.id} title={tech.title} icon={tech.icon} />
        ))}
      </div>

      <f3 className={styles.title}>Tools</f3>
      <div className={styles.stack_list}>
        {tools.map((tech) => (
          <StackItem key={tech.id} title={tech.title} icon={tech.icon} />
        ))}
      </div>
    </>
  );
};

export default StackList;
