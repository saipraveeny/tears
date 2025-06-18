import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Flame, Star, ShoppingCart, Eye } from "lucide-react";

const Products = ({ addToCart, openCart }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Wild",
      description:
        "A bold blend of habanero and ghost peppers with aromatic herbs",
      heatLevel: 5,
      price: "$24.99",
      color: "#ff3b30",
      features: ["Extra Hot", "Herb Infused", "Smoky Finish"],
      image: "wild-sauce",
    },
    {
      id: 2,
      name: "Glitch",
      description: "Innovative fusion of Carolina Reaper and exotic spices",
      heatLevel: 4,
      price: "$29.99",
      color: "#ff6b61",
      features: ["Reaper Blend", "Exotic Spices", "Complex Heat"],
      image: "glitch-sauce",
    },
    {
      id: 3,
      name: "COHC",
      description:
        "Classic habanero with citrus undertones and perfect balance",
      heatLevel: 3,
      price: "$19.99",
      color: "#ff8a80",
      features: ["Citrus Notes", "Balanced Heat", "Versatile"],
      image: "cohc-sauce",
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

  const renderHeatLevel = (level) => {
    return [...Array(5)].map((_, i) => (
      <Flame
        key={i}
        size={16}
        className={`heat-flame ${i < level ? "active" : ""}`}
      />
    ));
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Our <span className="text-gradient">Bold Variants</span>
          </h2>
          <p className="section-subtitle">
            Three distinct flavors, one revolutionary experience
          </p>
        </motion.div>

        <motion.div
          className="products-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card neumorphic"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="product-image">
                <div
                  className="product-bottle"
                  style={{ "--bottle-color": product.color }}
                >
                  <div className="bottle-shape">
                    <div className="bottle-neck"></div>
                    <div className="bottle-body">
                      <div className="bottle-label">
                        <span className="label-text">TEARS</span>
                        <span className="label-subtext">{product.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="product-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    className="overlay-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye size={20} />
                  </motion.button>
                </motion.div>
              </div>

              <div className="product-content">
                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    <Star size={16} className="star-icon" />
                    <span>4.9</span>
                  </div>
                </div>

                <p className="product-description">{product.description}</p>

                <div className="product-heat">
                  <span className="heat-label">Heat Level:</span>
                  <div className="heat-level">
                    {renderHeatLevel(product.heatLevel)}
                  </div>
                </div>

                <div className="product-features">
                  {product.features.map((feature, i) => (
                    <span key={i} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <motion.button
                    className="btn btn-primary add-to-cart"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="products-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="cta-text">
            Perfect for cafés, fine-dining restaurants, and barbecue joints
          </p>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openCart}
          >
            View Cart
          </motion.button>
        </motion.div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <motion.div
          className="product-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            className="modal-content glass-strong"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <div className="modal-product">
              <div className="modal-image">
                <div
                  className="modal-bottle"
                  style={{ "--bottle-color": selectedProduct.color }}
                >
                  <div className="bottle-shape">
                    <div className="bottle-neck"></div>
                    <div className="bottle-body">
                      <div className="bottle-label">
                        <span className="label-text">TEARS</span>
                        <span className="label-subtext">
                          {selectedProduct.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-details">
                <h2>{selectedProduct.name}</h2>
                <p>{selectedProduct.description}</p>
                <div className="modal-heat">
                  <span>Heat Level:</span>
                  <div className="heat-level">
                    {renderHeatLevel(selectedProduct.heatLevel)}
                  </div>
                </div>
                <div className="modal-features">
                  {selectedProduct.features.map((feature, i) => (
                    <span key={i} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="modal-price">{selectedProduct.price}</div>
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(selectedProduct)}
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Products;
