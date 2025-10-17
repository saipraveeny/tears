import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Flame, Star, ShoppingCart, Eye } from "lucide-react";

// Import variant images
import wildImage from "../assets/wild.png";
import glitchImage from "../assets/glitch.png";
import greenImage from "../assets/green.png";

// Import modal images
import wildJpg from "../assets/wild.jpg";
import glitchJpg from "../assets/glitch.jpg";
import greenJpg from "../assets/green.jpg";

const Products = ({
  addToCart,
  openCart,
  showConfirmationModal,
  addBundleToCart,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Green (100ml)",
      description:
        "Classic green chilli with citrus undertones, with coriander seeds, black pepper, capsicum and kaffir lime",
      heatLevel: 2,
      price: "₹250.00",
      color: "#548c50",
      features: ["Green chilli", "Lemon", "Balanced Heat", "Versatile"],
      image: greenImage,
      available: true,
    },
    {
      id: 2,
      name: "Wild (Launching soon)",
      description: "A bold blend of red chilli & mustard",
      heatLevel: 4,
      price: "Ignite Your Taste Buds Soon",
      color: "#ff3b30",
      features: ["Extra Hot", "Herb Infused", "Smoky Finish"],
      image: wildImage,
      available: false,
    },
    {
      id: 3,
      name: "Glitch (Launching soon)",
      description: "Innovative fusion of red chilli and grape fruit",
      heatLevel: 3,
      price: "Digital Heat Revolution",
      color: "#0f222b",
      features: ["Exotic Spices", "Complex Heat"],
      image: glitchImage,
      available: false,
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
              <div
                className="product-image"
                style={{ background: product.color, borderRadius: "2rem" }}
              >
                <img
                  src={product.image}
                  alt={`${product.name} Hot Sauce`}
                  className="product-variant-image"
                />
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
                  {product.available && (
                    <div className="product-rating">
                      <Star size={16} className="star-icon" />
                      <span>4.9</span>
                    </div>
                  )}
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
                  {product.available ? (
                    <motion.button
                      className="btn btn-primary add-to-cart"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        showConfirmationModal(product);
                      }}
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
                    </motion.button>
                  ) : (
                    <div className="coming-soon-badge">
                      <span>Launching soon</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Great Deal Panel (moved below products) */}
        <motion.div
          className="great-deal-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="great-deal-content">
            <div className="great-deal-title">Launching Offer</div>
            <div className="great-deal-desc">
              <b>3 bottles of green</b> for just{" "}
              <span className="great-deal-price">₹650.00</span>
              <span className="discount-badge">Save ₹100</span>
            </div>
            <div className="original-price">
              <span className="strikethrough">₹750.00</span>
            </div>
          </div>
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
            <div className="modal-product modal-product-grid">
              <div className="modal-image modal-image-fill">
                {selectedProduct.name === "Wild (Launching soon)" && (
                  <img
                    src={wildJpg}
                    alt="Wild Hot Sauce"
                    className="modal-variant-image modal-variant-image-fill"
                  />
                )}
                {selectedProduct.name === "Glitch (Launching soon)" && (
                  <img
                    src={glitchJpg}
                    alt="Glitch Hot Sauce"
                    className="modal-variant-image modal-variant-image-fill"
                  />
                )}
                {selectedProduct.name === "Green (100ml)" && (
                  <img
                    src={greenJpg}
                    alt="Green Hot Sauce"
                    className="modal-variant-image modal-variant-image-fill"
                  />
                )}
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
                {selectedProduct.available ? (
                  <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => showConfirmationModal(selectedProduct)}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </motion.button>
                ) : (
                  <div className="modal-coming-soon">
                    <span>Launching soon - Stay Tuned!</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Products;
