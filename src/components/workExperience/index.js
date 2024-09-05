/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import classnames from "classnames";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";

const jobs = [
  {
    nameCompany: "DEU",
    vocation: "Frontend React/Next.js Developer",
    description:
      "Participated in the development of more than 10 web applications using React and Next.js, constantly improving user experience and application performance. Collaborated with cross-functional teams to design and implement user-friendly interfaces, receiving consistent positive feedback from customers and end users.",
    className: s.green,
    experience: 1.9,
    color: "#3cc74e",
  },

  // {
  //   nameCompany: "Erbology",
  //   vocation: "Frontend React Developer",
  //   description:
  //     "One-time project. It was necessary to have a ready-made online store written in WordPress, rewrite it in React and add an admin panel. Our cooperation continued in 2023 from February to May.",
  //   className: s.pink,
  //   experience: 0.4,
  //   color: "#e95d90",
  // },

  {
    nameCompany: "Bozhenko",
    vocation: "Frontend Next.js Developer",
    description:
      "Participated in the development of large projects: an online auto parts store and a corporate site on Next.js. Implemented SWR for efficient data acquisition and real-time updates, optimizing performance and reducing load times. Focused on optimizing site performance and providing responsive design to improve user experience.",
    className: s.blue,
    experience: 0.3,
    color: "#609bff",
  },
  // {
  //   nameCompany: "Go7",
  //   vocation: "Frontend Next.js Developer",
  //   description:
  //     "Worked with this company in 2024 four months. Above the platform for purchasing plane tickets.",
  //   className: s.green,
  //   experience: 0.4,
  //   color: "#3cc74e",
  // },
];

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0 },
  };

  return (
    <div className={s.background}>
      <div
        id="experience"
        className={classnames(s.workExperienceContainer, "container")}
      >
        <motion.h2
          transition={{ type: "linear", duration: 1 }}
          animate={isInView ? "enter" : "hidden"}
          className={classnames(s.titleSection)}
          variants={variants}
          initial="hidden"
          exit="hidden"
          ref={ref}
        >
          Work experience
        </motion.h2>

        <h3 className={s.title}>Companies I have worked for in the past.</h3>
        <ul className={s.workList}>
          {jobs?.map((el) => {
            return (
              <li className={s.workItem} key={el.nameCompany}>
                <div>
                  <span
                    className={classnames(s.num, {
                      [el.className]: el.className,
                    })}
                  >
                    {el.experience}
                  </span>
                  <span className={s.years}>years</span>
                </div>
                <div className={s.nameContainer}>
                  <span className={el.className}>{el.nameCompany}, </span>
                  <span className={s.vocation}>{el.vocation}</span>
                </div>
                <span className={s.description}>{el.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
