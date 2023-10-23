import React from 'react'
import { createContext } from "react"
import { useContext } from 'react'

const Crypto=createContext()

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = React.useState("USD")
  const [symbol, setSymbol] = React.useState("₹")
  
  React.useEffect(() => {
    if (currency === "INR") {
    setSymbol("₹");
    } else if (currency === "USD") {
    setSymbol("$");
  }
  },[currency])


  return (
    <Crypto.Provider value={{symbol,currency,setCurrency}}>
      {children}
    </Crypto.Provider>);
}

export default CryptoContext



export const CryptoState = () => {
    return useContext(Crypto);
}



