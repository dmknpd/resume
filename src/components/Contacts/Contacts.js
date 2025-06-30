import { useState } from "react";

import styles from "./Contacts.module.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      text,
    };

    console.log(data);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setText("");
  };

  return (
    <div className={styles.contacts} id="contacts">
      <h2 className={styles.title}>Contacts</h2>

      <div className={styles.content}>
        <p className={styles.text}>
          Looking for a developer to take on your next project or just want to
          connect? Fill out the form or use the direct contact details below.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h4 className={styles.text_title}>Telegram</h4>
            <a href="https://t.me/dmk_npd" className={styles.link}>
              t.me/dmk_npd
            </a>
          </li>

          <li className={styles.item}>
            <h4 className={styles.text_title}>Email</h4>
            <a href="mailto:soupuabt@gmail.com" className={styles.link}>
              soupuabt@gmail.com
            </a>
          </li>

          <li className={styles.item}>
            <h4 className={styles.text_title}>GitHub</h4>
            <a href="https://github.com/dmknpd" className={styles.link}>
              github.com/dmknpd
            </a>
          </li>
        </ul>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name*"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your email*"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your message*"
          className={`${styles.input} ${styles.textarea}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button type="submit" className={styles.submit}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contacts;
