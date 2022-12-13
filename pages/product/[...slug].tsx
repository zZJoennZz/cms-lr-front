import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import Meta from "../../components/Meta"
import ProductSidebar from "../../components/ProductSidebar"

import lemonSoda from '../../images/lemonsoda.jpg'
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'

function ThumbnailPlugin(mainRef : any) {
    return (slider : any) => {
        function removeActive() {
            slider.slides.forEach((slide : any) => {
                slide.classList.remove("active")
            })
        }

        function addActive(idx : number) {
            slider.slides[idx].classList.add("active");
        }

        function addClickEvents() {
            slider.slides.forEach((slide: any, idx: number) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main: any) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

export default function ProductPage(): JSX.Element {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })

    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )
    return (
        <>
            <Meta 
                pageTitle="White Chocolate Custard Cake | Le REUSSI"
                metaDescription="Test metadescription"
                otherMetaData=""
                metaKeywords="products"
                metaRobots=""
            />
            <Menu />
            <div className="w-12/12 md:w-11/12 lg:w-10/12 m-auto py-10">
                
                <div className="grid grid-cols-1 md:grid-cols-12 space-x-0 md:space-x-2">
                    <div className="col-span-3 order-2 md:order-1">
                        <ProductSidebar />
                    </div>
                    <div className="col-span-9 order-1 md:order-2">
                        <div className="bg-gray-100 w-full font-light p-3 border border-gray-100 uppercase mb-3">
                            White Chocolate Custard Cake
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-3">
                            <div>
                                <div ref={sliderRef} className="keen-slider">
                                    <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                    <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                    <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                    <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                    <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                    <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                </div>
                                <div ref={thumbnailRef} className="keen-slider thumbnail">
                                <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                    <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                    <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                    <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                    <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                    <div className="keen-slider__slide h-96 bg-cover" style={{ backgroundImage: `url('${lemonSoda.src}')` }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl border-b pb-3 text-slate-600 mb-3">White Chocolate Custard Cake</div>
                                <div className="flex items-center my-5">
                                    <div className="inline mr-3 text-yellow-500">
                                        <span className="material-symbols-outlined">
                                            star
                                        </span>
                                        <span className="material-symbols-outlined">
                                            star
                                        </span>
                                        <span className="material-symbols-outlined">
                                            star
                                        </span>
                                        <span className="material-symbols-outlined">
                                            star
                                        </span>
                                        <span className="material-symbols-outlined">
                                            star
                                        </span>
                                    </div>
                                    <div className="inline text-gray-500">5 reviews / <span className="material-symbols-outlined text-base">edit</span> <span className="text-sm">Write a review</span></div>
                                </div>
                                <div className="text-2xl my-5">
                                    PHP 20,000.00
                                </div>
                                <div className="my-5 border-t border-b p-2">
                                    <div className="inline mr-5">Quantity:</div> <input type="number" min={0} defaultValue={0} className="w-14 outline-none p-2 border mr-5" /> <button className="py-2 px-4 bg-yellow-600 text-white rounded-3xl hover:bg-yellow-500 transition-all ease-in-out">Add to cart</button>
                                </div>
                            </div>
                            <div className="my-5">
                                <div className="border-b border-t py-5 group">
                                    <div className="flex w-full relative cursor-pointer flex-col">
                                        <div className="inline text-sm uppercase font-bold">Description</div>
                                        <div className="material-symbols-outlined absolute right-0 group-hover:scale-0 transition-all ease-in-out">
                                            add
                                        </div>
                                        <div className="material-symbols-outlined absolute right-0 scale-0 group-hover:scale-100 transition-all ease-in-out">
                                            close
                                        </div>
                                        <div className="scale-y-0 h-0 group-hover:scale-y-100 group-hover:h-auto transition-all ease-in-out group-hover:mt-3 origin-top duration-300">
                                            Samsung Galaxy Tab 10.1, is the world's thinnest tablet, measuring 8.6 mm thickness, running with Android 3.0 Honeycomb OS on a 1GHz dual-core Tegra 2 processor, similar to its younger brother Samsung Galaxy Tab 8.9.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}