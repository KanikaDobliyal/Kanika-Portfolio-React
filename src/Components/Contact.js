import React, { useEffect } from "react";
import HeroImg from "./HeroImg";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Kanika";
  }, []);

  return (
    <div>
      <HeroImg heading="Contact" paragraph="Let's have a chat." />
      <form className="container my-4 justify-content-center text-light">
        <div className="my-2 mx-2">
          <label for="exampleInputText1" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" id="exampleInputText1" />
        </div>
        <div className="my-2 mx-2">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="my-2 mx-2">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-info my-4 mx-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
