import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';
import drinks from '../images/drinks.jpg'

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

export default function FeaturedProducts() {
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider(
    {
        loop: true,
        mode: "free-snap",
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 2, spacing: 1 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 5 },
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
                <div className='group rounded-t-3xl rounded-bl-3xl cursor-pointer w-full h-96 bg-red-500 p-2 bg-cover bg-center' style={{ backgroundImage: `url(${drinks.src})` }}>
                    <div className="flex w-full h-full">
                        <div className="text-3xl rounded-t-3xl rounded-bl-3xl font-bold p-4 transition-all duration-500 ease-in-out group-hover:bg-opacity-0 bg-black bg-opacity-20 text-white w-full h-full text-center">The long title</div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className='group rounded-t-3xl rounded-bl-3xl cursor-pointer w-full h-96 bg-red-500 p-2 bg-cover bg-center' style={{ backgroundImage: `url(${drinks.src})` }}>
                    <div className="flex w-full h-full">
                        <div className="text-3xl rounded-t-3xl rounded-bl-3xl font-bold p-4 transition-all duration-500 ease-in-out group-hover:bg-opacity-0 bg-black bg-opacity-20 text-white w-full h-full text-center">The long title</div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className='group rounded-t-3xl rounded-bl-3xl cursor-pointer w-full h-96 bg-red-500 p-2 bg-cover bg-center' style={{ backgroundImage: `url(${drinks.src})` }}>
                    <div className="flex w-full h-full">
                        <div className="text-3xl rounded-t-3xl rounded-bl-3xl font-bold p-4 transition-all duration-500 ease-in-out group-hover:bg-opacity-0 bg-black bg-opacity-20 text-white w-full h-full text-center">The long title</div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className='group rounded-t-3xl rounded-bl-3xl cursor-pointer w-full h-96 bg-red-500 p-2 bg-cover bg-center' style={{ backgroundImage: `url(${drinks.src})` }}>
                    <div className="flex w-full h-full">
                        <div className="text-3xl rounded-t-3xl rounded-bl-3xl font-bold p-4 transition-all duration-500 ease-in-out group-hover:bg-opacity-0 bg-black bg-opacity-20 text-white w-full h-full text-center">The long title</div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className='group rounded-t-3xl rounded-bl-3xl cursor-pointer w-full h-96 bg-red-500 p-2 bg-cover bg-center' style={{ backgroundImage: `url(${drinks.src})` }}>
                    <div className="flex w-full h-full">
                        <div className="text-3xl rounded-t-3xl rounded-bl-3xl font-bold p-4 transition-all duration-500 ease-in-out group-hover:bg-opacity-0 bg-black bg-opacity-20 text-white w-full h-full text-center">The long title</div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className='group rounded-t-3xl rounded-bl-3xl cursor-pointer w-full h-96 bg-red-500 p-2 bg-cover bg-center' style={{ backgroundImage: `url(${drinks.src})` }}>
                    <div className="flex w-full h-full">
                        <div className="text-3xl rounded-t-3xl rounded-bl-3xl font-bold p-4 transition-all duration-500 ease-in-out group-hover:bg-opacity-0 bg-black bg-opacity-20 text-white w-full h-full text-center">The long title</div>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className='group rounded-t-3xl rounded-bl-3xl cursor-pointer w-full h-96 bg-red-500 p-2 bg-cover bg-center' style={{ backgroundImage: `url(${drinks.src})` }}>
                    <div className="flex w-full h-full">
                        <div className="text-3xl rounded-t-3xl rounded-bl-3xl font-bold p-4 transition-all duration-500 ease-in-out group-hover:bg-opacity-0 bg-black bg-opacity-20 text-white w-full h-full text-center">The long title</div>
                    </div>
                </div>
            ,
        },
    ]
    return (
        <div className="py-28">
            <div className="w-full flex flex-col">
                <div className="text-2xl md:text-4xl font-bold text-center mb-5">Featured Products</div>
                <div className="m-auto w-20 h-1 bg-pizza-600 mb-10"></div>

                <div ref={sliderRef} className="keen-slider w-full">
                {
                    sliderContents.map((content: sliderContent, id: number) => 
                    <div key={id} className='keen-slider__slide p-2'>
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