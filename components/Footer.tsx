import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import logo from '../images/lereussi-logo.png';

export default function Footer() {
    return (
        <>
            <div className="w-12/12 md:w-10/12 m-auto py-10 border-t px-3 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-5 md:space-x-3 space-y-3 md:space-y-0">  
                    <div className="flex flex-col col-span-2">
                        <div><Image priority src={logo} alt="Le REUSSI Logo" className="w-1/2 mb-3" /></div>
                        <div className="text-sm text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor.</div>
                        <div>
                            
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-slate-600 mb-4">Information</div>
                        <ul className={styles.footerLinks}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                        </ul>
                    </div>
                    <div>
                    <div className="font-bold text-slate-600 mb-4">Account</div>
                        <ul className={styles.footerLinks}>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="flex justify-center items-center mb-3">
                            <div className="float-left w-12 h-12 bg-pizza-500 rounded-full flex justify-center items-center mr-4 text-white">A</div>
                            <div className="flex flex-col">
                                <div className="font-bold text-slate-600">Contact Us</div>
                                <div className="text-sm text-slate-500">0912 345 6789</div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mb-3">
                            <div className="float-left w-12 h-12 bg-pizza-500 rounded-full flex justify-center items-center mr-4 text-white">A</div>
                            <div className="flex flex-col">
                                <div className="font-bold text-slate-600">Contact Us</div>
                                <div className="text-sm text-slate-500">0912 345 6789</div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="float-left w-12 h-12 bg-pizza-500 rounded-full flex justify-center items-center mr-4 text-white">A</div>
                            <div className="flex flex-col">
                                <div className="font-bold text-slate-600">Contact Us</div>
                                <div className="text-sm text-slate-500">0912 345 6789</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-pizza-600 text-white w-full">
                <div className="w-12/12 md:w-10/12 m-auto py-3 text-center md:text-left">
                    Powered by T1 Solutions | Lé REUSSI © 2022
                </div>
            </div>
        </>
    )
}