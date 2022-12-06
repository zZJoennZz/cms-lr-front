import React, { useState } from 'react';
import Image from 'next/image';
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
                    <div className="flex">
                        <button className="bg-red-500 group-hover:bg-black transition-all ease-in-out duration-500 m-auto py-2 px-5 mb-4 rounded-3xl text-white">Drinks</button>
                    </div>
                    <Image src={drinks} alt="drinks" className="w-11/12 h-10/12 m-auto opacity-80 group-hover:opacity-100 transition-all ease-in-out duration-500" />
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <Image src={drinks} alt="drinks" className="w-11/12 h-10/12  mb-4 mx-auto opacity-80 group-hover:opacity-100 transition-all ease-in-out duration-500" />
                    <div className="flex">
                        <button className="bg-red-500 group-hover:bg-black transition-all ease-in-out duration-500 m-auto py-2 px-5 rounded-3xl text-white">Drinks</button>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className="flex">
                        <button className="bg-red-500 group-hover:bg-black transition-all ease-in-out duration-500 m-auto py-2 px-5 mb-4 rounded-3xl text-white">Drinks</button>
                    </div>
                    <Image src={drinks} alt="drinks" className="w-11/12 h-10/12 m-auto opacity-80 group-hover:opacity-100 transition-all ease-in-out duration-500" />
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <Image src={drinks} alt="drinks" className="w-11/12 h-10/12  mb-4 mx-auto opacity-80 group-hover:opacity-100 transition-all ease-in-out duration-500" />
                    <div className="flex">
                        <button className="bg-red-500 group-hover:bg-black transition-all ease-in-out duration-500 m-auto py-2 px-5 rounded-3xl text-white">Drinks</button>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className="flex">
                        <button className="bg-red-500 group-hover:bg-black transition-all ease-in-out duration-500 m-auto py-2 px-5 mb-4 rounded-3xl text-white">Drinks</button>
                    </div>
                    <Image src={drinks} alt="drinks" className="w-11/12 h-10/12 m-auto opacity-80 group-hover:opacity-100 transition-all ease-in-out duration-500" />
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <Image src={drinks} alt="drinks" className="w-11/12 h-10/12  mb-4 mx-auto opacity-80 group-hover:opacity-100 transition-all ease-in-out duration-500" />
                    <div className="flex">
                        <button className="bg-red-500 group-hover:bg-black transition-all ease-in-out duration-500 m-auto py-2 px-5 rounded-3xl text-white">Drinks</button>
                    </div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className="flex">
                        <button className="bg-red-500 group-hover:bg-black transition-all ease-in-out duration-500 m-auto py-2 px-5 mb-4 rounded-3xl text-white">Drinks</button>
                    </div>
                    <Image src={drinks} alt="drinks" className="w-11/12 h-10/12 m-auto opacity-80 group-hover:opacity-100 transition-all ease-in-out duration-500" />
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <Image src={drinks} alt="drinks" className="w-11/12 h-10/12  mb-4 mx-auto opacity-80 group-hover:opacity-100 transition-all ease-in-out duration-500" />
                    <div className="flex">
                        <button className="bg-red-500 group-hover:bg-black transition-all ease-in-out duration-500 m-auto py-2 px-5 rounded-3xl text-white">Drinks</button>
                    </div>
                </div>
            ,
        },
    ]
    return (
        <div className="py-28">
            <div className="w-full flex flex-col">
                <div className="text-4xl font-bold text-center mb-5">Featured Products</div>
                <div className="m-auto w-20 h-1 bg-pizza-600 mb-10"></div>

                <div ref={sliderRef} className="keen-slider">
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
      // <div className="carousel-container">
      //   <div className="carousel my-carousel carousel--translate">
      //     <input className="carousel__activator" type="radio" name="carousel" id="F" defaultChecked />
      //     <input className="carousel__activator" type="radio" name="carousel" id="G"/>
      //     <input className="carousel__activator" type="radio" name="carousel" id="H"/>
      //     <input className="carousel__activator" type="radio" name="carousel" id="I"/>
      //     <input className="carousel__activator" type="radio" name="carousel" id="J"/>
      //     <div className="carousel__controls">
      //       <label className="carousel__control carousel__control--backward" htmlFor="J"></label>
      //       <label className="carousel__control carousel__control--forward" htmlFor="G"></label>
      //     </div>
      //     <div className="carousel__controls">
      //       <label className="carousel__control carousel__control--backward" htmlFor="F"></label>
      //       <label className="carousel__control carousel__control--forward" htmlFor="H"></label>
      //     </div>
      //     <div className="carousel__controls">
      //       <label className="carousel__control carousel__control--backward" htmlFor="G"></label>
      //       <label className="carousel__control carousel__control--forward" htmlFor="I"></label>
      //     </div>
      //     <div className="carousel__controls">
      //       <label className="carousel__control carousel__control--backward" htmlFor="H"></label>
      //       <label className="carousel__control carousel__control--forward" htmlFor="J"></label>
      //     </div>
      //     <div className="carousel__controls">
      //       <label className="carousel__control carousel__control--backward" htmlFor="I"></label>
      //       <label className="carousel__control carousel__control--forward" htmlFor="F"></label>
      //     </div>
      //     <div className="carousel__track">
      //       <li className="carousel__slide">
      //         <div className="flex h-full">
      //           <div className="w-4/6 m-auto items-center">
      //             <button className='mb-14 border border-slate-200 bg-opacity-95 text-slate-200 px-4 py-2 rounded-lg uppercase' style={{ letterSpacing: '1ch' }}>
      //               Save up to 90% off!
      //             </button>
      //             <div className="text-white text-7xl">
      //               100% Pure Bliss!
      //             </div>
      //           </div>
      //         </div>
      //       </li>
      //       <li className="carousel__slide">
      //         <h1>G</h1>
      //       </li>
      //       <li className="carousel__slide">
      //         <h1>H</h1>
      //       </li>
      //       <li className="carousel__slide">
      //         <h1>I</h1>
      //       </li>
      //       <li className="carousel__slide">
      //         <h1>J</h1>
      //       </li>
      //     </div>
      //     <div className="carousel__indicators">
      //       <label className="carousel__indicator" htmlFor="F"></label>
      //       <label className="carousel__indicator" htmlFor="G"></label>
      //       <label className="carousel__indicator" htmlFor="H"></label>
      //       <label className="carousel__indicator" htmlFor="I"></label>
      //       <label className="carousel__indicator" htmlFor="J"></label>
      //     </div>
      //   </div>
      // </div>
  )
}