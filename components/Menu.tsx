import Image from 'next/image';
import { useState } from 'react'
import styles from '../styles/Menu.module.css'
import logo from '../images/lereussi-logo.png'

export default function Menu() {
    const [showNav, setShowNav] = useState(false);
    const [showCart, setShortCart] = useState(false);

    const menus = [
        {
            'id' : 1,
            'url' : '#',
            'text' : 'Home'
        },{
            'id' : 2,
            'url' : '#',
            'text' : 'Menu'
        },{
            'id' : 3,
            'url' : '#',
            'text' : 'About'
        },{
            'id' : 4,
            'url' : '#',
            'text' : 'Contact Us'
        },
    ]

    function togNav() {
        setShowNav(prev => !prev);
    }

    function togCart() {
        setShortCart(prev => !prev);
    }

    return (
        <>
            <div className={`${showNav || showCart ? 'bg-slate-700 opacity-50 translate-y-0' : '-translate-y-full opacity-100'} z-30 fixed top-0 left-0 h-screen w-screen`}></div>
            <nav className={`navbar ${showNav ? 'navbar-open' : 'navbar-close'} w-1/2 fixed overflow-x-auto bg-pizza-800 top-0 h-full`}>
                <button onClick={() => togNav()} className="absolute top-5 right-5 text-white text-xl font-bold">
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <div className="text-center h-full flex text-3xl items-center justify-center">
                    <ul className="menu-li list-none text-white">
                        {
                            menus.map(d => 
                                <li key={d.id}>
                                    <a href={d.url}>{d.text}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>

            <div className={`cart ${showCart ? 'cart-open' : 'cart-close'} w-1/5 fixed right-0 overflow-x-auto bg-pizza-800 top-0 h-screen`}>
                <button onClick={() => togCart()} className="absolute top-5 left-5 text-white text-xl font-bold">
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <div className="float-right p-5 text-white">Cart</div>
                <div className="h-full mt-16 p-5">
                    <div className={styles.cartcard}>
                        <div>
                            <span>Your shopping cart is empty!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header}>
                <div className={styles.headerinner}>
                    <div className={styles.headernav}>
                        <div className="flex items-center col-span-10">
                            <span className="material-symbols-outlined mr-1">
                                mail
                            </span> : info@test.com
                        </div>
                        <div className="text-right flex justify-end cursor-pointer items-center col-span-2" onClick={() => togNav()}>
                            Account
                            <span className="material-symbols-outlined">
                                expand_more
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.headerbannerinner}>
                    <div className={styles.headerbanner}>
                        <div className="md:col-span-3"><Image src={logo} alt='Le REUSSI Logo' className='w-10/12 m-auto md:w-full' priority /></div>
                        <div className="md:col-span-7 hidden md:flex items-center justify-center">
                            <ul className="list-none header-menu">
                                {
                                    menus.map(d => 
                                        <li className="inline text-sm" key={d.id}>
                                            <a href={d.url}>{d.text}</a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="md:col-span-2 flex justify-end">
                            <button onClick={() => togCart()} className="group hover:border-white hover:bg-pizza-600 hover:text-white border p-2 text-sm rounded-3xl px-5 flex items-center">
                                <span className="material-symbols-outlined group-hover:text-white text-pizza-600 mr-2">
                                    shopping_cart
                                </span>
                                Cart (0)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 