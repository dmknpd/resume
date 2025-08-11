import { useState } from "react";
import axios from "axios";

import { BACKEND_HOST } from "../../config";

import styles from "./Contacts.module.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setError("");
    setIsSending(true);

    const data = {
      name,
      email,
      text,
    };

    try {
      const response = await axios.post(`${BACKEND_HOST}/api/mail/send`, data);

      if (response.status === 200) {
        setStatus(response.data.message);
        resetForm();
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError("Server error");
      console.error(error);
    } finally {
      setIsSending(false);
    }

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
            <a
              href="https://t.me/dmk_npd"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
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
            <a
              href="https://github.com/dmknpd"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
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
        {status && <p className={styles.message}>{status}</p>}
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.submit}>
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contacts;
