import React from 'react'

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Get in touch for any queries or support.</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Our Office</h3>
        <p>EatGood HQ</p>
        <p>B391/2 Bhagya Vihar, Delhi NCR, India</p>
        <p>Email: ankitjha0723@gmail.com</p>
        <p>Phone: +91 99999990</p>
      </div>
    </div>
  )
}

export default ContactUs
