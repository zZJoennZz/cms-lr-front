import Meta from '../components/Meta'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default function Home(props : any) {

    async function test() {
        const config = {
            headers: { 
                'Authorization':'Bearer ' + localStorage.getItem("token"), 
                'Content-Type': 'application/json' 
            },
        };
        let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}dbwebapi/products/getproducttypes/`, config).then(res => res.json())
        console.log(data);
    }

    return (
        <>
            <Meta 
                pageTitle={props.data[0].pageTitle}
                metaDescription={props.data[0].metaDescription}
                otherMetaData={props.data[0].otherMetaData}
                metaKeywords={props.data[0].metaKeywords}
                metaRobots={props.data[0].metaRobots}
            />

            <Menu 
                logout={() => props.logout()} 
                removeFromCart={(prodId: number) => props.removeFromCart(prodId)} 
                adjustCart={(e:any, prodId: number) => props.adjustCart(e, prodId)}
            />
            
            <button onClick={() => test()}>Test</button>

            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    let data : any;
    try  {
        data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}api/get_page_content`).then(res => res.json())
    } catch (e) {
        data = [
            {
                internalName: 'Home',
                pageTitle: 'Le REUSSI',
                pageContent: '',
                isHome: 'True',
                metaDescription: '',
                metaRobots: '',
                metaKeywords: '',
                otherMetaData: '',
                isPublished: 'True',
                isDeleted: 'False'
            }
        ]
    }
    return { props: { data }  }
}