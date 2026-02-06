"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, TrendingUp, Search } from "lucide-react";
import styles from "./WhyHireMe.module.css";

const points = [
    {
        title: "Proven Web3 Experience",
        desc: "Active since 2022, navigating the fast-paced evolution of the crypto space.",
        icon: <CheckCircle />
    },
    {
        title: "Production projects",
        desc: "Direct experience with top-tier protocols and high-traffic communities.",
        icon: <Search />
    },
    {
        title: "High Retention",
        desc: "Strategies focused on building long-term loyalty and sustainable engagement.",
        icon: <TrendingUp />
    },
    {
        title: "Web3 Culture Native",
        desc: "Deep understanding of the unique vibes and expectations of Web3 users.",
        icon: <Zap />
    }
];

const WhyHireMe = () => {
    return (
        <section className={styles.whyHire}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.textContent}
                    >
                        <h2 className={styles.title}>Why Hire <span className="web3-gradient-text">The Rock?</span></h2>
                        <p className={styles.subtitle}>
                            In Web3, community is everything. I don't just moderate; I build legacies.
                        </p>
                    </motion.div>

                    <div className={styles.pointsGrid}>
                        {points.map((point, index) => (
                            <motion.div
                                key={point.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={styles.pointCard}
                            >
                                <div className={styles.icon}>{point.icon}</div>
                                <div>
                                    <h3 className={styles.pointTitle}>{point.title}</h3>
                                    <p className={styles.pointDesc}>{point.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyHireMe;
