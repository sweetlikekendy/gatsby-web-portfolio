import React from "react"
import styles from "./messageForm.module.css"

const MessageForm = () => (
  <div className="message-form">
    <form
      name="contact"
      className={styles.message_form}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
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
      <button className={styles.button} type="submit">
        Send Message
      </button>
    </form>
  </div>
)

export default MessageForm
