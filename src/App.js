import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import "./App.css";
import "./components.css";
import logo from "./assets/logo.png";
import triangle from "./assets/triangle.png";
import Loader from "./components/Loader";
// Import product images for confirmation modal
import wildImg from "./assets/wild.jpg";
import glitchImg from "./assets/glitch.jpg";
import greenImg from "./assets/green.png";

// Components
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState({
    isOpen: false,
    product: null,
    quantity: 1,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Products", href: "#products" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ];

  // Special bundle product
  const bundleProduct = {
    id: "bundle-160",
    name: "Special Bundle: All 3 Variants + Tube",
    price: "₹160.00",
    description: "Get all 3 hot sauce variants and a tube for just ₹160!",
    qty: 1,
    isBundle: true,
  };

  // Cart handlers
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const showConfirmationModal = (product) => {
    setConfirmationModal({ isOpen: true, product, quantity: 1 });
  };

  const confirmAddToCart = () => {
    const { product, quantity } = confirmationModal;
    if (!product) return;

    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item
        );
      }
      return [...prev, { ...product, qty: quantity }];
    });
    setConfirmationModal({ isOpen: false, product: null, quantity: 1 });
  };

  const updateConfirmationQuantity = (newQuantity) => {
    setConfirmationModal((prev) => ({
      ...prev,
      quantity: Math.max(1, newQuantity),
    }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };
  const clearCart = () => setCart([]);

  // Cart modal
  const CartModal = () => (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          className="cart-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
        >
          <motion.div
            className="cart-content glass-strong"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setIsCartOpen(false)}
            >
              ×
            </button>
            <h2 className="cart-title">Your Cart</h2>
            {cart.length === 0 ? (
              <div className="cart-empty">Your cart is empty.</div>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-info">
                      <span className="cart-item-name">{item.name}</span>
                      <span className="cart-item-price">{item.price}</span>
                    </div>
                    <div className="cart-item-controls">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>
                        +
                      </button>
                      <button
                        className="cart-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  Total:{" "}
                  {cart
                    .reduce(
                      (sum, item) =>
                        sum +
                        parseFloat(item.price.replace(/[^\d.]/g, "")) *
                          item.qty,
                      0
                    )
                    .toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                </div>
                <button
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "1rem" }}
                >
                  Checkout
                </button>
                <button
                  className="btn btn-secondary"
                  style={{ width: "100%", marginTop: "0.5rem" }}
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Confirmation Modal
  const ConfirmationModal = () => {
    // Determine the image to show based on product name
    let productImg = null;
    if (confirmationModal.product) {
      if (confirmationModal.product.name === "Wild (Launching soon)")
        productImg = wildImg;
      else if (confirmationModal.product.name === "Glitch (Launching soon)")
        productImg = glitchImg;
      else if (confirmationModal.product.name === "Green")
        productImg = greenImg;
    }
    return (
      <motion.div
        className="confirmation-modal"
        style={{ display: confirmationModal.isOpen ? "flex" : "none" }}
        initial={false}
        animate={confirmationModal.isOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={() =>
          setConfirmationModal({ isOpen: false, product: null, quantity: 1 })
        }
      >
        <motion.div
          className="confirmation-content glass-strong"
          initial={false}
          animate={
            confirmationModal.isOpen
              ? { scale: 1, opacity: 1 }
              : { scale: 0.95, opacity: 0 }
          }
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="modal-close"
            onClick={() =>
              setConfirmationModal({
                isOpen: false,
                product: null,
                quantity: 1,
              })
            }
          >
            ×
          </button>
          <h2 className="confirmation-title">Add to Cart</h2>

          {/* Product image */}
          {productImg && (
            <div className="confirmation-image-wrapper">
              <img
                src={productImg}
                alt={confirmationModal.product?.name}
                className="confirmation-product-image"
              />
            </div>
          )}

          <div className="confirmation-product">
            <div className="confirmation-product-info">
              <h3 className="confirmation-product-name">
                {confirmationModal.product?.name}
              </h3>
              <p className="confirmation-product-description">
                {confirmationModal.product?.description}
              </p>
              <div className="confirmation-product-price">
                {confirmationModal.product?.price}
              </div>
            </div>

            <div className="confirmation-quantity">
              <label className="quantity-label">Quantity:</label>
              <div className="quantity-controls">
                <motion.button
                  className="quantity-btn"
                  onClick={() =>
                    updateConfirmationQuantity(confirmationModal.quantity - 1)
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Minus size={16} />
                </motion.button>
                <span className="quantity-display">
                  {confirmationModal.quantity}
                </span>
                <motion.button
                  className="quantity-btn"
                  onClick={() =>
                    updateConfirmationQuantity(confirmationModal.quantity + 1)
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus size={16} />
                </motion.button>
              </div>
            </div>

            <div className="confirmation-total">
              <span>Total: </span>
              <span className="total-price">
                {confirmationModal.product &&
                  (
                    parseFloat(
                      confirmationModal.product.price.replace(/[^\d.]/g, "")
                    ) * confirmationModal.quantity
                  ).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
              </span>
            </div>
          </div>

          <div className="confirmation-actions">
            <motion.button
              className="btn btn-primary"
              onClick={confirmAddToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={16} />
              Add to Cart
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              onClick={() =>
                setConfirmationModal({
                  isOpen: false,
                  product: null,
                  quantity: 1,
                })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  if (loading) return <Loader />;

  return (
    <div className="App">
      {/* Navigation */}
      <motion.nav
        className={`navbar ${scrollY > 100 ? "navbar-scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-container">
          <motion.div
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logo} alt="Tears Logo" className="logo-img" />
          </motion.div>

          <div className="nav-menu">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="cart-btn"
              onClick={() => setIsCartOpen(true)}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="cart-count">
                  {cart.reduce((sum, item) => sum + item.qty, 0)}
                </span>
              )}
            </motion.button>
          </div>

          <motion.button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <span style={{ fontSize: 24 }}>&#10005;</span>
            ) : (
              <span style={{ fontSize: 24 }}>&#9776;</span>
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                className="cart-btn"
                onClick={() => setIsCartOpen(true)}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="cart-count">
                    {cart.reduce((sum, item) => sum + item.qty, 0)}
                  </span>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Cart Modal */}
      <CartModal />

      {/* Confirmation Modal */}
      <ConfirmationModal />

      {/* Main Content */}
      <main>
        <Hero logo={logo} />
        <Features />
        <Products
          addToCart={addToCart}
          openCart={() => setIsCartOpen(true)}
          showConfirmationModal={showConfirmationModal}
          addBundleToCart={bundleProduct}
        />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>

      <Footer logo={logo} />

      {/* Scroll to top button */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.button
            className="scroll-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={triangle}
              alt="Scroll to top"
              style={{
                width: "24px",
                height: "24px",
                transform: "rotate(180deg)",
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
