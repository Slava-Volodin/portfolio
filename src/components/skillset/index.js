import React, { useRef } from "react";
import classNames from "classnames";
import { ReactComponent as Star } from "../../images/icons/star.svg";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";

const skills = [
  {
    name: "Node.js",
    description:
      "I have basic knowledge. Participated in the development of a commercial project for monitoring production processes using React and Node.js.",
    icon: s.fourth,
    score: 3,
  },
  {
    name: "Next.js",
    description:
      "I have experience with Next.js, participated in more than 10 projects over the past year.",
    icon: s.third,
    score: 4,
  },

  {
    name: "JS/TS",
    description:
      "2 years of experience, including working with pure JavaScript (VanillaJS).",
    icon: s.first,
    score: 4,
  },
  {
    name: "React",
    description:
      "Confident knowledge of React, participated in more than 25 projects.",
    icon: s.second,
    score: 5,
  },
];

const other = [
  "Figma",
  "Slack",
  "Jira",
  "Trello",
  "Git",
  "-",
  "Tailwind CSS",
  "Bootstrap",
  "Antd",
  "MaterialUI",
  "-",
  "Anijs",
  "Framer Motion",
  "StoryBook",
  "-",
  "Redux",
  "ReactRouter",
  "ReactHookForm",
  "Postman",
  "-",
  "JavaScript",
  "TypeScript",
  "NodeJs",
  "HTML5",
  "CSS/SCSS",
  "-",
  "popover",
  "i18next",
  "moment",
  "Lodash",
];

const Skillset = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0 },
  };
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      <div id="skills" className={classNames(s.container, "container")}>
        <div className={s.titleContainer}>
          <motion.h2
            transition={{ type: "linear", duration: 1 }}
            animate={isInView ? "enter" : "hidden"}
            className={s.title}
            variants={variants}
            initial="hidden"
            exit="hidden"
            ref={ref}
          >
            Skillset
          </motion.h2>
          <span className={s.description}>
            I confidently possess most of the skills necessary to perform
            front-end tasks. Basic knowledge of Node.js helps to better
            understand the interaction between frontend and backend.
          </span>
        </div>
        <ul className={s.list}>
          {skills.map((skill) => {
            return (
              <li className={s.item} key={skill.name}>
                <div className={s.nameContainer}>
                  <div className={classNames(s.icon, skill.icon)} />
                  <span className={s.name}>{skill.name} </span>
                  <div>
                    {stars?.map(
                      (num) =>
                        num <= skill.score && (
                          <Star className={s.starIcon} key={skill.name + num} />
                        ),
                    )}
                  </div>
                </div>
                <span className={s.descriptionItem}>{skill.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classNames(s.otherContainer, "container")}>
        <ul className={s.otherList}>
          {other?.map((el, i) => {
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className={s.description}>{el}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Skillset;
