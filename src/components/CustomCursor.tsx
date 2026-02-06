"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

    // Slower spring for the glow/trailer
    const trailerX = useSpring(0, { damping: 30, stiffness: 100 });
    const trailerY = useSpring(0, { damping: 30, stiffness: 100 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            trailerX.set(e.clientX - 100); // Larger offset for center
            trailerY.set(e.clientY - 100);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleHover);
        };
    }, [cursorX, cursorY, trailerX, trailerY]);

    return (
        <>
            {/* Viscous Glow Trailer */}
            <motion.div
                className={styles.trailer}
                style={{
                    x: trailerX,
                    y: trailerY,
                }}
            />

            {/* Interactive Outer Ring */}
            <motion.div
                className={`${styles.cursor} ${isHovering ? styles.hovering : ""}`}
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />
        </>
    );
};

export default CustomCursor;
