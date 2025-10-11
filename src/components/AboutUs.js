import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <motion.div 
        className="about-us-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About Us</h1>
        <div className="header-underline"></div>
      </motion.div>

      <div className="about-us-content">
        <motion.section 
          className="story-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>A Story Born from Flavor, Fire.</h2>
          <p>
            TEARS is more than a hot sauce brand—it's a handcrafted expression of pure, unfiltered flavor. 
            Founded by Malladi Sruthvik and Yadavalli Pavan Prasanth, two chefs united by a shared culinary journey, 
            TEARS was born from the idea that true heat should never compromise authenticity or quality.
          </p>
          <p>
            Both Sruthvik and Pavan are alumni of IHM Shri Shakti, Hyderabad, where their friendship and shared 
            vision for redefining flavor first began. What started as a culinary dream in college kitchens evolved 
            into a brand that celebrates craftsmanship, innovation, and nature's true essence.
          </p>
          <p>
            Our sauces are crafted without water, fat, added sugars, or preservatives—staying true to the natural 
            character of every ingredient. Each bottle carries a balance of intensity and depth that comes only 
            from time, patience, and skill.
          </p>
        </motion.section>

        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="image-container">
            <div className="image-overlay"></div>
          </div>
        </motion.div>

        <motion.section 
          className="craft-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>The Craft Behind the Heat</h2>
          <p>
            At TEARS, we celebrate fermentation as an art form. Using the ancient technique of lacto-fermentation, 
            our chilies and produce develop complex, layered flavors that are both bold and nuanced. Alongside this, 
            select seasonal variants are crafted through gentle steaming, preserving their natural sweetness and aroma.
          </p>
          <p>
            We create four variants for every season, resulting in twelve limited-edition sauces each year—each 
            crafted in small batches of just 1,000 bottles. Every drop captures the season's freshest produce, 
            sourced locally to honor the farmers and landscapes that shape our flavors.
          </p>
        </motion.section>
      </div>

      <motion.div 
        className="about-cta"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a href="/our-story" className="cta-button">Discover Our Story</a>
      </motion.div>
    </div>
  );
};

export default AboutUs;