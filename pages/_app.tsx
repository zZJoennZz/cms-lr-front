import React from 'react'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContext } from '../utils/user'
import { CartContext } from '../utils/cart'
import axios from 'axios'

import { CartList } from '../types/appTypes'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function App({ Component, pageProps }: AppProps,) {
  const { query } = useRouter()

  const [user, setUser] = React.useState(null)
  const [itemCart, setItemCart] = React.useState(null)
  const [loginErr, setLoginErr] = React.useState("")

  function addProductToCart(item: CartList) {
    let cart: any = []
    if (item.qty === 0) {
      alert('Enter quantity!')
      return;
    }
    if (localStorage.getItem('cart')) {
      cart = localStorage.getItem('cart')
      cart = cart ? JSON.parse(cart) : []
    }

    cart = cart.filter((d : CartList) => d.id === item.id)
    
    if (cart.length > 0) {
      cart[0].qty = parseInt(cart[0].qty) + parseInt(item.qty)
    } else {
      cart.push(item)
    }
    localStorage.setItem('cart', JSON.stringify(cart))

    setItemCart(cart)
  }

  function adjustCart(e: any, prodId: number) {
    let storageCart: any
    let product : any;

    storageCart = localStorage.getItem('cart')
    storageCart = storageCart ? JSON.parse(storageCart) : []
    
    if (parseInt(e.target.value) <= 0) {
      let confirmRemove = confirm("Are you sure to remove this item?")
      if (confirmRemove) {
        product = storageCart.filter((product : any) => product.id !== prodId)
        localStorage.setItem('cart', JSON.stringify(product))
      } else {
        e.target.value = 1
        product = storageCart.filter((product : any) => product.id === prodId)
        product[0].qty = e.target.value
        localStorage.setItem('cart', JSON.stringify(product))
      }
    } else {
      product = storageCart.filter((product : any) => product.id === prodId)
      product[0].qty = e.target.value
      localStorage.setItem('cart', JSON.stringify(product))
    }
    setItemCart(product)
  }
  
  function removeProductFromCart(prodId: number) {
    let storageCart: any

    storageCart = localStorage.getItem('cart')
    storageCart = storageCart ? JSON.parse(storageCart) : []
    let product = storageCart.filter((product : any) => product.id !== prodId)
    localStorage.setItem('cart', JSON.stringify(product))
    setItemCart(product)
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
    let cart: any
    if (localStorage.getItem('cart')) {
      cart = localStorage.getItem('cart')
      cart = cart && cart.length > 0 ? JSON.parse(cart) : null
    }
    if (cart === undefined) {
      cart = null
    }
    setItemCart(cart)
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
      <CartContext.Provider value={itemCart}>
        <Component 
          {...pageProps} 
          login={(credentials : { username: string, password: string }) => login(credentials)} 
          logout={() => logout()} 
          addToCart={(e : CartList) => addProductToCart(e)} 
          removeFromCart={(prodId: number) => removeProductFromCart(prodId)} 
          loginErr={loginErr}
          dismissLoginErr={() => setLoginErr('')}
          adjustCart={(e:any, prodId:number) => adjustCart(e, prodId)}
        />
      </CartContext.Provider>
    </UserContext.Provider>
  )
}