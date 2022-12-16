import { useState, useEffect } from 'react'
import Meta from '../components/Meta'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Image from 'next/image'
import ProductSidebar from '../components/ProductSidebar'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useUser } from '../utils/user'

import lemonSoda from '../images/lemonsoda.jpg'

import type { CheckoutPayload } from '../types/appTypes'

const LoginSchema : any = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Required'),
    password: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Required')
})

export default function Checkout(props : any) {
    let isAuth: boolean;
    const user: any = useUser()
    if (user !== null){
        isAuth = true;
    } else {
        isAuth = false;
    }
    const [isLoading, setIsLoading] = useState(true)
    const [selectedCheckoutType, setSelectedCheckoutType] = useState("");
    const [checkoutType, setCheckoutType] = useState("")
    const [shippingForm, setShippingForm] = useState(
        {
            first_name: "",
            middle_initial: "",
            last_name: "",
            mobile_number: "",
            email_address: "",
            address1: "",
            address2: "",
            city: "",
            zip_code: "",
        }
    );
    const [billingForm, setBillingForm] = useState(
        {
            first_name: "",
            middle_initial: "",
            last_name: "",
            mobile_number: "",
            email_address: "",
            address1: "",
            address2: "",
            city: "",
            zip_code: "",
        }
    );

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            props.login(values)
        }
    })

    const checkoutPayload : CheckoutPayload = {
        total_amount: 450,
        total_discount: 0,
        total_fees: 50,
        order_amount: 400,
        details: [
            {
                product_variant: 3,
                quantity: 20,
                amount: 20,
                discount: 0,
                total_amount: 400,
            }
        ],
        fees: [
            {
                fee_type: "Delivery Fee",
                amount: 50
            }
        ],
        customer: {
            name: "Krys Enriquez",
            email_address: "krystjyn.enqriquez@gmail.com",
            contact_number: "09959882105",
            address: [
                {
                    address1: "B15 L1 Silverdale",
                    address2: "Tangos",
                    city: "Baliuag",
                    zip: "3006",
                    province: "",
                    country: "",
                    address_type: "SHIPPING"
                },
                {
                    address1: "B15 L1 Silverdale",
                    address2: "Tangos",
                    city: "Baliuag",
                    zip: "3006",
                    province: "",
                    country: "",
                    address_type: "SHIPPING"
                }
            ]
        },
        account: "",
        payment_method: "BANK_TRANSFER",
        order_type: "DELIVERY",
        attachments: [
            {
                attachment: "",
            }
        ]
    }

    function onChangeShipping(e: any) { setShippingForm((prev) => { return {...prev, [e.target.name] : e.target.value} }) }

    function sameAsShippingIsChecked(e: any) {
        if (e.target.checked) {

        }
    }
    
    useEffect(() => {
        let isSub = true

        if (isSub) setIsLoading(false)

        return () => {
            isSub = false
        }
    }, [])
    
    return (
        <>
            <Meta 
                pageTitle="Checkout Order | Le REUSSI"
                metaDescription="Test"
                otherMetaData="Test"
                metaKeywords="Test"
                metaRobots="Test"
            />
            <Menu logout={() => props.logout()} />
            <div className="w-12/12 md:w-10/12 m-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 space-x-0 md:space-x-2">
                    <div className="col-span-3 order-2 md:order-1">
                        <ProductSidebar />
                    </div>
                    <div className="col-span-9 order-1 md:order-2">
                        <div className="bg-gray-100 w-full font-bold p-3 border border-gray-100 uppercase mb-3">
                            Checkout Order
                        </div>

                        {isLoading && <div className="p-2 animate-pulse">Loading...</div>}
                        <div className="border mb-4">
                            <div className="border-b p-4">
                                <div className="text-sm text-black">Items in cart</div>
                            </div>
                            <div className="p-3">
                                <div className="flex">
                                    <Image src={lemonSoda} alt="Lemon soda" className="w-28 h-28 object-cover rounded-xl mr-3" />
                                    <div className="flex-grow">
                                        <span className="text-3xl font-bold ">Lemon Soda</span>
                                        <span className="material-symbols-outlined cursor-pointer text-red-600 hover:text-red-400 transition-all ease-in-out">
                                            remove
                                        </span>
                                        <div className="text-gray-500">Variant: Test</div>
                                    </div>
                                    <div className="text-lg px-2">
                                        PHP 20.00
                                    </div>
                                    <div className="text-lg px-2">
                                        <span className="font-bold">Qty:</span> <input type="number" className="text-sm p-1 border w-14 rounded-lg" min={1} defaultValue={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            !isLoading && 
                                !isAuth && checkoutType === "" &&
                                    <div className='border'>
                                        <div className='border-b p-4 cursor-pointer bg-gray-50'>
                                            <div className='text-sm text-black'>Checkout Options</div>
                                        </div>
                                        <div className='p-3'>
                                            <div className="grid grid-cols-1 md:grid-cols-2 space-x-3">
                                                <div className="p-2 relative">
                                                    <p className="text-xl">New Customer</p>
                                                    <p className="text-gray-500 my-5">Checkout Options:</p>
                                                    {/* <div className="mb-3">
                                                        <div className="flex items-center">
                                                            <input type="radio" onClick={() => setSelectedCheckoutType("create")} name="checkout_op" className="mr-3" /> Create Account
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input type="radio" onClick={() => setSelectedCheckoutType("guest")} name="checkout_op" className="mr-3" /> Guest Checkout
                                                        </div>
                                                    </div>
                                                    <div className="text-gray-400 mb-3">
                                                        By creating an account you will be able to shop faster.
                                                    </div> */}
                                                    <button onClick={() => setCheckoutType("guest")} className="py-2 px-5 bg-pizza-600 hover:bg-black transition-all ease-in-out text-white rounded-3xl">Continue as guest</button>
                                                </div>
                                                <div className='p-2 relative'>
                                                    <p className="text-xl">Returning Customer</p>
                                                    <form onSubmit={formik.handleSubmit}>
                                                        <div className="group relative">   
                                                            <label htmlFor="email_address" className="block mt-3 mb-2 text-sm text-gray-600">Email Address</label>
                                                            <input type="text" name="username" id="username" className="border p-3 rounded-xl placeholder-gray-500 outline-none focus:outline focus:outline-gumbo transition-all ease-in-out w-full" placeholder="Enter your username" required value={formik.values.username} onChange={formik.handleChange} />
                                                            {formik.errors.username && formik.touched.username ? <div className="mt-2 text-xs text-gray-400">{formik.errors.username}</div> : null}
                                                        </div>
                                                        <div className="group relative">   
                                                            <label htmlFor="email_address" className="block mt-3 mb-2 text-sm text-gray-600">Password</label>
                                                            <input type="password" name="password" id="password" className="border p-3 rounded-xl placeholder-gray-500 outline-none focus:outline focus:outline-gumbo transition-all ease-in-out w-full" placeholder="Enter your password" required value={formik.values.password} onChange={formik.handleChange} />
                                                            {formik.errors.password && formik.touched.password ? <div className="mt-2 text-xs text-gray-400">{formik.errors.password}</div> : null}
                                                        </div>
                                                        <div className="group relative mt-4">
                                                            <button type="submit" className="flex items-center justify-center w-full border border-pizza-600 bg-pizza-600 text-white hover:border-slate-400 hover:bg-white hover:text-slate-400 rounded-3xl py-3 transition-all ease-in-out font-bold">
                                                                Login 
                                                                <span className="material-symbols-outlined">
                                                                    login
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        }
                        { checkoutType !== "" && !isAuth && <button className="text-xs mb-3 border border-pottersclay text-pottersclay px-3 py-1 rounded-lg flex items-center justify-center hover:border-gumbo hover:text-gumbo transition-all ease-in-out" onClick={() => setCheckoutType("")}>
                                <span className="material-symbols-outlined text-xs">
                                    arrow_back_ios
                                </span>
                                Go Back
                            </button>}
                        {
                            (isAuth || checkoutType !== "") &&
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-3">
                                        <div className='border col-span-2'>
                                            {
                                                isAuth && 
                                                <>
                                                    <div className='border-b p-4 bg-gray-50'>
                                                        <div className='text-sm text-black'>Shipping</div>
                                                    </div>
                                                    <div className='p-3'>
                                                        <div>
                                                            <div className="p-2 relative">
                                                                <p className="text-gray-500 text-xs mb-2">Customer:</p>
                                                                <p className="text-xl font-bold text-gray-600">Peter Parker</p>
                                                                <p className="text-gray-500 text-xs mt-5 mb-2">Address:</p>
                                                                <a className="float-right text-xs text-pizza-600 hover:text-gray-600 transition-all ease-in-out" href="/">Edit</a>
                                                                <p className="text-gray-600">20 Ingram St., Queens, New York City</p>
                                                                <p className="text-gray-500 text-xs mt-5 mb-2">Contact Details:</p>
                                                                <div className="text-gray-600 flex">
                                                                    <div className="flex items-center mr-2">
                                                                        <span className="material-symbols-outlined">
                                                                            phone_iphone
                                                                        </span> 
                                                                        +63 999 999 9999
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <span className="material-symbols-outlined">
                                                                            mail
                                                                        </span> 
                                                                        test@test.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='border-b border-t p-4 bg-gray-50'>
                                                        <div className='text-sm text-black'>Billing</div>
                                                    </div>
                                                    <div className='p-3'>
                                                        <div>
                                                            <div className="p-2 relative">
                                                                <p className="text-gray-500 text-xs mb-2">Customer:</p>
                                                                <p className="text-xl font-bold text-gray-600">Peter Parker</p>
                                                                <p className="text-gray-500 text-xs mt-5 mb-2">Address:</p>
                                                                <a className="float-right text-xs text-pizza-600 hover:text-gray-600 transition-all ease-in-out" href="/">Edit</a>
                                                                <p className="text-gray-600">20 Ingram St., Queens, New York City</p>
                                                                <p className="text-gray-500 text-xs mt-5 mb-2">Contact Details:</p>
                                                                <div className="text-gray-600 flex">
                                                                    <div className="flex items-center mr-2">
                                                                        <span className="material-symbols-outlined">
                                                                            phone_iphone
                                                                        </span> 
                                                                        +63 999 999 9999
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <span className="material-symbols-outlined">
                                                                            mail
                                                                        </span> 
                                                                        test@test.com
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            {
                                                checkoutType === "guest" && !isAuth &&
                                                <>
                                                    <div className='border-b p-4 bg-gray-50'>
                                                        <div className='text-sm text-black'>Shipping</div>
                                                    </div>
                                                    <div className='p-3'>
                                                        <div>
                                                            <div className="p-2 relative">
                                                                <form>
                                                                    <div className="group">
                                                                        <div className="text-xs mb-2">Customer:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-2">
                                                                            <div className="group mb-3">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="First Name" name="first_name" id="first_name" required />
                                                                            </div>
                                                                            <div className="group mb-3">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="Middle Initial" name="middle_initial" id="middle_initial" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="Last Name" name="last_name" id="last_name" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-xs mb-2">Contact Details:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mb-3">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="mobile_number" id="mobile_number" placeholder="Mobile Number" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="email_address" id="email_address" placeholder="Email Address" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-xs mb-2">Shipping Address:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mb-3">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="address1" id="address1" placeholder="Address Line 1" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="address2" id="address2" placeholder="Address Line 2" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mt-2">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="city" id="city" placeholder="City" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="zip_code" id="zip_code" placeholder="Zip Code" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='border-b border-t p-4 bg-gray-50'>
                                                        <div className='text-sm text-black'>
                                                            Billing
                                                            <div className="float-right flex">
                                                                <input type="checkbox" className="mr-1" onClick={(e : any) => sameAsShippingIsChecked(e)} name="same_as_shipping" id="same_as_shipping" /> <label htmlFor="same_as_shipping">Same as shipping</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='p-3'>
                                                        <div>
                                                            <div className="p-2 relative">
                                                                <form>
                                                                    <div className="group">
                                                                        <div className="text-xs mb-2">Customer:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-2">
                                                                            <div className="group mb-3">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="First Name" name="first_name" id="first_name" required />
                                                                            </div>
                                                                            <div className="group mb-3">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="Middle Initial" name="middle_initial" id="middle_initial" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="Last Name" name="last_name" id="last_name" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-xs mb-2">Contact Details:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mb-3">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="mobile_number" id="mobile_number" placeholder="Mobile Number" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="email_address" id="email_address" placeholder="Email Address" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-xs mb-2">Shipping Address:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mb-3">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="address1" id="address1" placeholder="Address Line 1" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="address2" id="address2" placeholder="Address Line 2" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mt-2">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="city" id="city" placeholder="City" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="zip_code" id="zip_code" placeholder="Zip Code" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            {
                                                checkoutType === "create" && !isAuth &&
                                                <>
                                                    <div className='border-b p-4 bg-gray-50'>
                                                        <div className='text-sm text-black'>Shipping</div>
                                                    </div>
                                                    <div className='p-3'>
                                                        <div>
                                                            <div className="p-2 relative">
                                                                <form>
                                                                    <div className="group">
                                                                        <div className="text-xs mb-2">Account:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2">
                                                                            <div className="group mb-3">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="Username" name="username" id="username" required />
                                                                            </div>
                                                                            <div className="group mb-3">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="password" placeholder="Password" name="password" id="password" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-xs mb-2">Customer:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-2">
                                                                            <div className="group mb-3">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="First Name" name="first_name" id="first_name" required />
                                                                            </div>
                                                                            <div className="group mb-3">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="Middle Initial" name="middle_initial" id="middle_initial" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="Last Name" name="last_name" id="last_name" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-xs mb-2">Contact Details:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mb-3">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="mobile_number" id="mobile_number" placeholder="Mobile Number" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="email_address" id="email_address" placeholder="Email Address" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-xs mb-2">Shipping Address:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mb-3">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="address1" id="address1" placeholder="Address Line 1" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="address2" id="address2" placeholder="Address Line 2" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mt-2">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="city" id="city" placeholder="City" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="zip_code" id="zip_code" placeholder="Zip Code" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='border-b border-t p-4 bg-gray-50'>
                                                        <div className='text-sm text-black'>
                                                            Billing
                                                            <div className="float-right flex">
                                                                <input type="checkbox" className="mr-1" name="same_as_shipping" id="same_as_shipping" /> <label htmlFor="same_as_shipping">Same as shipping</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='p-3'>
                                                        <div>
                                                            <div className="p-2 relative">
                                                                <form>
                                                                    <div className="group">
                                                                        <div className="text-xs mb-2">Customer:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-2">
                                                                            <div className="group mb-3">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="First Name" name="first_name" id="first_name" required />
                                                                            </div>
                                                                            <div className="group mb-3">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="Middle Initial" name="middle_initial" id="middle_initial" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input className="border rounded-lg w-full outline-none p-2" type="text" placeholder="Last Name" name="last_name" id="last_name" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-xs mb-2">Contact Details:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mb-3">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="mobile_number" id="mobile_number" placeholder="Mobile Number" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="email_address" id="email_address" placeholder="Email Address" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-xs mb-2">Shipping Address:</div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mb-3">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="address1" id="address1" placeholder="Address Line 1" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="address2" id="address2" placeholder="Address Line 2" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2 mt-2">
                                                                            <div className="group">
                                                                                <input type="text" className="border rounded-lg w-full outline-none p-2" name="city" id="city" placeholder="City" />
                                                                            </div>
                                                                            <div className="group">
                                                                                <input type="email" className="border rounded-lg w-full outline-none p-2" name="zip_code" id="zip_code" placeholder="Zip Code" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                        <div className="pl-2">
                                        <div className="border">
                                            <div className="border-b p-4 text-sm">
                                                Order Summary
                                            </div>
                                            <div className="p-3">
                                                <div className="flex items-center">
                                                    <div className="flex-grow text-gray-500 text-xs">Subtotal (20 items)</div>
                                                    <div><span className="text-xs">PHP</span> 400.00</div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="flex-grow text-gray-500 text-xs">Delivery Fee</div>
                                                    <div><span className="text-xs">PHP</span> 50.00</div>
                                                </div>
                                                <hr className="my-2" />
                                                <div className="flex items-center mb-3">
                                                    <div className="flex-grow text-gray-500 text-xs">Delivery Fee</div>
                                                    <div><span className="text-xs">PHP</span> 450.00</div>
                                                </div>
                                                <div className="my-3">
                                                    <label className="block">
                                                        <span className="sr-only">Choose File</span>
                                                        <input 
                                                            type="file"
                                                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                                                    </label>
                                                </div>
                                                <button className="text-white bg-pizza-600 w-full text-sm py-2 hover:bg-pizza-500 transition-all ease-in-out rounded flex items-center justify-center" onClick={() => props.login()}>
                                                    <div className="material-symbols-outlined mr-2">
                                                        fingerprint
                                                    </div>
                                                    PLACE ORDER
                                                </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </>
                        }
                        </div>
                </div>
            </div>
            <Footer />
        </>
    )
}