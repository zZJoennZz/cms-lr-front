import Meta from '../components/Meta'
import Menu from '../components/Menu'
import CarouselSlider from '../components/CarouselSlider'
import FeaturedProducts from '../components/FeaturedProducts'
import SpecialOffers from '../components/SpecialOffers'
import BrowseByCategory from '../components/BrowseByCategory'
import Footer from '../components/Footer'

export default function Home(props : any) {

    return (
        <>
            <Meta 
                pageTitle={props.data[0].pageTitle}
                metaDescription={props.data[0].metaDescription}
                otherMetaData={props.data[0].otherMetaData}
                metaKeywords={props.data[0].metaKeywords}
                metaRobots={props.data[0].metaRobots}
            />

            <Menu 
                logout={() => props.logout()} 
                removeFromCart={(prodId: number) => props.removeFromCart(prodId)} 
                adjustCart={(e:any, prodId: number) => props.adjustCart(e, prodId)}
            />

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
                            <button className="w-full uppercase bg-pizza-500 hover:bg-black transition-all ease-in-out text-white text-sm p-3 rounded-tr-3xl rounded-br-3xl border-white border">
                                <span className="hidden md:block">Search</span>
                                <span className="material-symbols-outlined block md:hidden">
                                    search
                                </span>
                            </button>
                        </div>
                    </div>
                </div> 
            </div>
            
            <FeaturedProducts />
            
            <BrowseByCategory />

            <SpecialOffers />

            <div className="pb-28 w-12/12 md:w-10/12 m-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 space-x-2 space-y-3 md:space-y-0">
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

export async function getServerSideProps() {
    let data : any;
    try  {
        data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}api/get_page_content`).then(res => res.json())
    } catch (e) {
        data = [
            {
                internalName: 'Home',
                pageTitle: 'Le REUSSI',
                pageContent: '',
                isHome: 'True',
                metaDescription: '',
                metaRobots: '',
                metaKeywords: '',
                otherMetaData: '',
                isPublished: 'True',
                isDeleted: 'False'
            }
        ]
    }
    return { props: { data }  }
}