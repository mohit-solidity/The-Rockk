"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./BackgroundOrbs.module.css";

const BackgroundOrbs = () => {
    const { scrollYProgress } = useScroll();

    // Parallax movement for different orbs
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <div className={styles.container}>
            <motion.div
                style={{ y: y1 }}
                animate={{
                    x: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`${styles.orb} ${styles.orb1}`}
            />
            <motion.div
                style={{ y: y2 }}
                animate={{
                    x: [0, -40, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`${styles.orb} ${styles.orb2}`}
            />
            <motion.div
                style={{ y: y3 }}
                animate={{
                    x: [0, 20, 0],
                    scale: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`${styles.orb} ${styles.orb3}`}
            />
        </div>
    );
};

export default BackgroundOrbs;
