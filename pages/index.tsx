import Meta from '../components/Meta';
import Menu from '../components/Menu';
import CarouselSlider from '../components/CarouselSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import SpecialOffers from '../components/SpecialOffers';
import Footer from '../components/Footer';
import type { PageContent, PageContent1 } from '../types/appTypes';
import Parse from 'html-react-parser';

export default function Home(props : PageContent1) {
    return (
        <>
            {/* <Meta 
                pageTitle={props.pageTitle} 
                metaDescription={props.metaDescription} 
                otherMetaData={props.otherMetaData} 
                metaKeywords={props.metaKeywords} 
                metaRobots={props.metaRobots} 
            /> */}
            <Meta 
                pageTitle="Test"
                metaDescription="Test"
                otherMetaData="Test"
                metaKeywords="Test"
                metaRobots="Test"
            />
            <Menu />
            <CarouselSlider />
            <div className="bg-gray-200 flex flex-col items-center justify-center py-28">
                <div className="m-auto w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 text-center">
                    <div className="text-4xl font-bold mb-3">
                        Search Product
                    </div>
                    <div className="text-gray-500 mb-3">
                        Looking for something?
                    </div>
                    <div className="grid grid-cols-6 border border-slate-300 rounded-3xl bg-white">
                        <div className="col-span-5 flex items-center justify-center">
                            <input type="text" placeholder="Search Our Menu" className="w-full text-sm outline-none bg-transparent py-3 px-4" />
                        </div>
                        <div className="col-span-1">
                            <button className="w-full uppercase bg-pizza-500 hover:bg-black transition-all ease-in-out text-white text-sm p-3 rounded-tr-3xl rounded-br-3xl border-white border">Search</button>
                        </div>
                    </div>
                </div> 
            </div>
            
            <FeaturedProducts />
            
            <div className="w-12/12 md:w-10/12 m-auto py-28">
                <div className="text-4xl font-bold text-center mb-5">Shop by Category</div>
                <div className="m-auto w-20 h-1 bg-pizza-600 mb-10"></div>

                <div className="grid grid-cols-1 lg:grid-cols-5 lg:space-x-2 mb-16">
                    <div className="group cursor-pointer">
                        <div className="bg-pizza-500 h-60 w-60 m-auto rounded-2xl shadow-xl text-white flex items-center justify-center">
                            <span className="material-symbols-outlined border-yellow-600 text-6xl p-3 h-24 w-24 border-4 rounded-full flex items-center justify-center m-auto">
                                bakery_dining
                            </span>
                        </div>
                        <div className="text-center mt-5 text-xl font-semibold text-gray-600 group-hover:text-pizza-500 transition-all ease-in-out duration-300">Lorem</div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="bg-pizza-500 h-60 w-60 m-auto rounded-2xl shadow-xl text-white flex items-center justify-center">
                            <span className="material-symbols-outlined border-yellow-600 text-6xl p-3 h-24 w-24 border-4 rounded-full flex items-center justify-center m-auto">
                                bakery_dining
                            </span>
                        </div>
                        <div className="text-center mt-5 text-xl font-semibold text-gray-600 group-hover:text-pizza-500 transition-all ease-in-out duration-300">Lorem</div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="bg-pizza-500 h-60 w-60 m-auto rounded-2xl shadow-xl text-white flex items-center justify-center">
                            <span className="material-symbols-outlined border-yellow-600 text-6xl p-3 h-24 w-24 border-4 rounded-full flex items-center justify-center m-auto">
                                bakery_dining
                            </span>
                        </div>
                        <div className="text-center mt-5 text-xl font-semibold text-gray-600 group-hover:text-pizza-500 transition-all ease-in-out duration-300">Lorem</div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="bg-pizza-500 h-60 w-60 m-auto rounded-2xl shadow-xl text-white flex items-center justify-center">
                            <span className="material-symbols-outlined border-yellow-600 text-6xl p-3 h-24 w-24 border-4 rounded-full flex items-center justify-center m-auto">
                                bakery_dining
                            </span>
                        </div>
                        <div className="text-center mt-5 text-xl font-semibold text-gray-600 group-hover:text-pizza-500 transition-all ease-in-out duration-300">Lorem</div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="bg-pizza-500 h-60 w-60 m-auto rounded-2xl shadow-xl text-white flex items-center justify-center">
                            <span className="material-symbols-outlined border-yellow-600 text-6xl p-3 h-24 w-24 border-4 rounded-full flex items-center justify-center m-auto">
                                bakery_dining
                            </span>
                        </div>
                        <div className="text-center mt-5 text-xl font-semibold text-gray-600 group-hover:text-pizza-500 transition-all ease-in-out duration-300">Lorem</div>
                    </div>
                </div>
            </div>
            <SpecialOffers />
            <div className="pb-28 w-12/12 md:w-10/12 m-auto">
                <div className="grid grid-cols-4 space-x-2">
                    <div className="m-auto">
                        <div className="flex flex-col cursor-pointer group text-center">
                            <div className="text-yellow-600 group-hover:text-black transition-all ease-in-out duration-500 mb-10">
                                <span className="material-symbols-outlined border-yellow-600 text-6xl p-3 h-24 w-24 border-4 rounded-full flex items-center justify-center m-auto">
                                    contact_support
                                </span>
                            </div>
                            <div className="font-bold group-hover:text-yellow-600 transition-all ease-in-out duration-500">24 x 7 Free Support</div>
                            <div className="text-slate-500">We are here to assist and help you with our products!</div>
                        </div>
                    </div>
                    <div className="m-auto">
                        <div className="flex flex-col cursor-pointer group text-center">
                            <div className="text-yellow-600 group-hover:text-black transition-all ease-in-out duration-500 mb-10">
                                <span className="material-symbols-outlined border-yellow-600 text-6xl p-3 h-24 w-24 border-4 rounded-full flex items-center justify-center m-auto">
                                    redeem
                                </span>
                            </div>
                            <div className="font-bold group-hover:text-yellow-600 transition-all ease-in-out duration-500">Gift Voucher</div>
                            <div className="text-slate-500">We provide gift vouchers and you are free to redeem it here!</div>
                        </div>
                    </div>
                    <div className="m-auto">
                        <div className="flex flex-col cursor-pointer group text-center">
                            <div className="text-yellow-600 group-hover:text-black transition-all ease-in-out duration-500 mb-10">
                                <span className="material-symbols-outlined border-yellow-600 text-6xl p-3 h-24 w-24 border-4 rounded-full flex items-center justify-center m-auto">
                                shopping_basket
                                </span>
                            </div>
                            <div className="font-bold group-hover:text-yellow-600 transition-all ease-in-out duration-500">Online Shop</div>
                            <div className="text-slate-500">Buy your desired dessert at the comfort of your home!</div>
                        </div>
                    </div>
                    <div className="m-auto">
                        <div className="flex flex-col cursor-pointer group text-center">
                            <div className="text-yellow-600 group-hover:text-black transition-all ease-in-out duration-500 mb-10">
                                <span className="material-symbols-outlined border-yellow-600 text-6xl p-3 h-24 w-24 border-4 rounded-full flex items-center justify-center m-auto">
                                    attach_money
                                </span>
                            </div>
                            <div className="font-bold group-hover:text-yellow-600 transition-all ease-in-out duration-500">Earn</div>
                            <div className="text-slate-500">Be an affiliate and earn money by offering our products!</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

// export async function getServerSideProps() {
//     const res = await fetch(`http://127.0.0.1:8000/dbwebapi/shop/getpagecontents/`);
//     const data = await res.json()
//     return { props: data[0] }
// }