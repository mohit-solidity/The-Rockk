"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Twitter, Copy, Check, MessageSquare } from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const walletAddress = "therock.eth";

    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:gs72737475@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Let's <span className="web3-gradient-text">Connect</span></h2>
                    <p className={styles.subtitle}>Ready to scale your Web3 community? Get in touch today.</p>
                </motion.div>

                <div className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.contactInfo}
                    >
                        <h3 className={styles.infoTitle}>Contact Details</h3>
                        <p className={styles.infoDesc}>
                            Available for full-time roles, consulting, or specific growth campaigns.
                        </p>

                        <div className={styles.socialGrid}>
                            <a href="https://x.com/The_rrockk" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <div className={styles.socialIcon}><Twitter size={20} /></div>
                                <span>Twitter / @The_rrockk</span>
                            </a>
                            <a href="https://t.me/Therrockk" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <div className={styles.socialIcon}><MessageSquare size={20} /></div>
                                <span>Telegram / @Therrockk</span>
                            </a>
                        </div>

                        <div className={styles.walletBox}>
                            <span className={styles.walletLabel}>ETH Name/Wallet</span>
                            <div className={styles.walletInput}>
                                <code>{walletAddress}</code>
                                <button onClick={handleCopy} className={styles.copyBtn}>
                                    {copied ? <Check size={16} color="#00ff88" /> : <Copy size={16} />}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.inputGroup}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className={styles.submitBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message <Send size={18} />
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
