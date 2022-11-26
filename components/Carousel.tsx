import Image from 'next/image'

export default function Carousel() {
    return (
        <div className="carousel-container">
          <div className="carousel my-carousel carousel--translate">
            <input className="carousel__activator" type="radio" name="carousel" id="F" defaultChecked />
            <input className="carousel__activator" type="radio" name="carousel" id="G"/>
            <input className="carousel__activator" type="radio" name="carousel" id="H"/>
            <input className="carousel__activator" type="radio" name="carousel" id="I"/>
            <input className="carousel__activator" type="radio" name="carousel" id="J"/>
            <div className="carousel__controls">
              <label className="carousel__control carousel__control--backward" htmlFor="J"></label>
              <label className="carousel__control carousel__control--forward" htmlFor="G"></label>
            </div>
            <div className="carousel__controls">
              <label className="carousel__control carousel__control--backward" htmlFor="F"></label>
              <label className="carousel__control carousel__control--forward" htmlFor="H"></label>
            </div>
            <div className="carousel__controls">
              <label className="carousel__control carousel__control--backward" htmlFor="G"></label>
              <label className="carousel__control carousel__control--forward" htmlFor="I"></label>
            </div>
            <div className="carousel__controls">
              <label className="carousel__control carousel__control--backward" htmlFor="H"></label>
              <label className="carousel__control carousel__control--forward" htmlFor="J"></label>
            </div>
            <div className="carousel__controls">
              <label className="carousel__control carousel__control--backward" htmlFor="I"></label>
              <label className="carousel__control carousel__control--forward" htmlFor="F"></label>
            </div>
            <div className="carousel__track">
              <li className="carousel__slide">
                <div className="flex h-full">
                  <div className="w-4/6 m-auto items-center">
                    <button className='mb-14 border border-slate-200 bg-opacity-95 text-slate-200 px-4 py-2 rounded-lg uppercase' style={{ letterSpacing: '1ch' }}>
                      Save up to 90% off!
                    </button>
                    <div className="text-white text-7xl">
                      100% Pure Bliss!
                    </div>
                  </div>
                </div>
              </li>
              <li className="carousel__slide">
                <h1>G</h1>
              </li>
              <li className="carousel__slide">
                <h1>H</h1>
              </li>
              <li className="carousel__slide">
                <h1>I</h1>
              </li>
              <li className="carousel__slide">
                <h1>J</h1>
              </li>
            </div>
            <div className="carousel__indicators">
              <label className="carousel__indicator" htmlFor="F"></label>
              <label className="carousel__indicator" htmlFor="G"></label>
              <label className="carousel__indicator" htmlFor="H"></label>
              <label className="carousel__indicator" htmlFor="I"></label>
              <label className="carousel__indicator" htmlFor="J"></label>
            </div>
          </div>
        </div>
    )
}