import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <div className="flex items-center justify-center gap-10 my-10">
        <div>
          <div className="card bg-base-100 w-96 shadow-xl h-[60vh] ">
            <figure className="px-10 pt-10">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQEmOyDlWfdxeQ/profile-displayphoto-shrink_200_200/0/1681110382061?e=1729123200&v=beta&t=vt2fqDH4teik3ndm7muEYqpaybOFns67VnxQmUcBjOs"
                alt="Shoes"
                className="rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold text-xl">Dhiraj Pant</h2>
              <h2 className="card-title text-lg">AI/ML Expert</h2>
              <p className="text-justify">
                Hello, I'm Dhiraj Pant,from Nepal. I am a dedicated AI/ML
                Enthusiast who loves to create innovative and impactful
                solutions. As a continuous learner, I embrace each & every
                challenges whether big or small as opportunities to expand my
                knowledge and skills so I'm always open to new learning
                opportunities, collaborations, and challenges.
              </p>
              <div className="card-actions">
                <ul className="flex gap-2 text-xl">
                  <li>
                    <a href="">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaXTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaGlobe />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-base-100 w-96 shadow-xl h-[60vh] ">
            <figure className="px-10 pt-10">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQEz7RAZyjn1ow/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721978830738?e=1729123200&v=beta&t=zZkmP1Boi2GQ_bsqvW5AbvHTfzxhzyrS6I4UZU5J4Rc"
                alt="Shoes"
                className="rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold text-xl">Santosh Upadhyay</h2>
              <h2 className="card-title text-lg">Full Stack Developer</h2>
              <p className="text-justify">
                Full Stack Web Developer. As a passionate full stack web
                developer, I specialize in building dynamic and responsive
                applications using the MERN stack. I thrive on creating
                interactive user experiences and efficient, scalable solutions.
                I am continuously exploring new tools and best practices to
                deliver high-quality, innovative web solutions.
              </p>
              <div className="card-actions">
              <ul className="flex gap-2 text-xl">
                  <li>
                    <a href="">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaXTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaGlobe />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
