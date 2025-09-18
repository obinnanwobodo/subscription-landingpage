import React from 'react'
import styles from './Billing.module.css'
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdAccountBalanceWallet } from "react-icons/md";
import Image from 'next/image';
import atm from '../../../public/Gemini_Generated_Image_hakz3mhakz3mhakz (2).png'
import { FaCalendarAlt } from 'react-icons/fa';
import { LuCrown } from "react-icons/lu";
import Upgrade from '../Upgrade/Upgrade';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import BillingHistory from '../BillingHistory/BillingHistory';
import Footer from '../Footer/Footer';

const Billing = () => {
    return (
        <div className={`${styles.genbill}`}>


            <div className={`${styles.firsttextsgrpcover}`}>

                <div className={`${styles.firsttextsgrp}`}>

                    <div className={`${styles.left3}`}>

                        <h2 className={`${styles.mys}`}>Manage Your Subscription</h2>
                        <p className={`${styles.sbac}`}>Seamless Billing & Account Control</p>

                        <div className={`${styles.icnndbk}`}>
                            <div><IoIosArrowRoundBack /></div>
                            <p className={`${styles.back}`}>Back</p>
                        </div>

                    </div>

                    <p className={`${styles.myp}`}>Manage Your Plan</p>


                    <div className={`${styles.atm}`}>
                        <Image
                            src={atm}
                            alt='atm-img'
                        />
                    </div>

                    <div className={`${styles.icnndacc}`}>
                        <div><MdAccountBalanceWallet /></div>
                        <p className={`${styles.account}`}>Account</p>
                    </div>

                </div>


            </div>







            {/* BILLING AND SUBSCRIPTION */}

            <div className={styles.bamy}>

                <h2 className={styles.bas}>Billing & Subscription</h2>
                <p className={styles.mysabi}>Manage your subscription and billing information

                </p>
            </div>

            <div className={styles.currentPlanCard}>
                {/* Header of the card */}
                <div className={styles.cardHeader}>
                    <div className={styles.planTitleSection}>
                        <div className={styles.crowndiv}><LuCrown className={styles.crownIcon} /></div>
                        <span className={styles.planTitle}>Current Plan</span>
                    </div>
                    <span className={styles.statusActive}>Active</span>
                </div>

                {/* Plan details */}
                <p className={styles.activeSubscriptionText}>Your active subscription</p>
                <h2 className={styles.planName}>
                    Pro Plan <span className={styles.planPrice}>$29</span> <span className={styles.permonth}>/month</span>
                </h2>
                <p className={styles.renewalDate}>
                    <FaCalendarAlt className={styles.calendarIcon} />
                    Renews on December 24, 2024
                </p>

                {/* Plan features */}
                <div className={styles.planFeatures}>
                    <h3>Plan includes:</h3>
                    <ul>
                        <li>Unlimited projects</li>
                        <li>Advanced analytics</li>
                        <li>Priority support</li>
                        <li>Custom integrations</li>
                    </ul>
                </div>

                {/* Action buttons */}
                <div className={styles.cardActions}>
                    <button className={styles.btnChangePlan}>Change Plan</button>
                    <button className={styles.btnCancelSubscription}>Cancel Subscription</button>
                </div>
            </div>






            {/* UPGRADEN YOUR PLAN  */}


            <div>
                <Upgrade />
            </div>




            <div className={styles.billndpay}>



                <div>
                    <BillingHistory />
                </div>


                <div>
                    <PaymentMethod />
                </div>



            </div>


            <div>
                <Footer />
            </div>


        </div>
    )
}

export default Billing