"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import styles from "./Spotlight.module.css";

const Spotlight = () => {
    const mouseX = useSpring(0, { damping: 50, stiffness: 200 });
    const mouseY = useSpring(0, { damping: 50, stiffness: 200 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const background = useTransform(
        [mouseX, mouseY],
        ([x, y]) => `radial-gradient(1000px circle at ${x}px ${y}px, rgba(0, 255, 136, 0.07), transparent 80%)`
    );

    return (
        <motion.div
            className={styles.spotlight}
            style={{ background }}
        />
    );
};

export default Spotlight;
