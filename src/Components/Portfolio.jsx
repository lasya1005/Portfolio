/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/quote.webp";

const imageAltText = "Quote by Steve Jobs";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "FlavourFiesta - A Food Blog Website",
    description:
      "Created a dynamic food blog using HTML, CSS, and JavaScript, featuring engaging navigation and advanced web development techniques for a smooth user experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    url: "https://youtu.be/l-EEhjF89yU",
  },
  {
    title: "Student Minds - Cloud Placement Management Database",
    description:
      "Developed a comprehensive placement management system using Python and Tkinter, allowing efficient tracking of student placements and integration with Google Sheets for data accessibility.",
    techStack: ["Python", "Tkinter", "Google Sheets API", "SQLite"],
    url: "https://youtu.be/OYgZ0Y93NL4",
  },
  {
    title: "SignX- RealTime Indian Sign Language Recognition System and Speech to Sign Conversion",
    description:
      "Currently developing a machine learning project as part of final year major project that translates Indian Sign Language to text and vice versa, aimed at improving communication accessibility.",
    techStack: ["Python", "OpenCV", "TensorFlow", "Keras"],
    url: "",
  },
  {
    title: "Fitness Tracker using Machine Learning",
    description:
      "Working on an innovative fitness tracker that utilizes machine learning algorithms to provide personalized health insights and recommendations.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    url: "",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
