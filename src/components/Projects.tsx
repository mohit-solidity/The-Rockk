"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

const categories = ["All", "Casino", "DeFi", "GameFi", "Meme", "AI"];

const projectsData = [
    // Casino
    {
        name: "Boxbet",
        category: "Casino",
        desc: "Strategic community growth and high-conversion engagement campaigns.",
        impact: "Increased user retention by 35% through targeted engagement loops.",
        twitter: "https://x.com/BoxBetio",
        image: "https://pbs.twimg.com/profile_images/1901911345953480704/lypbkwyF_400x400.jpg",
    },
    {
        name: "Stake",
        category: "Casino",
        desc: "Community building and high-level moderation for the industry leader.",
        impact: "Managed large-scale FUD during market volatility with 0 escalate rate.",
        twitter: "https://x.com/Stake",
        image: "https://pbs.twimg.com/profile_images/1455022330128728071/PNGpE3eS_400x400.jpg",
    },
    {
        name: "BC.Game",
        category: "Casino",
        desc: "Large-scale event management and AMA hosting for global audience.",
        impact: "Hosted AMAs with 10k+ concurrent listeners, driving 5k+ new signups.",
        twitter: "https://x.com/bcgame",
        image: "https://pbs.twimg.com/profile_images/2009283784903151618/7kM4nIzI_400x400.jpg",
    },

    // DeFi
    {
        name: "Clore",
        category: "DeFi",
        subCategory: "L1/AI",
        active: true,
        desc: "Leading community growth and moderation for decentralized GPU computing.",
        impact: "Scaled community from 5k to 50k members with 80% organic growth.",
        twitter: "https://x.com/clore_ai",
        image: "https://pbs.twimg.com/profile_images/1668774525020848128/D9cTRbPy_400x400.jpg",
    },
    {
        name: "Ratex",
        category: "DeFi",
        active: true,
        desc: "Ecosystem scaling and community engagement for DeFi labs.",
        impact: "Increased social media presence by 400% through viral growth hacks.",
        twitter: "https://x.com/RateX_Dex",
        image: "https://pbs.twimg.com/profile_images/1790703675700355072/wUBLpPIS_400x400.jpg",
    },
    {
        name: "BinaryX",
        category: "DeFi",
        desc: "Community moderation and engagement for GameFi/DeFi hybrid.",
        impact: "Maintained 99% positive sentiment during major protocol upgrades.",
        twitter: "https://x.com/binaryx_gg",
        image: "https://pbs.twimg.com/profile_images/1627347985414737921/JfWSez3W_400x400.jpg",
    },
    {
        name: "PancakeSwap",
        category: "DeFi",
        desc: "Strategic community relations and multi-chain awareness.",
        impact: "Coordinated community efforts for 3 successful major farm launches.",
        twitter: "https://x.com/PancakeSwap",
        image: "https://pbs.twimg.com/profile_images/2004910939959967744/wr7-zpVh_400x400.jpg",
    },

    // GameFi
    {
        name: "Axie Infinity",
        category: "GameFi",
        desc: "Pioneering P2E community growth and scholarship management.",
        impact: "Managed a community of 250k+ players during hyper-growth phase.",
        twitter: "https://x.com/AxieInfinity",
        image: "https://pbs.twimg.com/profile_images/2007096682178019328/cwJmrdJV_400x400.jpg",
    },
    {
        name: "The Sandbox",
        category: "GameFi",
        desc: "Metaverse community building and digital land owner relations.",
        impact: "Organized 50+ virtual events driving 100k+ visits to partner lands.",
        twitter: "https://x.com/TheSandboxGame",
        image: "https://pbs.twimg.com/profile_images/1675843993190506496/HeGzewKw_400x400.jpg",
    },
    {
        name: "Illuvium",
        category: "GameFi",
        desc: "Deep engagement and moderation for AAA-grade gaming ecosystem.",
        impact: "Reduced support tickets by 60% through community-led FAQs.",
        twitter: "https://x.com/illuviumio",
        image: "https://pbs.twimg.com/profile_images/1853842724497358848/jtIEB23P_400x400.jpg",
    },

    // Meme
    {
        name: "Mog Coin",
        category: "Meme",
        desc: "Viral culture management and community sentiment tracking for the cult-classic.",
        impact: "Drove 5M+ organic impressions through strategic 'mogging' campaigns.",
        twitter: "https://x.com/MogCoinEth",
        image: "https://pbs.twimg.com/profile_images/1706750916676714496/FSSQhtaH_400x400.jpg",
    },
    {
        name: "Brett",
        category: "Meme",
        desc: "Leading community engagement for the top project on Base.",
        impact: "Coordinated cross-platform community raids, boosting social volume by 300%.",
        twitter: "https://x.com/BasedBrett",
        image: "https://pbs.twimg.com/profile_images/1857482258543677440/N6PuT5F5_400x400.jpg",
    },
    {
        name: "Popcat",
        category: "Meme",
        desc: "Managing high-velocity community growth for Solana's top cat meme.",
        impact: "Achieved 95% retention rate during extreme market volatility.",
        twitter: "https://x.com/POPCATSOLANA",
        image: "https://pbs.twimg.com/profile_images/2000811259005165573/C475MVwu_400x400.jpg",
    },
    {
        name: "Ponke",
        category: "Meme",
        desc: "Strategic community relations and aggressive growth hacking.",
        impact: "Scaled community by 50k members in a single week through viral AMAs.",
        twitter: "https://x.com/ponkesol",
        image: "https://pbs.twimg.com/profile_images/1950610221396619264/vuttoHYA_400x400.jpg",
    },
    {
        name: "Myro",
        category: "Meme",
        desc: "Community building and moderate-to-high growth ecosystem scaling.",
        impact: "Built a self-sustaining moderation army of 100+ volunteers.",
        twitter: "https://x.com/MyroSolana",
        image: "https://pbs.twimg.com/profile_images/1724483731920953344/a4nCUPAO_400x400.jpg",
    },

    // AI
    {
        name: "Fetch.ai",
        category: "AI",
        desc: "Strategic growth for autonomous agent network.",
        impact: "Established developer-focused community hubs with 5k+ active devs.",
        twitter: "https://x.com/Fetch_ai",
        image: "https://pbs.twimg.com/profile_images/1829125609353551872/5GnVEkRB_400x400.png",
    },
    {
        name: "SingularityNET",
        category: "AI",
        desc: "Moderation and engagement for decentralized AI marketplace.",
        impact: "Coordinated cross-community events with 15+ AI partner projects.",
        twitter: "https://x.com/SingularityNET",
        image: "https://pbs.twimg.com/profile_images/928263548941283329/ZyFK-sfD_400x400.jpg",
    },
    {
        name: "Ocean Protocol",
        category: "AI",
        desc: "Community building for the decentralized data economy.",
        impact: "Increased data marketplace participation by 200%.",
        twitter: "https://x.com/oceanprotocol",
        image: "https://pbs.twimg.com/profile_images/1856607170680500227/WK6bz0L8_400x400.jpg",
    },
    {
        name: "Numerai",
        category: "AI",
        desc: "Engagement for the world's hardest data science tournament.",
        impact: "Managed high-level technical discussions for 10k+ data scientists.",
        twitter: "https://x.com/numerai",
        image: "https://pbs.twimg.com/profile_images/1361761693584347137/1h7VM_cL_400x400.png",
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
