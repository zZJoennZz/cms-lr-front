import Image from "next/image"
import lemonSoda from '../images/lemonsoda.jpg'

export default function ProductSidebar() {
    return (
        <>
            <div className="mb-5 border">
                <div className="bg-gray-100 p-3 uppercase">
                    Categories
                </div>
                <div className="bg-white p-3 text-sm">
                    Cakes
                </div>
                <div className="bg-white p-3 text-sm">
                    Beverages
                </div>
                <div className="bg-white p-3 text-sm">
                    Pastries
                </div>
            </div>
            <div className="mb-5 border">
                <div className="bg-gray-100 p-3 uppercase">
                    Bestsellers
                </div>
                <div className="bg-white p-3 text-sm flex items-center border-b">
                    <div><Image src={lemonSoda} alt="Lemon soda" className="w-16 h-16 object-cover object-center rounded-lg" /></div>
                    <div className="flex-grow p-3">
                        <p className="font-bold">Test</p>
                        <p>PHP 100.00</p>
                    </div>
                </div>
                <div className="bg-white p-3 text-sm flex items-center border-b">
                    <div><Image src={lemonSoda} alt="Lemon soda" className="w-16 h-16 object-cover object-center rounded-lg" /></div>
                    <div className="flex-grow p-3">
                        <p className="font-bold">Test</p>
                        <p>PHP 100.00</p>
                    </div>
                </div>
                <div className="bg-white p-3 text-sm flex items-center">
                                <div><Image src={lemonSoda} alt="Lemon soda" className="w-16 h-16 object-cover object-center rounded-lg" /></div>
                                <div className="flex-grow p-3">
                                    <p className="font-bold">Test</p>
                                    <p>PHP 100.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 border">
                            <div className="bg-gray-100 p-3 uppercase">
                                Latest
                            </div>
                            <div className="bg-white p-3 text-sm flex items-center border-b">
                                <div><Image src={lemonSoda} alt="Lemon soda" className="w-16 h-16 object-cover object-center rounded-lg" /></div>
                                <div className="flex-grow p-3">
                                    <p className="font-bold">Test</p>
                                    <p>PHP 100.00</p>
                                </div>
                            </div>
                            <div className="bg-white p-3 text-sm flex items-center border-b">
                                <div><Image src={lemonSoda} alt="Lemon soda" className="w-16 h-16 object-cover object-center rounded-lg" /></div>
                                <div className="flex-grow p-3">
                                    <p className="font-bold">Test</p>
                                    <p>PHP 100.00</p>
                                </div>
                            </div>
                            <div className="bg-white p-3 text-sm flex items-center">
                                <div><Image src={lemonSoda} alt="Lemon soda" className="w-16 h-16 object-cover object-center rounded-lg" /></div>
                                <div className="flex-grow p-3">
                                    <p className="font-bold">Test</p>
                                    <p>PHP 100.00</p>
                                </div>
                            </div>
                        </div>
        </>
    )
}