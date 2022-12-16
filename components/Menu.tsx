import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'
import logo from '../images/lereussi-logo.png'

import cacaoLatte from '../images/cacaolatte.jpg'

import { useUser } from '../utils/user'

export default function Menu({logout} : any) {
    let isAuth: boolean
    const user: any = useUser()

    if (user !== null){
        isAuth = true;
    } else {
        isAuth = false;
    }

    const [showNav, setShowNav] = useState(false);
    const [showCart, setShortCart] = useState(false);

    const menus = [
        {
            'id' : 1,
            'url' : '/',
            'text' : 'Home'
        },{
            'id' : 2,
            'url' : '/product',
            'text' : 'Products'
        },{
            'id' : 3,
            'url' : '/',
            'text' : 'About'
        },{
            'id' : 4,
            'url' : '/',
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
            <nav className={`navbar ${showNav ? 'navbar-open' : 'navbar-close'} w-2/3 fixed z-50 overflow-x-auto bg-pizza-800 top-0 h-full`}>
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
                                    <Link href={d.url}>{d.text}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>

            <div className={`cart ${showCart ? 'cart-open' : 'cart-close'} w-2/3 md:w-2/5 fixed right-0 overflow-x-auto bg-pizza-800 top-0 h-screen`}>
                <button onClick={() => togCart()} className="absolute top-5 left-5 text-white text-xl font-bold">
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <div className="float-right p-5 text-white">Cart</div>
                <div className="h-full mt-16 p-5">
                    <div className={styles.cartcard}>
                        {/* <div>
                            <span className="text-pizza-500">Your shopping cart is empty!</span>
                        </div> */}
                        <div className="bg-white text-gray-500 flex relative">
                            <div className="material-symbols-outlined absolute top-0 right-0 text-red-600 cursor-pointer">
                                cancel
                            </div>
                            <div>
                                <Image src={cacaoLatte} alt="Cacao Latte" className="w-24 h-24 object-cover rounded-xl" />
                            </div>
                            <div className="text-lg flex flex-col items-start">
                                <div className="font-bold">Cacao Latte</div>
                                <div className="text-sm"><span className="font-bold">Qty:</span> 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-3">
                        <Link href="/checkout" className="text-white bg-gumbo border border-gumbo rounded-lg w-full py-2 hover:border-white hover:bg-transparent transition-all ease-in-out flex items-center justify-center">
                            <span className="material-symbols-outlined">
                                shopping_cart_checkout
                            </span>
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.header}>
                <div className={styles.headerinner}>
                    <div className={styles.headernav}>
                        <div className="flex items-center col-span-1 md:col-span-10">
                            <span className="material-symbols-outlined ml-1 md:ml-0 mr-1">
                                mail
                            </span> : info@test.com
                        </div>
                        <div className="text-right flex justify-end cursor-pointer items-center col-span-1 md:col-span-2">
                            {
                                isAuth ?
                                    <div className="group relative flex items-center">
                                        Account
                                        <span className="material-symbols-outlined">
                                            expand_more
                                        </span> 
                                        <div className="bg-white text-gray-600 w-full text-center scale-0 origin-top group-hover:scale-100 absolute -bottom-7 shadow rounded py-1" onClick={() => logout()}>
                                            Logout
                                        </div>
                                    </div>
                                :
                                    <div className="mr-2"><Link href="/" className="hover:text-pizza-400 transition-all ease-in-out">Login</Link> | <Link href="/" className="hover:text-pizza-400 transition-all ease-in-out">Register</Link></div>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.headerbannerinner}>
                    <div className={styles.headerbanner}>
                        <div className="col-span-3 md:col-span-3 order-2 flex items-center">
                            <Link href="/"><Image src={logo} alt='Le REUSSI Logo' className='m-auto w-full' priority /></Link>
                        </div>
                        <div className="col-span-1 md:col-span-7 order-1 md:order-2 md:flex items-center justify-center">
                            <div id="hamburger" className="ml-3 md:hidden flex flex-col items-start justify-center cursor-pointer" onClick={() => togNav()}>
                                <div className="bg-pizza-600 w-10 h-1 rounded-lg mb-2"></div>
                                <div className="bg-pizza-600 w-10 h-1 rounded-lg mb-2"></div>
                                <div className="bg-pizza-600 w-10 h-1 rounded-lg"></div>
                            </div>
                            <ul className="list-none header-menu hidden md:inline">
                                {
                                    menus.map(d => 
                                        <li className="inline text-sm" key={d.id}>
                                            <a href={d.url}>{d.text}</a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col-span-1 md:col-span-2 order-3 flex justify-end">
                            <button onClick={() => togCart()} className="group hover:border-white hover:bg-pizza-600 hover:text-white border text-sm rounded-3xl px-5 py-1 flex items-center relative transition-all ease-in-out mr-2 md:mr-0">
                                <span className="material-symbols-outlined group-hover:text-white transition-all ease-in-out text-pizza-600 mr-0 md:mr-2">
                                    shopping_cart
                                </span>
                                <span className='hidden md:block font-bold text-gray-600 group-hover:text-white transition ease-in-out'>Cart</span>
                                <div className="top-0 -right-1 absolute bg-red-600 group-hover:animate-bounce w-5 h-5 flex justify-center items-center text-white rounded-full text-xs">1</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 