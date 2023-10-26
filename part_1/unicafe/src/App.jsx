import React, { useState } from 'react'

// ===button component===
const Button = ({count, text}) => {
  return (
    <>
    <button onClick = {count}>{text}</button>
    </>
  )
}

// ===statistic line===
const StatisticLine = ({text, value, percent}) => {
  return (
    <>
    <p>{text} {value} {percent}</p>
    </>
  )
}


// ===statistics===
const Statistics = ({allStates, good, neutral, bad, average, positive}) => {
  return (
    <>
    <h1>statistics</h1>
    {allStates.length === 0 ? <p>No feedback given</p> :
<table>
  <tbody>
  <tr>
    <td><StatisticLine text='good' /></td>
    <td><StatisticLine value={good} /></td>
  </tr>

  <tr>
    <td><StatisticLine text='good' /></td>
    <td><StatisticLine value={good} /></td>
  </tr>

  <tr>
    <td><StatisticLine text='bad' /></td>
    <td><StatisticLine value={bad} /></td>
  </tr>

  <tr>
    <td><StatisticLine text='average' /></td>
    <td><StatisticLine value={average} /></td>
  </tr>

  <tr>
    <td><StatisticLine text='positive' /></td>
    <td><StatisticLine value={positive} percent='%' /></td>
  </tr>
  </tbody>
</table>     
}

    </>
  )
}


const App = () => {
// ===states===
  const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const [allStates, setAllStates] = useState([])

// ===event handlers===
const goodHandler = () => {
  setAllStates(allStates + 1)
  setGood(good + 1)
}

const neutralHandler = () => {
  setAllStates(allStates + 1)
  setNeutral(neutral + 1)
}

const badHandler = () => {
  setAllStates(allStates + 1)
  setBad(bad + 1)
}


// ===all===
const all = `${good + neutral + bad}`

// ===average===
const average = `${(good * 1) + (neutral * 0) + (bad * -1) / 3}`

// ===positive===
const positive = `${good}`/`${all}` * 100


  return (
    <>
      <h1>give feedback</h1>
      <Button 
      count={goodHandler}
      text='good' 
      />
      
      <Button
      count={neutralHandler} text='neutral'
      />

      <Button
      count={badHandler} 
      text='bad' 
      />
      
   <Statistics 
   allStates={allStates}
   good={good} 
   neutral ={neutral}
   bad={bad}
   all={all}
   average={average}
   positive={positive}
   />
    </>
  )
}

export default App
