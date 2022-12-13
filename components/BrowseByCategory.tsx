import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';

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

export default function BrowseByCategory() {
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
                <div className="group cursor-pointer">
                    <div className="bg-pizza-500 py-10 m-auto rounded-2xl shadow-xl text-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 105.43 122.88"
                            className="w-24 h-24 fill-pizza-100 group-hover:fill-white transition-all ease-in-out"
                        >
                            <path d="M5.35 41.82h66.12a5.38 5.38 0 015.35 5.34v5.35c12.71-.23 21.25 5.72 25.53 13.74a26.44 26.44 0 013.08 12.07 27 27 0 01-2.7 12.18c-4.11 8.43-12.75 15-25.91 15.17v3.46a13.7 13.7 0 01-4 9.69 13.72 13.72 0 01-9.69 4H13.75A13.79 13.79 0 010 109.13v-62a5.34 5.34 0 015.35-5.34zM52.81 67c2.7 2.7 2.67 15.16-4.41 22.24s-15.35 9.42-20.92 5.5c8.82-5.25 11.45-9.61 13.36-14.18S44.29 71 52.53 66.71c.09.08-2.42-2.44.28.26zM25.88 93.3l-.41-.39c-5.32-5.32-3.66-15.59 3.7-22.94 6.93-6.93 16.44-8.8 22-4.55-8.88 4.45-11.26 8.2-13.17 12.86-1.82 4.37-3.8 10-12.09 15zM57.33 10A3.58 3.58 0 0158 4.75a4.14 4.14 0 015.56.68c3.38 4.12 2.05 8.31.51 13.12-1.29 4.08-2.81 8.83.23 13.33A3.61 3.61 0 0163.11 37a4.12 4.12 0 01-5.48-1.15c-5-7.38-2.9-13.88-1.13-19.46.92-2.87 1.71-5.36.83-6.44zM35.62 6a3.57 3.57 0 01.71-5.22 4.13 4.13 0 015.56.67c3.38 4.12 2 8.31.52 13.12-1.3 4.08-2.81 8.83.22 13.33a3.59 3.59 0 01-1.23 5.15 4.12 4.12 0 01-5.48-1.15C31 24.53 33 18 34.8 12.44c.91-2.86 1.7-5.36.82-6.44zm-21.71 4a3.59 3.59 0 01.72-5.23 4.14 4.14 0 015.56.68c3.37 4.12 2 8.31.51 13.12-1.3 4.08-2.81 8.83.22 13.33A3.6 3.6 0 0119.7 37a4.12 4.12 0 01-5.48-1.15c-5-7.38-2.91-13.88-1.13-19.46.91-2.87 1.71-5.36.82-6.44zm62.91 52v34.2c8.74-.2 14.38-4.36 17-9.71a17.9 17.9 0 001.78-8.06 17.25 17.25 0 00-2-7.88c-2.68-5-8.25-8.74-16.76-8.56zm-7.95-12.23H8v59.36a5.84 5.84 0 005.8 5.8h49.27a5.78 5.78 0 004.09-1.7 5.76 5.76 0 001.7-4.09V49.77z"></path>
                        </svg>
                    </div>
                    <div className="text-center mt-5 text-xl font-semibold text-gray-600 group-hover:text-pizza-500 transition-all ease-in-out duration-300">Beverages</div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className="bg-pizza-500 py-10 m-auto rounded-2xl shadow-xl text-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 105.43 122.88"
                            className="w-24 h-24 fill-pizza-100 group-hover:fill-white transition-all ease-in-out"
                        >
                            <path d="M5.35 41.82h66.12a5.38 5.38 0 015.35 5.34v5.35c12.71-.23 21.25 5.72 25.53 13.74a26.44 26.44 0 013.08 12.07 27 27 0 01-2.7 12.18c-4.11 8.43-12.75 15-25.91 15.17v3.46a13.7 13.7 0 01-4 9.69 13.72 13.72 0 01-9.69 4H13.75A13.79 13.79 0 010 109.13v-62a5.34 5.34 0 015.35-5.34zM52.81 67c2.7 2.7 2.67 15.16-4.41 22.24s-15.35 9.42-20.92 5.5c8.82-5.25 11.45-9.61 13.36-14.18S44.29 71 52.53 66.71c.09.08-2.42-2.44.28.26zM25.88 93.3l-.41-.39c-5.32-5.32-3.66-15.59 3.7-22.94 6.93-6.93 16.44-8.8 22-4.55-8.88 4.45-11.26 8.2-13.17 12.86-1.82 4.37-3.8 10-12.09 15zM57.33 10A3.58 3.58 0 0158 4.75a4.14 4.14 0 015.56.68c3.38 4.12 2.05 8.31.51 13.12-1.29 4.08-2.81 8.83.23 13.33A3.61 3.61 0 0163.11 37a4.12 4.12 0 01-5.48-1.15c-5-7.38-2.9-13.88-1.13-19.46.92-2.87 1.71-5.36.83-6.44zM35.62 6a3.57 3.57 0 01.71-5.22 4.13 4.13 0 015.56.67c3.38 4.12 2 8.31.52 13.12-1.3 4.08-2.81 8.83.22 13.33a3.59 3.59 0 01-1.23 5.15 4.12 4.12 0 01-5.48-1.15C31 24.53 33 18 34.8 12.44c.91-2.86 1.7-5.36.82-6.44zm-21.71 4a3.59 3.59 0 01.72-5.23 4.14 4.14 0 015.56.68c3.37 4.12 2 8.31.51 13.12-1.3 4.08-2.81 8.83.22 13.33A3.6 3.6 0 0119.7 37a4.12 4.12 0 01-5.48-1.15c-5-7.38-2.91-13.88-1.13-19.46.91-2.87 1.71-5.36.82-6.44zm62.91 52v34.2c8.74-.2 14.38-4.36 17-9.71a17.9 17.9 0 001.78-8.06 17.25 17.25 0 00-2-7.88c-2.68-5-8.25-8.74-16.76-8.56zm-7.95-12.23H8v59.36a5.84 5.84 0 005.8 5.8h49.27a5.78 5.78 0 004.09-1.7 5.76 5.76 0 001.7-4.09V49.77z"></path>
                        </svg>
                    </div>
                    <div className="text-center mt-5 text-xl font-semibold text-gray-600 group-hover:text-pizza-500 transition-all ease-in-out duration-300">Beverages</div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className="bg-pizza-500 py-10 m-auto rounded-2xl shadow-xl text-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 105.43 122.88"
                            className="w-24 h-24 fill-pizza-100 group-hover:fill-white transition-all ease-in-out"
                        >
                            <path d="M5.35 41.82h66.12a5.38 5.38 0 015.35 5.34v5.35c12.71-.23 21.25 5.72 25.53 13.74a26.44 26.44 0 013.08 12.07 27 27 0 01-2.7 12.18c-4.11 8.43-12.75 15-25.91 15.17v3.46a13.7 13.7 0 01-4 9.69 13.72 13.72 0 01-9.69 4H13.75A13.79 13.79 0 010 109.13v-62a5.34 5.34 0 015.35-5.34zM52.81 67c2.7 2.7 2.67 15.16-4.41 22.24s-15.35 9.42-20.92 5.5c8.82-5.25 11.45-9.61 13.36-14.18S44.29 71 52.53 66.71c.09.08-2.42-2.44.28.26zM25.88 93.3l-.41-.39c-5.32-5.32-3.66-15.59 3.7-22.94 6.93-6.93 16.44-8.8 22-4.55-8.88 4.45-11.26 8.2-13.17 12.86-1.82 4.37-3.8 10-12.09 15zM57.33 10A3.58 3.58 0 0158 4.75a4.14 4.14 0 015.56.68c3.38 4.12 2.05 8.31.51 13.12-1.29 4.08-2.81 8.83.23 13.33A3.61 3.61 0 0163.11 37a4.12 4.12 0 01-5.48-1.15c-5-7.38-2.9-13.88-1.13-19.46.92-2.87 1.71-5.36.83-6.44zM35.62 6a3.57 3.57 0 01.71-5.22 4.13 4.13 0 015.56.67c3.38 4.12 2 8.31.52 13.12-1.3 4.08-2.81 8.83.22 13.33a3.59 3.59 0 01-1.23 5.15 4.12 4.12 0 01-5.48-1.15C31 24.53 33 18 34.8 12.44c.91-2.86 1.7-5.36.82-6.44zm-21.71 4a3.59 3.59 0 01.72-5.23 4.14 4.14 0 015.56.68c3.37 4.12 2 8.31.51 13.12-1.3 4.08-2.81 8.83.22 13.33A3.6 3.6 0 0119.7 37a4.12 4.12 0 01-5.48-1.15c-5-7.38-2.91-13.88-1.13-19.46.91-2.87 1.71-5.36.82-6.44zm62.91 52v34.2c8.74-.2 14.38-4.36 17-9.71a17.9 17.9 0 001.78-8.06 17.25 17.25 0 00-2-7.88c-2.68-5-8.25-8.74-16.76-8.56zm-7.95-12.23H8v59.36a5.84 5.84 0 005.8 5.8h49.27a5.78 5.78 0 004.09-1.7 5.76 5.76 0 001.7-4.09V49.77z"></path>
                        </svg>
                    </div>
                    <div className="text-center mt-5 text-xl font-semibold text-gray-600 group-hover:text-pizza-500 transition-all ease-in-out duration-300">Beverages</div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className="bg-pizza-500 py-10 m-auto rounded-2xl shadow-xl text-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 105.43 122.88"
                            className="w-24 h-24 fill-pizza-100 group-hover:fill-white transition-all ease-in-out"
                        >
                            <path d="M5.35 41.82h66.12a5.38 5.38 0 015.35 5.34v5.35c12.71-.23 21.25 5.72 25.53 13.74a26.44 26.44 0 013.08 12.07 27 27 0 01-2.7 12.18c-4.11 8.43-12.75 15-25.91 15.17v3.46a13.7 13.7 0 01-4 9.69 13.72 13.72 0 01-9.69 4H13.75A13.79 13.79 0 010 109.13v-62a5.34 5.34 0 015.35-5.34zM52.81 67c2.7 2.7 2.67 15.16-4.41 22.24s-15.35 9.42-20.92 5.5c8.82-5.25 11.45-9.61 13.36-14.18S44.29 71 52.53 66.71c.09.08-2.42-2.44.28.26zM25.88 93.3l-.41-.39c-5.32-5.32-3.66-15.59 3.7-22.94 6.93-6.93 16.44-8.8 22-4.55-8.88 4.45-11.26 8.2-13.17 12.86-1.82 4.37-3.8 10-12.09 15zM57.33 10A3.58 3.58 0 0158 4.75a4.14 4.14 0 015.56.68c3.38 4.12 2.05 8.31.51 13.12-1.29 4.08-2.81 8.83.23 13.33A3.61 3.61 0 0163.11 37a4.12 4.12 0 01-5.48-1.15c-5-7.38-2.9-13.88-1.13-19.46.92-2.87 1.71-5.36.83-6.44zM35.62 6a3.57 3.57 0 01.71-5.22 4.13 4.13 0 015.56.67c3.38 4.12 2 8.31.52 13.12-1.3 4.08-2.81 8.83.22 13.33a3.59 3.59 0 01-1.23 5.15 4.12 4.12 0 01-5.48-1.15C31 24.53 33 18 34.8 12.44c.91-2.86 1.7-5.36.82-6.44zm-21.71 4a3.59 3.59 0 01.72-5.23 4.14 4.14 0 015.56.68c3.37 4.12 2 8.31.51 13.12-1.3 4.08-2.81 8.83.22 13.33A3.6 3.6 0 0119.7 37a4.12 4.12 0 01-5.48-1.15c-5-7.38-2.91-13.88-1.13-19.46.91-2.87 1.71-5.36.82-6.44zm62.91 52v34.2c8.74-.2 14.38-4.36 17-9.71a17.9 17.9 0 001.78-8.06 17.25 17.25 0 00-2-7.88c-2.68-5-8.25-8.74-16.76-8.56zm-7.95-12.23H8v59.36a5.84 5.84 0 005.8 5.8h49.27a5.78 5.78 0 004.09-1.7 5.76 5.76 0 001.7-4.09V49.77z"></path>
                        </svg>
                    </div>
                    <div className="text-center mt-5 text-xl font-semibold text-gray-600 group-hover:text-pizza-500 transition-all ease-in-out duration-300">Beverages</div>
                </div>
            ,
        },
        {
            content: 
                <div className="group cursor-pointer">
                    <div className="bg-pizza-500 py-10 m-auto rounded-2xl shadow-xl text-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                            viewBox="0 0 105.43 122.88"
                            className="w-24 h-24 fill-pizza-100 group-hover:fill-white transition-all ease-in-out"
                        >
                            <path d="M5.35 41.82h66.12a5.38 5.38 0 015.35 5.34v5.35c12.71-.23 21.25 5.72 25.53 13.74a26.44 26.44 0 013.08 12.07 27 27 0 01-2.7 12.18c-4.11 8.43-12.75 15-25.91 15.17v3.46a13.7 13.7 0 01-4 9.69 13.72 13.72 0 01-9.69 4H13.75A13.79 13.79 0 010 109.13v-62a5.34 5.34 0 015.35-5.34zM52.81 67c2.7 2.7 2.67 15.16-4.41 22.24s-15.35 9.42-20.92 5.5c8.82-5.25 11.45-9.61 13.36-14.18S44.29 71 52.53 66.71c.09.08-2.42-2.44.28.26zM25.88 93.3l-.41-.39c-5.32-5.32-3.66-15.59 3.7-22.94 6.93-6.93 16.44-8.8 22-4.55-8.88 4.45-11.26 8.2-13.17 12.86-1.82 4.37-3.8 10-12.09 15zM57.33 10A3.58 3.58 0 0158 4.75a4.14 4.14 0 015.56.68c3.38 4.12 2.05 8.31.51 13.12-1.29 4.08-2.81 8.83.23 13.33A3.61 3.61 0 0163.11 37a4.12 4.12 0 01-5.48-1.15c-5-7.38-2.9-13.88-1.13-19.46.92-2.87 1.71-5.36.83-6.44zM35.62 6a3.57 3.57 0 01.71-5.22 4.13 4.13 0 015.56.67c3.38 4.12 2 8.31.52 13.12-1.3 4.08-2.81 8.83.22 13.33a3.59 3.59 0 01-1.23 5.15 4.12 4.12 0 01-5.48-1.15C31 24.53 33 18 34.8 12.44c.91-2.86 1.7-5.36.82-6.44zm-21.71 4a3.59 3.59 0 01.72-5.23 4.14 4.14 0 015.56.68c3.37 4.12 2 8.31.51 13.12-1.3 4.08-2.81 8.83.22 13.33A3.6 3.6 0 0119.7 37a4.12 4.12 0 01-5.48-1.15c-5-7.38-2.91-13.88-1.13-19.46.91-2.87 1.71-5.36.82-6.44zm62.91 52v34.2c8.74-.2 14.38-4.36 17-9.71a17.9 17.9 0 001.78-8.06 17.25 17.25 0 00-2-7.88c-2.68-5-8.25-8.74-16.76-8.56zm-7.95-12.23H8v59.36a5.84 5.84 0 005.8 5.8h49.27a5.78 5.78 0 004.09-1.7 5.76 5.76 0 001.7-4.09V49.77z"></path>
                        </svg>
                    </div>
                    <div className="text-center mt-5 text-xl font-semibold text-gray-600 group-hover:text-pizza-500 transition-all ease-in-out duration-300">Beverages</div>
                </div>
            ,
        },
    ]

    return (
        <div className="w-12/12 md:w-10/12 m-auto py-28 px-1 md:p-0">
            <div className="flex flex-col w-full">
                <div className="text-2xl md:text-4xl font-bold text-center mb-5">Shop by Category</div>
                <div className="m-auto w-20 h-1 bg-pizza-600 mb-10"></div>
                <div ref={sliderRef} className="keen-slider w-full">
                    {
                        sliderContents.map((content: sliderContent, id: number) => 
                        <div key={id} className='keen-slider__slide'>
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