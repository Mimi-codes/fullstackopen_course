import React from 'react'

const App = () => {

  // ===header===
  const Header = (props) => {
  return (
    <>
    <h1>{props.title}</h1>
    </>
  )
}

// ===part===
const Part = (props) => {
  return (
    <>
    <p>{props.part} {props.exercises}</p>
    </>
  )
}

// ===content===
const Content = (props) => {
  return (
    <>
    <Part
     part = {props.parts[0].part1} exercises = {props.parts[0].exercises1}
      />
    <Part
     part = {props.parts[1].part2} exercises = {props.parts[1].exercises2}
      />
    <Part
     part = {props.parts[2].part3} exercises = {props.parts[2].exercises3}
     />
    </>
  )
}

// ===total===
const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.total1 + props.total2 + props.total3} </p>
    </>
  )
  }

const course = {
  name: 'Half Stack application development',
  parts: [
    {
      part1: 'Fundamentals of React',
      exercises1: 10
    },
    {
      part2: 'Using props to pass data',
      exercises2: 7
    },
    {
      part3: 'State of a component',
      exercises3: 14
    }
  ]
}
   
  return (
    <>
    <Header title = {course.name} />
    <Content parts = {course.parts} />
    <Total 
    total1 = {course.parts[0].exercises1}
    total2 = {course.parts[1].exercises2}
    total3 = {course.parts[2].exercises3}
    />
    </>
  )
}

export default App
