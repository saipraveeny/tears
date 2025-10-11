import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Shield, Zap, Leaf } from "lucide-react";

const Benefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Heart className="benefit-icon" />,
      title: "Wellness Beyond Heat",
      description:
        "Packed with antioxidants from real chili peppers and herbs, our sauces support cellular health and immunity.",
      color: "#ff3b30",
    },
    {
      icon: <Shield className="benefit-icon" />,
      title: "Gut-Friendly",
      description:
        "With no emulsifiers or excessive vinegar, our balanced pH and clean spices promote healthy digestion.",
      color: "#ff6b61",
    },
    {
      icon: <Zap className="benefit-icon" />,
      title: "Anti-Inflammatory Properties",
      description:
        "Enjoy the benefits of capsaicin and natural ingredients that reduce internal inflammation.",
      color: "#ff8a80",
    },
    {
      icon: <Leaf className="benefit-icon" />,
      title: "Clean & Natural",
      description:
        "First gourmet hot sauce brand that prioritizes both taste and health benefits.",
      color: "#ffab91",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Health <span className="text-gradient">Benefits</span>
          </h2>
          <p className="section-subtitle">
            More than just heat - experience wellness with every drop
          </p>
        </motion.div>

        <motion.div
          className="benefits-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card glass"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              }}
            >
              <motion.div
                className="benefit-icon-wrapper"
                style={{ "--icon-color": benefit.color }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="benefits-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                100%
              </motion.div>
              <span className="stat-label">Natural Ingredients</span>
            </div>
            <div className="stat-item">
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                0
              </motion.div>
              <span className="stat-label">Artificial Additives</span>
            </div>
            <div className="stat-item">
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                24
              </motion.div>
              <span className="stat-label">Antioxidants</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="benefits-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <p className="cta-text">
            Transform your menu today with Tears - the hot sauce that delivers
            on flavor and health
          </p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
