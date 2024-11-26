import { useState } from "react"

function App(){

  const [todo, setTodos] = useState([
    {
      title: "Gym",
      description: "Go to gym"
    },
    {
      title: "Auction",
      description: "Love"
    },
    {
      title: "DSA",
      description: "Chim tapak Dum dum"
    }
  ])

  function addTodo(){
   setTodos([...todo,{
    id: 4,
    title: Math.random(),
    description: Math.random()
   }]) 
  }

  return <div>
    <button onClick={addTodo}>Add a todo</button>
    {todo.map((it)=>{
      return <Todo title={it.title} description={it.description} /> 
    })}
  </div>
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}

export default App;