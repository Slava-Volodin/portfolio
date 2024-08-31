import React, { useRef } from "react";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import { HeartOutlined } from "@ant-design/icons";
import Nav from "../header/nav";
import s from "./index.module.css";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const date = new Date();
  const currentYear = date.getFullYear();

  const variants = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
  };

  return (
    <footer className={s.footer}>
      <div className={classNames(s.container, "container")}>
        <div className={s.leftSide}>
          <motion.span
            transition={{ type: "linear", duration: 1 }}
            animate={isInView ? "enter" : "hidden"}
            variants={variants}
            className={s.logo}
            initial="hidden"
            exit="hidden"
            ref={ref}
          >
            VOLODIN V.
          </motion.span>
        </div>
        <motion.div
          transition={{ type: "linear", duration: 1 }}
          animate={isInView ? "enter" : "hidden"}
          variants={variants}
          className={s.navFooter}
          initial="hidden"
          rel="noreferrer"
          target="_blank"
          exit="hidden"
        >
          <div className={s.links}>
            <a
              href="https://www.instagram.com/slava_volodin_?igsh=bW13cTVrNXZlenR1"
              className={s.link}
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/slava-volodin-b504aa326/"
              className={s.link}
              rel="noreferrer"
              target="_blank"
              ref={ref}
            >
              Linkidin
            </a>
            <a
              href="https://github.com/Slava-Volodin"
              className={s.link}
              rel="noreferrer"
              target="_blank"
              ref={ref}
            >
              Git
            </a>
          </div>
          <Nav />
        </motion.div>
      </div>
      <div className={classNames(s.infoContainer, "container")}>
        <span className={s.info}>
          © Copywriting {currentYear}. Created with <HeartOutlined /> by Slava
          Volodin
        </span>
      </div>
    </footer>
  );
};

export default Footer;
