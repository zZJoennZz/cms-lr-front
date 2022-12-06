import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/SpecialOffers.module.css';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';
import cacaolatte from '../images/cacaolatte.jpg'

type sliderContent = {
    content: JSX.Element,
}

function Arrow(props : any) {
    const disabled = props.disabled ? " arrow--disabled" : ""

    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${
                props.left ? "arrow--left" : "arrow--right"
            } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

export default function SpecialOffers() {
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider(
    {
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 5,
            spacing: 15,
        },
        created() {
            setLoaded(true)
        },
        },
        []
    )

    const sliderContents: sliderContent[] = [
        {
            content: 
                <div className="group cursor-pointer">
                    <div className={styles.cardInner}>
                        <Image src={cacaolatte} alt="cacaolatte" className={styles.cardImg} />
                        <div className="grid grid-cols-4 text-center bg-white border border-slate-300 p-2 rounded-xl group-hover:scale-0 transition-all ease-in-out">
                            <div>
                                <div>12</div>
                                <div className="text-sm text-slate-600">Days</div>
                            </div>
                            <div>
                                <div>06</div>
                                <div className="text-sm text-slate-600">Hours</div>
                            </div>
                            <div>
                                <div>31</div>
                                <div className="text-sm text-slate-600">Min</div>
                            </div>
                            <div>
                                <div>21</div>
                                <div className="text-sm text-slate-600">Sec</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 -mt-12 scale-0 text-center p-2 group-hover:scale-100 transition-all ease-in-out">
                            <div>
                                <span className="material-symbols-outlined fill-pizza-600">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="font-semibold text-slate-600 text-center mb-1">Test Product</div>
                    <div className="text-center group-hover:scale-0 transition-all ease-in-out">$38.00 <s>$50.00</s></div>
                    <div className="flex flex-row justify-center transition-all ease-in-out scale-0 group-hover:scale-100 -mt-4">
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                visibility
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                favorite
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                bar_chart
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                shopping_cart
                            </span>
                        </div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className={styles.cardInner}>
                        <Image src={cacaolatte} alt="cacaolatte" className={styles.cardImg} />
                        <div className="grid grid-cols-4 text-center bg-white border border-slate-300 p-2 rounded-xl group-hover:scale-0 transition-all ease-in-out">
                            <div>
                                <div>12</div>
                                <div className="text-sm text-slate-600">Days</div>
                            </div>
                            <div>
                                <div>06</div>
                                <div className="text-sm text-slate-600">Hours</div>
                            </div>
                            <div>
                                <div>31</div>
                                <div className="text-sm text-slate-600">Min</div>
                            </div>
                            <div>
                                <div>21</div>
                                <div className="text-sm text-slate-600">Sec</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 -mt-12 scale-0 text-center p-2 group-hover:scale-100 transition-all ease-in-out">
                            <div>
                                <span className="material-symbols-outlined fill-pizza-600">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="font-semibold text-slate-600 text-center mb-1">Test Product</div>
                    <div className="text-center group-hover:scale-0 transition-all ease-in-out">$38.00 <s>$50.00</s></div>
                    <div className="flex flex-row justify-center transition-all ease-in-out scale-0 group-hover:scale-100 -mt-4">
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                visibility
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                favorite
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                bar_chart
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                shopping_cart
                            </span>
                        </div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className={styles.cardInner}>
                        <Image src={cacaolatte} alt="cacaolatte" className={styles.cardImg} />
                        <div className="grid grid-cols-4 text-center bg-white border border-slate-300 p-2 rounded-xl group-hover:scale-0 transition-all ease-in-out">
                            <div>
                                <div>12</div>
                                <div className="text-sm text-slate-600">Days</div>
                            </div>
                            <div>
                                <div>06</div>
                                <div className="text-sm text-slate-600">Hours</div>
                            </div>
                            <div>
                                <div>31</div>
                                <div className="text-sm text-slate-600">Min</div>
                            </div>
                            <div>
                                <div>21</div>
                                <div className="text-sm text-slate-600">Sec</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 -mt-12 scale-0 text-center p-2 group-hover:scale-100 transition-all ease-in-out">
                            <div>
                                <span className="material-symbols-outlined fill-pizza-600">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="font-semibold text-slate-600 text-center mb-1">Test Product</div>
                    <div className="text-center group-hover:scale-0 transition-all ease-in-out">$38.00 <s>$50.00</s></div>
                    <div className="flex flex-row justify-center transition-all ease-in-out scale-0 group-hover:scale-100 -mt-4">
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                visibility
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                favorite
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                bar_chart
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                shopping_cart
                            </span>
                        </div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className={styles.cardInner}>
                        <Image src={cacaolatte} alt="cacaolatte" className={styles.cardImg} />
                        <div className="grid grid-cols-4 text-center bg-white border border-slate-300 p-2 rounded-xl group-hover:scale-0 transition-all ease-in-out">
                            <div>
                                <div>12</div>
                                <div className="text-sm text-slate-600">Days</div>
                            </div>
                            <div>
                                <div>06</div>
                                <div className="text-sm text-slate-600">Hours</div>
                            </div>
                            <div>
                                <div>31</div>
                                <div className="text-sm text-slate-600">Min</div>
                            </div>
                            <div>
                                <div>21</div>
                                <div className="text-sm text-slate-600">Sec</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 -mt-12 scale-0 text-center p-2 group-hover:scale-100 transition-all ease-in-out">
                            <div>
                                <span className="material-symbols-outlined fill-pizza-600">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="font-semibold text-slate-600 text-center mb-1">Test Product</div>
                    <div className="text-center group-hover:scale-0 transition-all ease-in-out">$38.00 <s>$50.00</s></div>
                    <div className="flex flex-row justify-center transition-all ease-in-out scale-0 group-hover:scale-100 -mt-4">
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                visibility
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                favorite
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                bar_chart
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                shopping_cart
                            </span>
                        </div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className={styles.cardInner}>
                        <Image src={cacaolatte} alt="cacaolatte" className={styles.cardImg} />
                        <div className="grid grid-cols-4 text-center bg-white border border-slate-300 p-2 rounded-xl group-hover:scale-0 transition-all ease-in-out">
                            <div>
                                <div>12</div>
                                <div className="text-sm text-slate-600">Days</div>
                            </div>
                            <div>
                                <div>06</div>
                                <div className="text-sm text-slate-600">Hours</div>
                            </div>
                            <div>
                                <div>31</div>
                                <div className="text-sm text-slate-600">Min</div>
                            </div>
                            <div>
                                <div>21</div>
                                <div className="text-sm text-slate-600">Sec</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 -mt-12 scale-0 text-center p-2 group-hover:scale-100 transition-all ease-in-out">
                            <div>
                                <span className="material-symbols-outlined fill-pizza-600">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="font-semibold text-slate-600 text-center mb-1">Test Product</div>
                    <div className="text-center group-hover:scale-0 transition-all ease-in-out">$38.00 <s>$50.00</s></div>
                    <div className="flex flex-row justify-center transition-all ease-in-out scale-0 group-hover:scale-100 -mt-4">
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                visibility
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                favorite
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                bar_chart
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                shopping_cart
                            </span>
                        </div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className={styles.cardInner}>
                        <Image src={cacaolatte} alt="cacaolatte" className={styles.cardImg} />
                        <div className="grid grid-cols-4 text-center bg-white border border-slate-300 p-2 rounded-xl group-hover:scale-0 transition-all ease-in-out">
                            <div>
                                <div>12</div>
                                <div className="text-sm text-slate-600">Days</div>
                            </div>
                            <div>
                                <div>06</div>
                                <div className="text-sm text-slate-600">Hours</div>
                            </div>
                            <div>
                                <div>31</div>
                                <div className="text-sm text-slate-600">Min</div>
                            </div>
                            <div>
                                <div>21</div>
                                <div className="text-sm text-slate-600">Sec</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 -mt-12 scale-0 text-center p-2 group-hover:scale-100 transition-all ease-in-out">
                            <div>
                                <span className="material-symbols-outlined fill-pizza-600">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="font-semibold text-slate-600 text-center mb-1">Test Product</div>
                    <div className="text-center group-hover:scale-0 transition-all ease-in-out">$38.00 <s>$50.00</s></div>
                    <div className="flex flex-row justify-center transition-all ease-in-out scale-0 group-hover:scale-100 -mt-4">
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                visibility
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                favorite
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                bar_chart
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                shopping_cart
                            </span>
                        </div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className={styles.cardInner}>
                        <Image src={cacaolatte} alt="cacaolatte" className={styles.cardImg} />
                        <div className="grid grid-cols-4 text-center bg-white border border-slate-300 p-2 rounded-xl group-hover:scale-0 transition-all ease-in-out">
                            <div>
                                <div>12</div>
                                <div className="text-sm text-slate-600">Days</div>
                            </div>
                            <div>
                                <div>06</div>
                                <div className="text-sm text-slate-600">Hours</div>
                            </div>
                            <div>
                                <div>31</div>
                                <div className="text-sm text-slate-600">Min</div>
                            </div>
                            <div>
                                <div>21</div>
                                <div className="text-sm text-slate-600">Sec</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 -mt-12 scale-0 text-center p-2 group-hover:scale-100 transition-all ease-in-out">
                            <div>
                                <span className="material-symbols-outlined fill-pizza-600">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="font-semibold text-slate-600 text-center mb-1">Test Product</div>
                    <div className="text-center group-hover:scale-0 transition-all ease-in-out">$38.00 <s>$50.00</s></div>
                    <div className="flex flex-row justify-center transition-all ease-in-out scale-0 group-hover:scale-100 -mt-4">
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                visibility
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                favorite
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                bar_chart
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                shopping_cart
                            </span>
                        </div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className={styles.cardInner}>
                        <Image src={cacaolatte} alt="cacaolatte" className={styles.cardImg} />
                        <div className="grid grid-cols-4 text-center bg-white border border-slate-300 p-2 rounded-xl group-hover:scale-0 transition-all ease-in-out">
                            <div>
                                <div>12</div>
                                <div className="text-sm text-slate-600">Days</div>
                            </div>
                            <div>
                                <div>06</div>
                                <div className="text-sm text-slate-600">Hours</div>
                            </div>
                            <div>
                                <div>31</div>
                                <div className="text-sm text-slate-600">Min</div>
                            </div>
                            <div>
                                <div>21</div>
                                <div className="text-sm text-slate-600">Sec</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 -mt-12 scale-0 text-center p-2 group-hover:scale-100 transition-all ease-in-out">
                            <div>
                                <span className="material-symbols-outlined fill-pizza-600">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    star
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="font-semibold text-slate-600 text-center mb-1">Test Product</div>
                    <div className="text-center group-hover:scale-0 transition-all ease-in-out">$38.00 <s>$50.00</s></div>
                    <div className="flex flex-row justify-center transition-all ease-in-out scale-0 group-hover:scale-100 -mt-4">
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                visibility
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                favorite
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                bar_chart
                            </span>
                        </div>
                        <div className={styles.specialOfferIcons}>
                            <span className="material-symbols-outlined text-base">
                                shopping_cart
                            </span>
                        </div>
                    </div>
                </div>
            ,
        },
    ]
    return (
        <div className="w-12/12 md:w-10/12 m-auto">
            <div className="w-full flex flex-col">
                <div className="text-4xl font-bold text-center mb-5">Special Offers</div>
                <div className="m-auto w-20 h-1 bg-pizza-600 mb-10"></div>

                <div ref={sliderRef} className="keen-slider m-auto">
                {
                    sliderContents.map((content: sliderContent, id: number) => 
                    <div key={id} style={{ height: '55vh'}} className='keen-slider__slide bg-cover'>
                        {content.content}
                    </div>
                    )
                }
                </div>
                {
                loaded && instanceRef.current && (
                    <>
                    <Arrow 
                        left
                        onClick={(e: any) => 
                        e.stopPropagation() || instanceRef.current?.prev()
                        }
                    />

                    <Arrow
                        onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                        }
                    />
                    </>
                )
                }
            </div>
        </div>
    )
}