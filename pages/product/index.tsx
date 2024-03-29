import Meta from "../../components/Meta"
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import ProductSidebar from "../../components/ProductSidebar"
import Link from "next/link"
import { GetServerSidePropsContext } from "next"
import Image from "next/image"
import axios from 'axios'
import placeholderImg from '../../images/product_image_placeholder.png'

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    let res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}dbwebapi/products/shop/getproductvariants`)

    return {
        props: {
            data: res.data
        }
    }
}

export default function Product(props : any) {
    return (
        <>
            <Meta 
                pageTitle="Products - Le REUSSI"
                metaDescription="Test"
                otherMetaData="Test"
                metaKeywords="Test"
                metaRobots="Test"
            />
            <Menu 
                logout={() => props.logout()} 
                removeFromCart={(prodId: number) => props.removeFromCart(prodId)} 
                adjustCart={(e:any, prodId: number) => props.adjustCart(e, prodId)}
            />
            <div className="w-12/12 md:w-10/12 m-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 space-x-0 md:space-x-2">
                    <div className="col-span-3 order-2 md:order-1">
                        <ProductSidebar />
                    </div>
                    <div className="col-span-9 order-1 md:order-2">
                        <div className="bg-gray-100 w-full font-bold p-3 border border-gray-100 uppercase mb-3">
                            All Products
                        </div>

                        <div className="bg-gray-100 text-xs w-full p-3 border border-gray-100 flex justify-end mb-3">
                            <div className="inline mr-3">
                                Sort by: 
                                <select name="sort" id="sort" className="p-1 ml-1 rounded shadow">
                                    <option value="1">Name (A - Z)</option>
                                    <option value="1">Name (Z - A)</option>
                                    <option value="1">Price (High - Low)</option>
                                    <option value="1">Price (Low - High)</option>
                                </select>
                            </div>
                            <div className="inline">
                                Limit:
                                <select name="sort" id="sort" className="p-1 ml-1 rounded shadow">
                                    <option value="1">5</option>
                                    <option value="1">10</option>
                                    <option value="1">15</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-3">
                            {
                                props.data && props.data.map((product: any, key: number) => {
                                    return (  
                                        <Link key={key}  href={`/product/${product.meta.page_slug}`}>
                                            <div className="cursor-pointer group relative border border-white hover:bg-slate-100 transition-all ease-in-out p-1 rounded-lg hover:border-slate-200">
                                                <div className="p-3 mb-2 bg-slate-100 rounded-lg h-48 w-full flex">
                                                    <Image 
                                                        className="object-cover m-auto w-full h-full rounded-lg group-hover:scale-105 transition-all ease-in-out" 
                                                        src={`${product.media[0].attachment ? product.media[0].attachment : placeholderImg.src}`} 
                                                        width={350}
                                                        height={350}
                                                        alt={product.product_name}
                                                    />
                                                </div>
                                                <div className="w-full text-center text-gray-500 mb-3">
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                    <span className="material-symbols-outlined">star</span>
                                                </div>
                                                <div className="text-center font-bold w-full group-hover:text-pizza-600 transition-all ease-in-out">{product.product_name}</div>
                                                <div className="w-full text-center">{product.discount ? <><span className="font-bold">₱ {product.discount}</span> <s className="text-gray-400">₱ {product.price}</s></> : <>₱ {product.price}</>}</div>
                                            </div>
                                        </Link>  
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}