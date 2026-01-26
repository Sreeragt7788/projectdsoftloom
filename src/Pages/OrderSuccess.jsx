import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import styles from "../Styles/OrderSuccess.module.css";

function OrderSuccess() {
  const navigate = useNavigate();

  function handleToReturn() {
    navigate("/products");
  }

  const lastOrder = JSON.parse(localStorage.getItem("currentOrder"));

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentBox}>
        <div className={styles.iconWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            style={{ width: "80px", height: "80px", color: "green" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className={styles.titleText}>Order Confirmed!</h1>

        <p className={styles.subText}>Thank you for your purchase!</p>
        <p className={styles.subText}>Your order has been placed Successfully!</p>

        <div className={styles.detailsContainer}>
          <h3 className={styles.detailsTitle}>Order Details</h3>
          <div className={styles.detailRow}>
            <span className={styles.label}>Order ID </span>
            <span className={styles.value}>{lastOrder.orderId}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Total Amount </span>
            <span className={styles.value}>{lastOrder.totalAmount}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Payment Method </span>
            <span className={styles.value}>{lastOrder.method}</span>
          </div>
        </div>

        <div>
          <p className={styles.statusMessage}>We're preparing your order</p>
        </div>

        <p className={styles.footerText}>
          You will receive a confirmation and tracking details shortly!
        </p>

        <div className={styles.buttonWrapper}>
          <button className={styles.actionButton}>Track Order</button>
          <button className={`${styles.actionButton} ${styles.primaryButton}`} onClick={handleToReturn}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;