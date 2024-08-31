import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";

const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.leftSide}>
          <div className={s.titleContainer}>
            <motion.h2
              transition={{ type: "linear", duration: 1 }}
              animate={isInView ? "enter" : "hidden"}
              variants={variants}
              className={s.title}
              initial="hidden"
              exit="hidden"
              ref={ref}
              href="/"
            >
              Social Links
            </motion.h2>
            <span className={s.text}>
              We save your life and work history online.
            </span>
          </div>
          <div className={s.links}>
            <a
              className={s.link}
              href="https://www.instagram.com/slava_volodin_?igsh=bW13cTVrNXZlenR1"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              className={s.link}
              href="https://www.linkedin.com/in/slava-volodin-b504aa326/"
              target="_blank"
              rel="noreferrer"
            >
              Linkidin
            </a>
            <a
              className={s.link}
              href="https://github.com/Slava-Volodin"
              target="_blank"
              rel="noreferrer"
            >
              Git
            </a>
          </div>
        </div>
        <div className={s.rightSide} />
      </div>
    </div>
  );
};

export default SocialLinks;
