import { useState } from 'react'
import './App.css'

function App() {

  const [clicked, setClicked] = useState<boolean>(false)

  if (clicked) {
    return (
        <>
          <h1>🏳️‍🌈 מקמל הומו 🏳️‍🌈</h1> 
          <img src="https://lh3.googleusercontent.com/pw/ABLVV85KY6YughZIjF4gxet9mChjkKbAIeU_WCd9tH3Hnds0m4VchFxdi2m2fmknKcoN97FaNFrp68OIaeNuWmTQxTjybjvc9NR5BC61TVxS_fJ_c7nK8dCnu1Ziw8gPsR_9UycBM6ieHBTolAnDNJhRtbdHWVT6cXInh6oRTQN9MfycSePeSqCA5iALnKrxRnd-tEgMvg3TTdrAVb4IgDFvP56CqXHwZdEyQm4kRLTuoZERQdBrVnS546fdROLszB-cRturgp-ekx4VJNCIFaPfXTaNaKJO1zxiwe4rQO1MP8jY14CHiIzLToDQok73PfdDoMzwFwGv57QAFFaB10nAPE2gJ3qnE9TsqRSN4oPY6TaIhacrg89v-jFrWX5SAfk8UWuaR-uIbw1puYmTe_WZibSRHEwb63OeiG3nx1MrfiLGnwNdo-XwkvZwalICgmWsW9w9bednhqwL-6rqC_Rc6hLY5vobqGqbKS5WCfNs1wTgz4ALDDCfZ97AhH65ycpcwssltv6wVUmclI7Ehk1iAiFag6qjx9VuZWgedg64C1NijphUH9CvQWWuTzKnr6gxa_4IB0X-RzjnqkHvk5HP8XuqFsY6QBu1bG0RUt4SIF1AiXD6A7kWdM-mUI9nC5EhfZPfvTYb4mwlB-7rVGDLfM1gBacHa32BtNulDHrCIBr2i_1RzhUkzYXvIAKzAQDUXjgFrU3GdggWqhWzD4Yf4Vt-MmvVMKW5yYMSE-gRYQXnMxNKoSCffl6veXr25uIXLCKN3IHgAVoa5aUaI8myFrfjpTikl2oucFyj3tufqrpKbsMkiU74EwJYSGPfUcbDYZpvtno0KZ43kUbJSSQAxuV18C8pmZ87KN-XMiKI9lXtfMCSXb7u7myaNZHraI75wOivpA=w659-h869-s-no-gm?authuser=0" alt="" />
        </>
    )
  
  }
  


  return (
    <>
      <button onClick={() => {
        setClicked(true)
      }}>תלחץ פה זריז</button>
    </>
  )
}

export default App
