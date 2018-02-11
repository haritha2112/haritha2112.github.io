import React, {Component} from "react";
import axios from "axios";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      errorNotificationVisible: "",
      successNotificationVisible: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.showSuccessMessage = this.showSuccessMessage.bind(this);
    this.showErrorMessage = this.showErrorMessage.bind(this);
  }

  showSuccessMessage() {
    this.setState({successNotificationVisible: "visible"});
    setTimeout((() => {
      this.setState({successNotificationVisible: ""});
    }).bind(this), 5000);
  }

  showErrorMessage() {
    this.setState({errorNotificationVisible: "visible"});
    setTimeout((() => {
      this.setState({errorNotificationVisible: ""});
    }).bind(this), 5000);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {name, email, subject, message} = this.state;
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      _reply_to: email,
      _subject: subject
    };
    axios.post("https://formspree.io/hrathin@g.clemson.edu", data).then((response) => {
      this.showSuccessMessage();
    }).catch((error) => {
      this.showErrorMessage();
    });
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubjectChange(event) {
    this.setState({subject: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <div className="main-content contact">
        <div className="message">
          I'd Love To Hear From You.
        </div>
        <div className="notifications">
          <div className={"notification success " + this.state.successNotificationVisible}>
            Your message has been sent. I'll reach out to you shortly. ^_^
          </div>
          <div className={"notification error " + this.state.errorNotificationVisible}>
            Oops! Something went wrong. 0_0
          </div>
        </div>
        <div className="contact-form">
          <form name="contactForm" id="contactForm" onSubmit={this.handleSubmit}>
            <div className="form-field">
              <input type="text" name="_gotcha" style={{"display": "none"}} />
            </div>
            <div className="form-field">
              <input type="text" placeholder="Your Name" required value={this.state.name} onChange={this.handleNameChange} />
            </div>
            <div className="form-field">
              <input type="email" placeholder="Your Email ID" required value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div className="form-field">
              <input type="text" placeholder="Subject" required value={this.state.subject} onChange={this.handleSubjectChange} />
            </div>
            <div className="form-field">
              <textarea placeholder="Message" rows="10" required value={this.state.message} onChange={this.handleMessageChange} />
            </div>
            <div className="form-field">
              <input type="submit" className="submitform" value="Send Message"></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
