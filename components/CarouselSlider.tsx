import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';

import carouselOne from '../images/carousel-1.jpg';

type sliderContent = {
  id: number,
  header: string,
  subHeader: string,
  promoText: string,
  backgroundImage: string,
  buttonText: string,
  buttonLink: string
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
      id: 1,
      backgroundImage: carouselOne.src,
      header: 'Poggers',
      subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      promoText: 'SAVE UP TO 50%!',
      buttonText: 'Check it out!',
      buttonLink: 'https://google.com/'
    },{
      id: 2,
      backgroundImage: carouselOne.src,
      header: 'Poggers',
      subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      promoText: 'SAVE UP TO 50%!',
      buttonText: 'Check it out!',
      buttonLink: 'https://google.com/'
    },{
      id: 3,
      backgroundImage: carouselOne.src,
      header: 'Poggers',
      subHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      promoText: 'SAVE UP TO 50%!',
      buttonText: 'Check it out!',
      buttonLink: 'https://google.com/'
    },
  ]
  return (
      <>
        <div ref={sliderRef} className="keen-slider">
          {
            sliderContents.map((content: sliderContent) => 
              <div key={content.id} style={{ height: 'calc(100vh - 200px)', backgroundImage: `linear-gradient(45deg,rgba(144,128,93, 0.5),rgba(105,93,68, 0.5)), url(${content.backgroundImage})`}} className='keen-slider__slide bg-cover'>
                <div className="grid grid-cols-1 md:grid-cols-2 container m-auto h-full">
                  <div className="hidden md:flex"></div>
                  <div className="h-full ml-5 md:ml-0 flex flex-col justify-center items-center">
                    <div className="w-full mb-5 md:mb-10">
                      <button className="px-4 py-2 border rounded-2xl text-base md:text-lg uppercase tracking-widest text-slate-100 border-slate-100">{content.promoText}</button>
                    </div>
                    <div className="text-7xl md:text-8xl font-bold text-slate-100 w-full mb-5">
                      {content.header}
                    </div>
                    <div className="text-white text-base md:text-lg mb-10">
                      {content.subHeader}
                    </div>
                    <div className="w-full">
                      <a href={content.buttonLink} className="px-3 py-2 bg-ebb text-slate-500 font-bold rounded-lg hover:bg-white transition-all ease-in-out">{content.buttonText}</a>
                    </div>
                  </div>
                </div>
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
  )
}