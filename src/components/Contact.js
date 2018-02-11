import React, {Component} from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="main-content contact">
        <div class="message">
          I'd Love To Hear From You.
        </div>
        <div class="contact-form">
          <form name="contactForm" id="contactForm">
            <div class="form-field">
              <input type="text" name="_gotcha" style={{"display": "none"}} />
            </div>
            <div class="form-field">
              <input name="Name" type="text" id="contactName" placeholder="Your Name" required />
            </div>
            <div class="form-field">
              <input name="_replyto" type="email" id="contactEmail" placeholder="Your Email ID" required />
            </div>
            <div class="form-field">
              <input name="_subject" type="text" id="contactSubject" placeholder="Subject" required />
            </div>
            <div class="form-field">
              <textarea name="Message" id="contactMessage" placeholder="Message" rows="10" required></textarea>
            </div>
            <div class="form-field">
              <input type="submit" id="contactFormSubmit" class="submitform" value="Send Message"></input>
            </div>
          </form>
        </div>
        <div id="contact-form-messages"></div>
      </div>
    )
  }
}
