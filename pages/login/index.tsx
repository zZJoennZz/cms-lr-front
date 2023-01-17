import Meta from "../../components/Meta"
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import ProductSidebar from "../../components/ProductSidebar"
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

import { useUser } from '../../utils/user'

const LoginSchema : any = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Required'),
    password: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Required')
})

export default function Login(props : any) {
    let router = useRouter()
    let isAuth: boolean
    const user: any = useUser()
    if (user !== null){
        isAuth = true;
    } else {
        isAuth = false;
    }
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: (values: {username:string, password:string}) => {
            props.login(values)
        }
    })

    if (isAuth) {
        router.push("/")
    }
    
    return (
        <>
            <Meta 
                pageTitle="Products - Le REUSSI"
                metaDescription="Test"
                otherMetaData="Test"
                metaKeywords="Test"
                metaRobots="Test"
            />
            <Menu 
                logout={() => props.logout()} 
                removeFromCart={(prodId: number) => props.removeFromCart(prodId)} 
                adjustCart={(e:any, prodId: number) => props.adjustCart(e, prodId)}
            />
            <div className="w-12/12 md:w-10/12 m-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 space-x-0 md:space-x-2">
                    <div className="col-span-3 order-2 md:order-1">
                        <ProductSidebar />
                    </div>
                    <div className="col-span-9 order-1 md:order-2">
                        <div className="bg-gray-100 w-full font-bold p-3 border border-gray-100 uppercase mb-3">
                            Login to your account
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 md:space-x-3">
                            <div className="px-5">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="group relative">   
                                        <label htmlFor="email_address" className="block mt-3 mb-2 text-sm text-gray-600">Username</label>
                                        <input type="text" name="username" id="username" className="border p-3 rounded-xl placeholder-gray-500 outline-none focus:outline focus:outline-gumbo transition-all ease-in-out w-full" placeholder="Enter your username" required value={formik.values.username} onChange={formik.handleChange} autoComplete="username" />
                                        {formik.errors.username && formik.touched.username ? <div className="mt-2 text-xs text-gray-400">{formik.errors.username}</div> : null}
                                    </div>
                                    <div className="group relative">   
                                        <label htmlFor="email_address" className="block mt-3 mb-2 text-sm text-gray-600">Password</label>
                                        <input type="password" name="password" id="password" className="border p-3 rounded-xl placeholder-gray-500 outline-none focus:outline focus:outline-gumbo transition-all ease-in-out w-full" placeholder="Enter your password" required value={formik.values.password} onChange={formik.handleChange} autoComplete="current-password" />
                                        {formik.errors.password && formik.touched.password ? <div className="mt-2 text-xs text-gray-400">{formik.errors.password}</div> : null}
                                    </div>
                                    <div className="group relative mt-4">
                                        <button type="submit" className="flex items-center justify-center w-full border border-pizza-600 bg-pizza-600 text-white hover:border-slate-400 hover:bg-white hover:text-slate-400 rounded-3xl py-3 transition-all ease-in-out font-bold">
                                            Login 
                                            <span className="material-symbols-outlined">
                                                login
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}