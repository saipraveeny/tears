import React from 'react';
import { motion } from 'framer-motion';
import './OurStory.css';

const OurStory = () => {
  const chefs = [
    {
      name: 'Malladi Sruthvik',
      role: 'Co-Founder & Chef',
      bio: 'A culinary professional with a Master\'s degree from Birmingham University, UK, who honed his craft in several Michelin-starred restaurants, where precision and creativity guided his understanding of flavor balance.'
    },
    {
      name: 'Yadavalli Pavan Prasanth',
      role: 'Co-Founder & Chef',
      bio: 'Brings a deep-rooted passion for regional flavors, having worked across Hyderabad\'s vibrant culinary scene and the Andaman & Nicobar Islands, exploring the natural spice profiles of coastal and tropical ingredients.'
    }
  ];

  return (
    <div className="our-story-container">
      <motion.div 
        className="story-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Story</h1>
        <div className="header-underline"></div>
      </motion.div>

      <div className="story-content">
        <motion.section 
          className="chefs-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>The Chefs Behind TEARS</h2>
          
          <div className="chefs-grid">
            {chefs.map((chef, index) => (
              <motion.div 
                key={index}
                className="chef-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
              >
                <div className="chef-image chef-image-${index + 1}">
                  <div className="image-gradient"></div>
                </div>
                <div className="chef-info">
                  <h3>{chef.name}</h3>
                  <span className="chef-role">{chef.role}</span>
                  <p>{chef.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="chefs-footer">
            Together, as graduates of IHM Shri Shakti, they carry forward the spirit of culinary curiosity 
            and discipline that shaped their beginnings—transforming experience and friendship into a brand 
            that speaks through taste.
          </p>
        </motion.section>

        <motion.section 
          className="beyond-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>Beyond the Bottle</h2>
          <p>
            TEARS sauces aren't just for dipping or drizzling—they're versatile companions for stir-fries, 
            marinades, coatings, and grills. Each variant is designed to elevate every style of cooking—from 
            home kitchens to professional tables.
          </p>
          <p>
            What we create is not just a condiment, but a celebration of nature, craft, and culture. Every 
            batch represents our commitment to purity, passion, and seasonal expression—because flavor, like 
            emotion, deserves to be felt deeply.
          </p>
        </motion.section>
      </div>

      <motion.div 
        className="story-cta"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a href="/about-us" className="cta-button">Learn About Us</a>
        <a href="/#products" className="cta-button secondary">Explore Products</a>
      </motion.div>
    </div>
  );
};

export default OurStory;