"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    MessageSquare,
    Shield,
    TrendingUp,
    Zap,
    Users,
    Calendar
} from "lucide-react";
import styles from "./Skills.module.css";

const skills = [
    { name: "Community Management", icon: <Users />, desc: "Expertise in building and nurturing high-growth Web3 ecosystems." },
    { name: "Discord & Telegram Moderation", icon: <MessageSquare />, desc: "Proactive moderation and management of large-scale social platforms." },
    { name: "Web3 Engagement Strategies", icon: <TrendingUp />, desc: "Data-driven campaigns to boost community activity and loyalty." },
    { name: "Event Hosting & AMAs", icon: <Calendar />, desc: "Professional hosting and organization of Web3 community events." },
    { name: "Crisis & Reputation Management", icon: <Shield />, desc: "Experienced in navigating and mitigating community-level crises." },
    { name: "Growth Campaigns", icon: <Zap />, desc: "Strategic execution of viral and sustainable growth initiatives." },
];

const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Core <span className="web3-gradient-text">Expertise</span></h2>
                    <p className={styles.subtitle}>Strategic community leadership for the future of the internet.</p>
                </motion.div>

                <div className={styles.grid}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.iconBox}>{skill.icon}</div>
                            <h3 className={styles.skillName}>{skill.name}</h3>
                            <p className={styles.skillDesc}>{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
