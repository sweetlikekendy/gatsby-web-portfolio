import React from "react"
import styles from "./messageForm.module.css"

export default () => (
  <div className="message-form">
    <form
      className={styles.message_form}
      method="post"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input
        className={styles.small_text_area}
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        className={styles.small_text_area}
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <textarea
        className={styles.message_text_area}
        name="message"
        id="message"
        placeholder="Message"
        rows="4"
      />
    </form>
    <button className={styles.button} type="submit">
      Send Message
    </button>
  </div>
)
