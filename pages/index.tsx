import Meta from '../components/Meta';
import type { PageContent } from '../types/appTypes';
import Parse from 'html-react-parser';

export default function Home(props : PageContent) {
    return (
        <>
            <Meta 
                pageTitle={props.pageTitle} 
                metaDescription={props.metaDescription} 
                otherMetaData={props.otherMetaData} 
                metaKeywords={props.metaKeywords} 
                metaRobots={props.metaRobots} 
            />
            <div className="body-container bg-white">
                <div className="border-b">
                    <div className="header p-3">
                        <div className="grid">
                            
                        </div>
                    </div>
                </div>
                <div>
                    {Parse(props.pageContent)}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const dummyData : PageContent = {
        id: 1,
        internalName: 'home',
        pageSlug: '/home',
        pageTitle: 'Home',
        pageContent: `
            <div>
                <h1 class='text-red-600 font-bold'>HEY THERE!</h1>
                <h2>Test</h2>
            </div>
        `,
        isHome: true,
        metaDescription: 'ASDASDASDASDASDASD',
        metaKeywords: 'test, fight, me',
        metaRobots: 'test',
        otherMetaData: '<meta />',
    }

    return { props: dummyData }
}