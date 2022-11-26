import Meta from '../components/Meta';
import Menu from '../components/Menu';
import Carousel from '../components/Carousel';
import type { PageContent, PageContent1 } from '../types/appTypes';
import Parse from 'html-react-parser';

export default function Home(props : PageContent1) {
    return (
        <>
            <Meta 
                pageTitle={props.pageTitle} 
                metaDescription={props.metaDescription} 
                otherMetaData={props.otherMetaData} 
                metaKeywords={props.metaKeywords} 
                metaRobots={props.metaRobots} 
            />
            <Menu />
            <Carousel />
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://127.0.0.1:8000/dbwebapi/shop/getpagecontents/`);
    const data = await res.json()
    return { props: data[0] }
}