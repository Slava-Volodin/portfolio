import React, { useRef } from "react";
import classnames from "classnames";
import gardens from "../../images/projects/gardens.png";
// import dao from "../../images/projects/dao.png";
// import omnitech from "../../images/projects/omnitech.png";
// import daowallet from "../../images/projects/daowallet.png";
// import testIcon from "../../images/заглушка.png";
// import go7 from "../../images/projects/go7.png";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0 },
  };

  const projectsLeft = [
    {
      name: "Gardens 24/7",
      img: gardens,
      text: "Created a responsive website for a landscaping company based in England using React. Focused on delivering a user-friendly interface to showcase the company’s services effectively.",
      path: "http://gardens247.co.uk",
    },
    //   name: "DaoSign",
    //   img: testIcon,
    //   text: "Marketing page",
    //   path: "https://daosign.org/",
    // },
  ];

  const projectsRight = [
    {
      name: "Continent",
      text: "Developed a marketing page for a trading market using Vanilla JavaScript. Integrated APIs to fetch real-time data from market exchanges, providing users with up-to-date information on trading options.",
    },
    // {
    {
      name: "IoT Smart Home",
      text: "Developed a React application for a smart home system, integrating with devices installed around the house. Utilized Firebase for real-time push notifications to alert users of device status changes, enhancing home security and automation.",
    },
  ];

  // const t = [
  //   {
  //     name: "Go7",
  //     text: "Worked on a product for Go7. Above the platform for purchasing plane tickets. The platform is under development, so I am attaching the company’s website.",
  //     path: "https://www.go7.io/company/about-go7/",
  //     img: testIcon,
  //   },
  // ];

  return (
    <div className={s.background}>
      <div id="projects" className={classnames(s.wrapperProject, "container")}>
        <div className={s.H2}>
          <motion.h2
            transition={{ type: "linear", duration: 1 }}
            animate={isInView ? "enter" : "hidden"}
            className="titleSection"
            variants={variants}
            initial="hidden"
            exit="hidden"
            ref={ref}
          >
            Projects
          </motion.h2>

          <span className={s.title}>
            I have completed more than 30+ projects, of which I have selected
            several of the most interesting
          </span>
        </div>
        <div className={s.allSide}>
          <div className={s.leftSide}>
            <ul className={s.project}>
              {projectsLeft.map((el) => {
                return (
                  <li key={el.name} className={s.card}>
                    <a
                      target="_blank"
                      href={el.path}
                      rel="noreferrer"
                      className={s.cardLink}
                    >
                      <div className={s.imgContainer}>
                        <img className={s.imgProject} src={el.img} />
                      </div>
                      <div className={s.cardText}>
                        <h3 className={s.cardTitle}>{el.name}</h3>
                        <span className={s.subtitle}>{el.text}</span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={s.rightSide}>
            <ul className={s.project}>
              {projectsRight.map((el) => {
                return (
                  <li key={el.name} className={s.card}>
                    <a
                      target="_blank"
                      href={el.path}
                      rel="noreferrer"
                      className={s.cardLink}
                    >
                      <div className={s.cardText}>
                        <h3 className={s.cardTitle}>{el.name}</h3>
                        <span className={s.subtitle}>{el.text}</span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* <div className={s.rightSide}>
        <ul className={s.project}>
          {t.map((el) => {
            return (
              <li key={el.name} className={s.card}>
                <a
                  target="_blank"
                  href={el.path}
                  rel="noreferrer"
                  className={s.cardLink}
                >
                  <div className={s.imgContainer}>
                    <img className={s.imgProject} src={el.img} />
                  </div>
                  <div className={s.cardText}>
                    <h3 className={s.cardTitle}>{el.name}</h3>
                    <span className={s.subtitle}>{el.text}</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div> */}
      </div>
    </div>
  );
};

export default Projects;
