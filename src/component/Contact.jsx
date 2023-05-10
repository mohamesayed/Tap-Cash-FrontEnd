import '../style/Contact.css';

const Contact = ()=>{
  return (
    <div className="contact">
      <div className="container">
        <div className="main-heading">
          <h2>Contact Us</h2>
          
        </div>
        <div className="content">
          <form action="">
            <input className="main-input" type="text" name="name" placeholder="Your Name" />
            <input className="main-input" type="email" name="mail" placeholder="Your Email" />
            <textarea className="main-input" name="message" placeholder="Your Message"></textarea>
            <button style={{backGroundColor:'#2D5DFE'}}> Send Message</button>
          </form>
          <div className="info">
            <h4>Get In Touch</h4>
            
            <h4>Where We Are</h4>
            <address> Address <br />Egypt, Giza,<br />Inside The Sphinx,<br />Room Number 220 .</address>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;