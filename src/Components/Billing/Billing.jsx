import React from 'react'
import styles from './Billing.module.css'
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdAccountBalanceWallet } from "react-icons/md";
import Image from 'next/image';
import atm from '../../../public/Gemini_Generated_Image_hakz3mhakz3mhakz (2).png'



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
                        <p>Back</p>
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
                    <p>Account</p>
                </div>

            </div>


</div>















        </div>
    )
}

export default Billing