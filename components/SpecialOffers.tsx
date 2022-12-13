import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/SpecialOffers.module.css'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import cacaolatte from '../images/cacaolatte.jpg'

import ProductBox from './ProductBox'

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
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 2, spacing: 2 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 4, spacing: 5 },
            },
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
                <ProductBox 
                    productName="Cacao Latte"
                    id={1}
                    slug={`product/` + "test"}
                    image={cacaolatte}
                    price={1000.00}
                    salePrice={999.99}
                    countdown="10:10:10:10"
                    rating={(4 + 5 + 2 + 5 + 4 + 5) / 6}
                />
            ,
        },
        {
            content: 
                <ProductBox 
                    productName="Cacao Latte"
                    id={1}
                    slug={`product/` + "test"}
                    image={cacaolatte}
                    price={1000.00}
                    salePrice={999.99}
                    countdown="10:10:10:10"
                    rating={(4 + 5 + 2 + 5 + 4 + 5) / 6}
                />
            ,
        },
        {
            content: 
                <ProductBox 
                    productName="Cacao Latte"
                    id={1}
                    slug={`product/` + "test"}
                    image={cacaolatte}
                    price={1000.00}
                    salePrice={999.99}
                    countdown="10:10:10:10"
                    rating={(4 + 5 + 2 + 5 + 4 + 5) / 6}
                />
            ,
        },
        {
            content: 
                <ProductBox 
                    productName="Cacao Latte"
                    id={1}
                    slug={`product/` + "test"}
                    image={cacaolatte}
                    price={1000.00}
                    salePrice={999.99}
                    countdown="10:10:10:10"
                    rating={(4 + 5 + 2 + 5 + 4 + 5) / 6}
                />
            ,
        },
        {
            content: 
                <ProductBox 
                    productName="Cacao Latte"
                    id={1}
                    slug={`product/` + "test"}
                    image={cacaolatte}
                    price={1000.00}
                    salePrice={999.99}
                    countdown="10:10:10:10"
                    rating={(4 + 5 + 2 + 5 + 4 + 5) / 6}
                />
            ,
        },
    ]
    return (
        <div className="w-12/12 md:w-10/12 m-auto pt-28 px-1 md:px-0">
            <div className="w-full flex flex-col">
                <div className="text-2xl md:text-4xl font-bold text-center mb-5">Special Offers</div>
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