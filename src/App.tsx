import { useState } from 'react'
import './App.css'
import background1 from './images/hamster1.png'
import background2 from './images/hamster2.png'
import background3 from './images/hamster3.png'
import background4 from './images/hamster4.png'
import background5 from './images/hamster5.png'
import background6 from './images/hamster6.png'
import background7 from './images/hamster7.png'
import token from './images/token.png'
function App() {
  //array of hamsters
  const arrayOfLevels:{level: number, clicksCountToUpgrade: number, image: string, color: string}[]=[
    {
      level: 1,
      clicksCountToUpgrade: 0,
      image: background1,
      color: 'gainsboro'
    },
    {
      level: 2,
      clicksCountToUpgrade: 5,
      image: background2,
      color: 'darkred'
    },
    {
      level: 3,
      clicksCountToUpgrade: 10,
      image: background3,
      color: 'tomato'
    },
    {
      level: 4,
      clicksCountToUpgrade: 20,
      image: background4,
      color: 'gold'
    },
    {
      level: 5,
      clicksCountToUpgrade: 50,
      image: background5,
      color: 'lime'
    },
    {
      level: 6,
      clicksCountToUpgrade: 100,
      image: background6,
      color: 'deepskyblue'
    },
    {
      level: 7,
      clicksCountToUpgrade: 200,
      image: background7,
      color: 'darkorchid'
    }
  ]
  //useState
  const [count, setCount] = useState(0);
  const [background, setBackground]=useState(arrayOfLevels[0].image);
  const [color, setColor]=useState(arrayOfLevels[0].color);
  const [level, setLevel]=useState(arrayOfLevels[0].level)

  const onClickHamster=()=>{
    setCount(count=>count+1);
    if(count===arrayOfLevels[level].clicksCountToUpgrade){
      console.log('Level upgraded');
      setLevel(level=>level+1)
      setBackground(arrayOfLevels[level].image)
      setColor(arrayOfLevels[level].color)
    }
  }

  return (
    <div>
      <h1 style={{fontSize: '10vh'}}>Crypto Scam</h1>
      <div style={{display: 'flex', justifyContent: 'center', width:"20vw", height:"20vw", borderRadius: "100%", backgroundColor: color, padding: ".2vw", border: '20px solid rgba(0,0,0, 0.25)'}}>
        <img src={background} onClick={onClickHamster} />
      </div>
      <div style={{display: 'flex', justifyContent:'space-between'}}>
        <div style={{display: 'flex', justifyContent: 'center', fontSize: '5vh'}}>
          <img src={token} width="50vw" height="50vw"/>
          {count}
        </div>
        <div style={{fontSize: '5vh'}}>
          Level {level}
        </div>
      </div>
    </div>
  )
}

export default App
