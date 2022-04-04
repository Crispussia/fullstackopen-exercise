import { useState } from 'react'
const Header = ({title}) => {
  return (
    <>
     <h2>{title}</h2> 
    </>
  )
}
const StatisticLine = (props) => {
  return (
    
     <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
     </tr>
  )
}
const Statistics = ({good,neutral,bad}) => {
 if(good + neutral + bad > 0){
  return (
    <div>
       <h2>statistics</h2>
       <table>
         <tbody>
        <StatisticLine text='good' value = {good} />
        <StatisticLine text='neutral' value = {neutral} />
        <StatisticLine text='bad' value = {bad} />
        <StatisticLine text='all' value = {good + neutral+ bad} />
        <StatisticLine text='arevage' value = {((good - bad) / (good + neutral+ bad))} />
        <StatisticLine text='positive' value = {100 * (good / (good + neutral+ bad)) + ' % '} />
        </tbody>
      </table>
    </div>
  )
 }


return (
  <div>
    <p>No feedback given</p>
  </div>
)
 
  
}

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>{text}</button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title="give feedback"
 

  const setToGood = (newValue) => {
    setGood(newValue)
  }

  const setToNeutral= (newValue) => {
    setNeutral(newValue)
  }
  const setToBad= (newValue) => {
    setBad(newValue)
  }

  return (
    <div>
      <Header title={title}/>
      <Button handleClick={() => setToGood(good+1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App