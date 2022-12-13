interface StaticRequire {
    default: StaticImageData;
}
type StaticImport = StaticRequire | StaticImageData;

interface Props {
    id: number;
    slug: string;
    productName: string;
    price: number;
    salePrice?: number;
    image: string | StaticImport;
    countdown: string;
    rating: number;
}

import styles from '../styles/ProductBox.module.css'
import Image from 'next/image'
import type { StaticImageData } from 'next/image';

export default function ProductBox(props: Props): JSX.Element {
    return (
        <div className="group cursor-pointer">
            <div className={styles.cardInner}>
                <Image src={props.image} alt={props.productName} className={styles.cardImg} />
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
                <div className="grid grid-cols-5 -mt-12 scale-0 text-center p-2 group-hover:scale-100 transition-all ease-in-out">
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
            
            <div className="font-semibold text-slate-600 text-center mb-1">{props.productName}</div>
            <div className="text-center group-hover:scale-0 transition-all ease-in-out">
                {
                    props.salePrice ? <>{props.salePrice} <s>{props.price}</s></> : <>{props.price}</>
                }
            </div>
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
    )
}