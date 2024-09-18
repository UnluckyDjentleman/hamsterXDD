import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import background from './hamster.png'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <img src={background} width="50%" onClick={() => setCount((count) => count + 1)} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <img src="https://icon-icons.com/downloadimage.php?id=210761&root=3360/PNG/512/&file=payment_digital_currency_crypto_business_finance_money_coin_token_icon_210761.png" width="24px"/>
      {count}
      </div>
    </>
  )
}

export default App
