import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Players from './Players'
import Singer from './Singer'

function App() {
  const players = ['Ronaldo', 'Haland', 'Vini', 'MBappe', 'Benjema'];

  const singers = [
    { id: 1, name: 'Hridoy Khan', age: 40 },
    { id: 1, name: 'Balam', age: 42 },
    { id: 1, name: 'Habib', age: 45 },
    { id: 1, name: 'Jems', age: 60 }
  ]

  return (
    <>

      <h1>Vite + React</h1>

      {
        // singers.map(singer => <Singer singer={singer}></Singer>)
      }


      {/* <Players name='Muller'></Players>

    {
      players.map(player => <Players name={player}></Players>)
    } */}

      {/* <Todo task= 'Learn React' isDone={true}></Todo>
    <Todo task= 'Learn JSX' isDone={false}></Todo>
    <Todo task= 'React Core concept' isDone={true}></Todo> */}
      {/* 
      <Device name='Laptop' price='30000'></Device>
      <Device name='Mobile' price='15000'></Device>
      <Device  name='Watch' price='5000'></Device>
      <Person></Person>
      <Student grade='12' score= '20'></Student>
      <Student></Student> */}
    </>
  )
}

function Person() {
  const age = 25;
  const person = {
    name: 'Hasib',
    age: 25
  }
  return (
    <div>
      <h2>Hello I am {person.name}, with age: {age}</h2>
    </div>
  )
}

// const {grade, score} = {grade:'7', score:'12'};

function Student({ grade = 1, score = 0 }) {

  console.log(grade, score);
  const studentStyle = {
    margin: `10px`,
    padding: `10px`,
    border: `2px solid red`,
    borderRadius: `10px`
  }
  return (
    <div style={studentStyle}>
      <h2>Class: {grade}</h2>
      <p>Score: {score}</p>
    </div>
  )

}

function Device(props) {

  console.log(props);
  return (
    <div>
      <h2>Device Name: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App
