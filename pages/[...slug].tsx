import Meta from '../components/Meta'
import { useRouter } from 'next/router'

export default function Home(props : any) {
  console.log(props)
  const router = useRouter()
  const { slug } = router.query
  return (
      <>
        <Meta pageTitle='Joenn' metaDescription='Lorem ipsum'  />
        <div className="body-container bg-white">
            <div className="border-b">
                <div className="header p-3">
                    <div className="grid">
                        ASDASD
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export async function getServerSideProps(context : any) {
  const { params } = context;
  const slug = context.slug;
  console.log(slug);
  const res = await fetch(`http://localhost:3000/api/get_page_content`)
  const data = await res.json()
  return { props: data }
}