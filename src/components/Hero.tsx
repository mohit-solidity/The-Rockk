"use client";

import React from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";
import styles from "./Hero.module.css";

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const title = "The Rock — Web3 Community Manager";
    const letters = Array.from(title);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    } as const;

    const childVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    } as const;

    return (
        <section className={styles.hero} onMouseMove={handleMouseMove}>
            <div className={styles.container} style={{ perspective: 1000 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ rotateX, rotateY }}
                    className={styles.content}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className={styles.badge}
                    >
                        <span className={styles.badgeDot}></span>
                        Available for New Projects
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {letters.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={childVariants}
                                className={letter === " " ? "" : "inline-block"}
                                style={{ display: "inline-block", whiteSpace: "pre" }}
                            >
                                {letter === "—" ? <span className="web3-gradient-text">—</span> : letter}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <p className={styles.subtitle}>
                        Scaling, managing, and moderating high-growth Web3 ecosystems across DeFi, Casino, GameFi, Layer-1, Meme, and AI projects.
                    </p>

                    <div className={styles.ctaGroup}>
                        <Magnetic>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={styles.primaryBtn}
                            >
                                View Projects <ChevronRight size={18} />
                            </motion.a>
                        </Magnetic>
                        <Magnetic>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={styles.secondaryBtn}
                            >
                                Contact Me <ArrowUpRight size={18} />
                            </motion.a>
                        </Magnetic>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className={styles.visual}
                >
                    <div className={styles.floatingCard}>
                        <div className={styles.glassCardContent}>
                            <HeroStat label="Communities Scaled" value={15} suffix="+" />
                            <HeroStat label="Avg. Engagement Rise" value={400} suffix="%" />
                            <HeroStat label="Total Members Managed" value={250} suffix="k+" />
                        </div>
                    </div>
                    <motion.div style={{ y: y1 }} className={`${styles.glowCircle} ${styles.glow1}`}></motion.div>
                    <motion.div style={{ y: y2 }} className={`${styles.glowCircle} ${styles.glow2}`}></motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const HeroStat = ({ label, value, suffix }: { label: string; value: number; suffix: string }) => {
    return (
        <div className={styles.statLine}>
            <span className={styles.statLabel}>{label}</span>
            <span className={styles.statValue}>
                <Counter value={value} />{suffix}
            </span>
        </div>
    );
};

const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, [value]);

    return <>{count}</>;
};

export default Hero;
