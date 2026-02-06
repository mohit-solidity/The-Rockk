"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Award, ShieldCheck } from "lucide-react";
import styles from "./About.module.css";

const About = () => {
    const stats = [
        { label: "Years in Web3", value: "3+", icon: <Award size={24} /> },
        { label: "Projects Managed", value: "50+", icon: <ShieldCheck size={24} /> },
        { label: "Communities Scaled", value: "15+", icon: <Users size={24} /> },
        { label: "Categories Covered", value: "6+", icon: <Globe size={24} /> },
    ];

    const bioText = "Since 2022, I've been at the forefront of the Web3 revolution, helping projects build resilient, engaged, and loyal communities. My approach combines deep cultural understanding with data-driven engagement strategies.";
    const bioLetters = Array.from(bioText);

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={styles.textContent}
                    >
                        <h2 className={styles.sectionTitle}>
                            Proven Expertise in <span className="web3-gradient-text">Web3 Growth</span>
                        </h2>
                        <motion.p
                            className={styles.bio}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.005 }
                                }
                            }}
                        >
                            {bioLetters.map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 5 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.p>
                        <p className={styles.bio}>
                            Specializing in <strong>DeFi, Casino, GameFi, Layer-1, Meme, and AI</strong> sectors, I navigate the unique challenges of each niche to foster authentic connections and sustainable growth.
                        </p>

                        <div className={styles.skillList}>
                            <div className={styles.skillTag}>Discord Moderation</div>
                            <div className={styles.skillTag}>Telegram Management</div>
                            <div className={styles.skillTag}>Crisis Control</div>
                            <div className={styles.skillTag}>Growth Campaigns</div>
                        </div>
                    </motion.div>

                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={styles.statCard}
                            >
                                <div className={styles.statIcon}>{stat.icon}</div>
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeLabel}>Trusted by Communities at:</div>
                    <div className={styles.marquee}>
                        <div className={styles.marqueeContent}>
                            <span>PancakeSwap</span>
                            <span>Uniswap</span>
                            <span>Stake</span>
                            <span>BC.Game</span>
                            <span>Axie Infinity</span>
                            <span>The Sandbox</span>
                            <span>Pepe</span>
                            <span>Fetch.ai</span>
                            {/* Duplicate for seamless loop */}
                            <span>PancakeSwap</span>
                            <span>Uniswap</span>
                            <span>Stake</span>
                            <span>BC.Game</span>
                            <span>Axie Infinity</span>
                            <span>The Sandbox</span>
                            <span>Pepe</span>
                            <span>Fetch.ai</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
