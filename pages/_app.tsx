import React from 'react'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContext } from '../utils/user'
import axios from 'axios'

const API_URL = "http://localhost:8000/"

export default function App({ Component, pageProps }: AppProps,) {
  const { query } = useRouter()
  console.log(query)
  const [user, setUser] = React.useState(null)
  const [loginErr, setLoginErr] = React.useState("")

  function addProductToCart() {
    let cart: any = []
    if (localStorage.getItem('cart')) {
      cart = localStorage.getItem('cart')
      cart = cart ? JSON.parse(cart) : []
    }
    cart.push({productId : 1, productName: 'test1'});
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  function removeProductFromCart(productId: number) {
    let storageCart: any;
    // logic

    storageCart = localStorage.getItem('cart')
    storageCart = storageCart ? JSON.parse(storageCart) : []
    let product = storageCart.filter((product : any) => product.productId !== productId)
    localStorage.setItem('cart', JSON.stringify(product))
  }

  async function checkIfLoggedIn() {
    await axios.post(`${API_URL}dbwebapi/vanguard/refresh/`, { refresh: localStorage.getItem("refresh") }, { headers: { Authorization: localStorage.getItem("token") } })
      .then(res => {
        localStorage.setItem("token", res.data.access)
        localStorage.setItem("refresh", res.data.refresh)
      })
      .catch(err => setUser(null))

    await axios.post(`${API_URL}dbwebapi/vanguard/whoami/`, null, { headers: { Authorization: 'Bearer ' + localStorage.getItem("token") } })
      .then(res => setUser(res.data))
      .catch(err => setUser(null))
  }

  React.useEffect(() => {
    checkIfLoggedIn()
  }, []);

  if (pageProps.protected && !user) {
    return <>Fetching data...</>
  }

  async function login(loginCredentials : { username: string, password: string }) {
    await axios.post(`${API_URL}dbwebapi/vanguard/login/`, loginCredentials)
      .then(res => {
        localStorage.setItem("token", res.data.access)
        localStorage.setItem("refresh", res.data.refresh)
        checkIfLoggedIn()
      })
      .catch(err => {
        console.error(err.response.data.detail)
        if (err.response.data.detail && err.response.data.detail === 'No active account found with the given credentials') {
          setLoginErr(err.response.data.detail)
        }
      })
  }

  async function logout() {
    await axios.post(`${API_URL}dbwebapi/vanguard/logout/`, { refresh: localStorage.getItem("refresh") }, { headers: { Authorization: localStorage.getItem("token") } })
      .then(res => {
        localStorage.clear()
        checkIfLoggedIn()
      })
      .catch(err => {
        console.error(err.response.data.detail ? err.response.data.detail : "Something went wrong. You will be logged out.")
        localStorage.clear()
        checkIfLoggedIn()
      })
  }

  return (
    <UserContext.Provider value={user}>
      <Component 
        {...pageProps} 
        login={(credentials : { username: string, password: string }) => login(credentials)} 
        logout={() => logout()} 
        addToCart={() => addProductToCart()} 
        removeFromCart={(prodId: number) => removeProductFromCart(prodId)} 
        loginErr={loginErr}
        dismissLoginErr={() => setLoginErr('')}
      />
    </UserContext.Provider>
  )
}