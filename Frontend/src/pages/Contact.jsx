import React, { useRef } from "react";

export default function Contact() {
  return (
    <>
      <div
        className="flex justify-center items-center p-5 min-h-[80vh] "
        id="contact"
      >
        <div className="card glass md:w-[40vw]  w-full bg-base-300">
          <div className="card-body">
            <h2 className="font-bold text-lg text-center">Contact Us !</h2>
            <p className="text-center">
              Wanna contact us? Please go through this form.
            </p>

            <form className="card-body" id="myForm" action="POST">
              <label
                name="name"
                className="input input-bordered flex items-center gap-2"
              >
                Name
                <input type="text" className="grow" placeholder="Sandy" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input
                  type="text"
                  className="grow"
                  placeholder="hello@example.com"
                  name="email"
                />
              </label>
              <textarea
                className="textarea resize-none textarea-bordered"
                placeholder="Write Something"
                name="message"
              ></textarea>

              <div className="card-actions justify-end">
                <button className="btn bg-orange-400">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
