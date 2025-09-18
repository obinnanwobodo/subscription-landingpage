'use client'


import React, { useState } from 'react';
import styles from './Upgrade.module.css';
import { FaBolt, FaStar, FaBuilding, FaCheck } from 'react-icons/fa';

const UpgradePlanSection = () => {
  const [period, setPeriod] = useState('monthly'); // 'monthly' or 'yearly'

  const monthlyPrices = {
    basic: 9,
    pro: 29,
    enterprise: 99
  };

  const yearlyPrices = {
    basic: 90,
    pro: 288,
    enterprise: 950
  };

  const prices = period === 'monthly' ? monthlyPrices : yearlyPrices;

  const handleUpgradeClick = (planName) => {
    console.log(`Navigating to the upgrade page for the ${planName} plan.`);
  };

  return (
    <div className={styles.upgradeSectionContainer}>
      <h2 className={styles.sectionTitle}>Upgrade Your Plan</h2>
      <p className={styles.sectionDescription}>Choose the plan that works best for you</p>

      {/* Monthly/Yearly Toggle */}
      <div className={styles.periodToggle}>
        <button
          className={`${styles.toggleButton} ${period === 'monthly' ? styles.activePeriod : ''}`}
          onClick={() => setPeriod('monthly')}
        >
          Monthly
        </button>
        <button
          className={`${styles.toggleButton} ${period === 'yearly' ? styles.activePeriod : ''}`}
          onClick={() => setPeriod('yearly')}
        >
          Yearly
        </button>
      </div>

      <div className={styles.plansGrid}>
        {/* Basic Plan Card */}
        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <div className={styles.planIconWrapper}>
              <FaBolt className={styles.planIcon} />
            </div>
            <h3 className={styles.planName}>Basic</h3>
            <p className={styles.planTagline}>Perfect for getting started</p>
          </div>
          <div className={styles.planPrice}>
            <span className={styles.priceAmount}>${prices.basic}</span>/{period === 'monthly' ? 'month' : 'year'}
          </div>
          <ul className={styles.planFeatures}>
            <li><FaCheck className={styles.checkIcon} />Up to 3 projects</li>
            <li><FaCheck className={styles.checkIcon} />Basic analytics</li>
            <li><FaCheck className={styles.checkIcon} />Email support</li>
            <li><FaCheck className={styles.checkIcon} />Standard templates</li>
          </ul>
          <button className={styles.upgradeButton} onClick={() => handleUpgradeClick('Basic')}>Upgrade</button>
        </div>

        {/* Pro Plan Card - Most Popular */}
        <div className={`${styles.planCard} ${styles.mostPopular}`}>
          <div className={styles.mostPopularBadge}>Most Popular</div>
          <div className={styles.planHeader}>
            <div className={styles.planIconWrapper}>
              <FaStar className={styles.planIcon} />
            </div>
            <h3 className={styles.planName}>Pro</h3>
            <p className={styles.planTagline}>Best for growing teams</p>
          </div>
          <div className={styles.planPrice}>
            <span className={styles.priceAmount}>${prices.pro}</span>/{period === 'monthly' ? 'month' : 'year'}
          </div>
          <ul className={styles.planFeatures}>
            <li><FaCheck className={styles.checkIcon} />Unlimited projects</li>
            <li><FaCheck className={styles.checkIcon} />Advanced analytics</li>
            <li><FaCheck className={styles.checkIcon} />Priority support</li>
            <li><FaCheck className={styles.checkIcon} />Custom integrations</li>
            <li><FaCheck className={styles.checkIcon} />Advanced security</li>
          </ul>
          {/* Conditional Button Text and Styling */}
          <button
            className={`${styles.upgradeButton} ${period === 'monthly' ? styles.currentPlanButton : ''}`}
            onClick={() => handleUpgradeClick('Pro')}
            disabled={period === 'monthly'} // Disable "Current Plan" button
          >
            {period === 'monthly' ? 'Current Plan' : 'Upgrade'}
          </button>
        </div>

        {/* Enterprise Plan Card */}
        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <div className={styles.planIconWrapper}>
              <FaBuilding className={styles.planIcon} />
            </div>
            <h3 className={styles.planName}>Enterprise</h3>
            <p className={styles.planTagline}>For large organizations</p>
          </div>
          <div className={styles.planPrice}>
            <span className={styles.priceAmount}>${prices.enterprise}</span>/{period === 'monthly' ? 'month' : 'year'}
          </div>
          <ul className={styles.planFeatures}>
            <li><FaCheck className={styles.checkIcon} />Everything in Pro</li>
            <li><FaCheck className={styles.checkIcon} />Dedicated support</li>
            <li><FaCheck className={styles.checkIcon} />SLA guarantee</li>
            <li><FaCheck className={styles.checkIcon} />Custom contracts</li>
            <li><FaCheck className={styles.checkIcon} />Advanced permissions</li>
          </ul>
          <button className={styles.upgradeButton} onClick={() => handleUpgradeClick('Enterprise')}>Upgrade</button>
        </div>
      </div>
    </div>
  );
};

export default UpgradePlanSection;