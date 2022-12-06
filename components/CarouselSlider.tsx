import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';

import carouselOne from '../images/carousel-1.jpg';

type sliderContent = {
  bgImg: string,
  content: JSX.Element,
}

export default function CarouselSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout : any;
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  const sliderContents: sliderContent[] = [
    {
      bgImg: carouselOne.src,
      content: <div className="grid grid-cols-2 container m-auto h-full">
          <div></div>
          <div className="h-full flex flex-col justify-center items-center">
            <div className="w-full mb-10">
              <button className="px-4 py-2 border rounded-2xl text-lg uppercase tracking-widest text-slate-100 border-slate-100">Save up to 40% off</button>
            </div>
            <div className="text-8xl font-bold text-slate-100 w-full">
              Pure Bliss
            </div>
          </div>
        </div>,
    },
    {
      bgImg: carouselOne.src,
      content: <div className="grid grid-cols-2 container m-auto">
          <div className="">1</div>
          <div className="">2</div>
        </div>,
    },
    {
      bgImg: carouselOne.src,
      content: <div className="grid grid-cols-2 container m-auto">
          <div className="">1</div>
          <div className="">2</div>
        </div>,
    },
  ]
  return (
      <>
        <div ref={sliderRef} className="keen-slider">
          {
            sliderContents.map((content: sliderContent, id: number) => 
              <div key={id} style={{ height: 'calc(100vh - 200px)', backgroundImage: `linear-gradient(45deg,rgba(144,128,93, 0.5),rgba(105,93,68, 0.5)), url(${content.bgImg})`}} className='keen-slider__slide bg-cover'>
                {content.content}
              </div>
            )
          }
        </div>
        {
          loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(instanceRef.current.track.details.length + 1).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  >
                  </button>
                )
              })}
            </div>
          )
        }
      </>
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