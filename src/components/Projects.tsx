"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

const categories = ["All", "Casino", "DeFi", "GameFi", "AI", "Swap Protocol", "L1"];

const projectsData = [
    // Swap Protocol
    {
        name: "XY Finance",
        category: "Swap Protocol",
        desc: "Advanced cross-chain interoperability protocol and liquidity aggregator for the multi-chain world.",
        impact: "Facilitating seamless asset swaps and bridging across 20+ blockchains with optimized rates.",
        twitter: "https://x.com/xyfinance",
        image: "https://pbs.twimg.com/profile_images/1690983818365288448/7_hS5pM5_400x400.jpg",
    },
    // Casino
    {
        name: "Rakebit",
        category: "Casino",
        desc: "Working as a community manger and helps in plans some growing strategy",
        impact: "Managed player communication, optimized engagement flows, and contributed to sustainable user growth.",
        twitter: "https://x.com/rakebitcom",
        image: "https://pbs.twimg.com/profile_images/2011114712390381573/urzevaQV_400x400.png",
    },
    {
        name: "BetU",
        category: "Casino",
        desc: "Worked as VIP customer support on the platform while also managing their X (Twitter) account .",
        impact: "Enhanced VIP player satisfaction while maintaining active brand presence and engagement on X.",
        twitter: "https://x.com/betuglobal",
        image: "https://pbs.twimg.com/profile_images/1773745429689094144/vhx8VHBf_400x400.jpg",
    },

    // DeFi
    {
        name: "Clore",
        category: "DeFi",
        subCategory: "L1/AI",
        active: true,
        desc: "Leading community growth and moderation for decentralized GPU computing.",
        impact: "Drove sustainable community expansion while safeguarding quality interactions in a decentralized compute marketplace",
        twitter: "https://x.com/clore_ai",
        image: "https://pbs.twimg.com/profile_images/1668774525020848128/D9cTRbPy_400x400.jpg",
    },
    {
        name: "Ratex",
        category: "DeFi",
        active: true,
        desc: "Worked as a Technical MOD for RateX, resolving user queries while maintaining a positive and friendly community environment.",
        impact: " Improved user confidence by delivering accurate technical support and fostering a welcoming group atmosphere.",
        twitter: "https://x.com/RateX_Dex",
        image: "https://pbs.twimg.com/profile_images/1790703675700355072/wUBLpPIS_400x400.jpg",
    },
    {
        name: "BinaryX",
        category: "DeFi",
        desc: "Community moderation and engagement for GameFi/DeFi hybrid.",
        impact: "Maintained 99% positive sentiment during major protocol upgrades.",
        twitter: "https://x.com/binaryxplatform?s=21",
        image: "https://pbs.twimg.com/profile_images/1666090430826704899/hG1_u0uw_400x400.jpg",
    },

    // GameFi
    {
        name: "Avocado",
        category: "GameFi",
        desc: "Leading GameFi guild and community hub, bridging the gap between players and the metaverse.",
        impact: "Empowered 10k+ scholars and established a dominant presence in the P2E ecosystem.",
        twitter: "https://x.com/avocadogdao",
        image: "https://pbs.twimg.com/profile_images/1676839352226250752/O5eH5K_L_400x400.jpg",
    },
    {
        name: "Rada Foundation",
        category: "GameFi",
        desc: "Decentralized football governance and talent recruitment platform powered by blockchain.",
        impact: "Revolutionizing the connection between fans, players, and clubs through transparent governance.",
        twitter: "https://x.com/RADA_Foundation",
        image: "https://pbs.twimg.com/profile_images/1666723222384156672/s_3C5z3S_400x400.jpg",
    },

    // L1
    {
        name: "Dynex",
        category: "L1",
        desc: "Pioneering decentralized neuromorphic computing and blockchain-based supercomputing solutions.",
        impact: "Scaling the world's most advanced decentralized computing network for AI and scientific research.",
        twitter: "https://x.com/dynexcoin",
        image: "https://pbs.twimg.com/profile_images/1857947700021501952/i-o7xRZx_400x400.jpg",
    },

    // AI
    {
        name: "VaiotAI",
        category: "AI",
        desc: "Moderation and engagement for decentralized AI marketplace.",
        impact: "Coordinated cross-community events with 15+ AI partner projects.",
        twitter: "https://x.com/VaiotAI",
        image: "https://pbs.twimg.com/profile_images/1981382222251696128/82ZaAExk_400x400.jpg",
    },
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = activeTab === "All"
        ? projectsData
        : projectsData.filter(p => p.category === activeTab);

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Project <span className="web3-gradient-text">Showcase</span></h2>
                    <p className={styles.subtitle}>A proven track record of scaling and managing world-class Web3 projects.</p>
                </motion.div>

                <div className={styles.filterBar}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${activeTab === cat ? styles.activeTab : ""}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className={styles.grid}>
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={`${project.name}-${index}`}
                                project={project}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }: { project: any }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{
                perspective: 1000,
            }}
        >
            <motion.div
                className={styles.card}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                }}
            >
                <div className={styles.cardHeader}>
                    <div className={styles.tagGroup}>
                        <span className={styles.tag}>{project.subCategory || project.category}</span>
                        {project.active && <span className={styles.activeBadge}>Active</span>}
                    </div>
                    <a href={project.twitter} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={18} className={styles.icon} />
                    </a>
                </div>

                <div className={styles.projectImageContainer}>
                    <img src={project.image} alt={project.name} className={styles.projectImage} />
                </div>

                <h3 className={styles.projectName}>{project.name}</h3>

                <div className={styles.cardContent}>
                    <p className={styles.projectDesc}>{project.desc}</p>
                    <div className={styles.impactBox}>
                        <h4 className={styles.impactTitle}>Key Impact:</h4>
                        <p className={styles.impactText}>{project.impact}</p>
                    </div>
                </div>

                <div className={styles.cardGlow}></div>
            </motion.div>
        </motion.div>
    );
};

export default Projects;
