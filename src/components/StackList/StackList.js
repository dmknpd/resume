import StackItem from "../StackItem/StackItem";
import styles from "./StackList.module.css";

import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import scss from "../../assets/img/scss.svg";
import js from "../../assets/img/js.svg";
import react from "../../assets/img/react.svg";
import vue from "../../assets/img/vue.svg";
import tailwindcss from "../../assets/img/tailwindcss.svg";
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

const StackList = () => {
  const techs = [
    { id: 1, title: "HTML", icon: html },
    { id: 2, title: "CSS", icon: css },
    { id: 3, title: "SCSS", icon: scss },
    { id: 4, title: "JavaScript", icon: js },
    { id: 5, title: "React", icon: react },
    { id: 6, title: "Vue", icon: vue },
    { id: 7, title: "TailwindCSS", icon: tailwindcss },
    { id: 8, title: "Node.js", icon: node_js },
    { id: 9, title: "Express.js", icon: express },
    { id: 10, title: "PHP", icon: php },
    { id: 11, title: "Laravel", icon: laravel },
    { id: 12, title: "RESTful API", icon: rest_api },
    { id: 13, title: "WebSocket", icon: websocket },
    { id: 14, title: "MySQL", icon: mysql },
    { id: 15, title: "PostgreSQL", icon: postgresql },
    { id: 16, title: "MongoDB", icon: mongodb },
    { id: 17, title: "Git", icon: git },
    { id: 18, title: "Docker", icon: docker },
    { id: 19, title: "Figma", icon: figma },
  ];

  return (
    <div className={styles.stack_list}>
      {techs.map((tech) => (
        <StackItem key={tech.id} title={tech.title} icon={tech.icon} />
      ))}
    </div>
  );
};

export default StackList;
