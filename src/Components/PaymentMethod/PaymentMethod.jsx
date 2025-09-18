import React from 'react';
import styles from './PaymentMethod.module.css';
import { FaCcVisa, FaPlus, FaLock, FaShieldAlt } from 'react-icons/fa';

const PaymentMethod = () => {
  return (
    <div className={styles.paymentCard}>
      <h3 className={styles.cardTitle}>Payment Method</h3>
      <div className={styles.cardDetails}>
        <div className={styles.cardInfo}>
          <div className={styles.cardIconWrapper}>
            <FaCcVisa className={styles.cardIcon} />
          </div>
          <div className={styles.cardNumber}>
            <span className={styles.cardType}>VISA</span> **** **** **** 4242
          </div>
        </div>
        <p className={styles.cardExpiry}>Expires 12/26</p>
        <p className={styles.cardholderName}>John Doe</p>
      </div>
      <div className={styles.actionButtons}>
        <button className={styles.updateCardBtn}>Update Card</button>
        <button className={styles.addPaymentBtn}>
          <FaPlus className={styles.plusIcon} />
          Add Payment Method
        </button>
      </div>
      <div className={styles.securityInfo}>
        <h4 className={styles.securityTitle}>Security</h4>
        <ul className={styles.securityList}>
          <li><FaLock className={styles.securityCheckIcon} /> SSL encrypted</li>
          <li><FaShieldAlt className={styles.securityCheckIcon} /> PCI compliant</li>
          <li><FaShieldAlt className={styles.securityCheckIcon} /> Bank-level security</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentMethod;