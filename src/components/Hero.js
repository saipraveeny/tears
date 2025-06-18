import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = ({ logo }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-glow"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {logo ? (
                <img
                  src={logo}
                  alt="Tears Logo"
                  className="badge-logo-img"
                  style={{ height: "1.5rem", marginRight: "0.5rem" }}
                />
              ) : null}
              <span>Premium Hot Sauce</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Tears.
              <span className="hero-subtitle">Hot Sauce that Heals</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Discover the premium hot sauce brand revolutionizing the food
              industry with artisanal, health-conscious sauces. Zero fat, zero
              preservatives, zero water.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                className="btn btn-primary hero-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Products
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                className="btn btn-secondary hero-btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} />
                Watch Story
              </motion.button>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Bold Variants</span>
              </div>
              <div className="stat">
                <span className="stat-number">0</span>
                <span className="stat-label">Preservatives</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Natural</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-bottle">
              <motion.div
                className="bottle-glow"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 59, 48, 0.3)",
                    "0 0 40px rgba(255, 59, 48, 0.6)",
                    "0 0 20px rgba(255, 59, 48, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="bottle-shape">
                <div className="bottle-neck"></div>
                <div className="bottle-body">
                  <div className="bottle-label">
                    <span className="label-text">TEARS</span>
                    <span className="label-subtext">WILD</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
