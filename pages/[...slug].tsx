import Meta from '../components/Meta';
import type { PageContent, PageContent1 } from '../types/appTypes';
import Parse from 'html-react-parser';

export default function Home(props : PageContent1) {
  return (
      <>
        <Meta pageTitle='Joenn' metaDescription='Lorem ipsum'  />
        <div className="body-container bg-white">
            <div className="border-b">
                <div className="header p-3">
                    <div className="grid">
                      {Parse(props.pageContent)}
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export async function getServerSideProps(context : any) {
  const { params } = context;
  const slug = params.slug;
  console.log(slug);
  const res = await fetch(`http://localhost:3000/api/get_page_content`)
  let data = await res.json()
  data = data.filter((d: PageContent) => d.pageSlug === slug[0]);
  return { props: data[0] }
}