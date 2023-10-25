import React, { useState } from 'react'

const Button = ({count, text}) => {
  return (
    <>
    <button onClick = {count}>{text}</button>
    </>
  )
}

const App = () => {
// ===states===
  const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

// ===event handlers===
const goodHandler = () => {
  setGood(good + 1)
}

const neutralHandler = () => {
  setNeutral(neutral + 1)
}

const badHandler = () => {
  setBad(bad + 1)
}

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
      
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

export default App
