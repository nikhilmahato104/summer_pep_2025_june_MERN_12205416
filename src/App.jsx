import { useState } from 'react'
import './App.css'
//WHAT IS USEEFFET?
//WHAT IS USESTATE did?

//WHAT IS USEEFFECT? useEffect is a React Hook that lets you perform side effects in function components.
// It is called after the component renders and can be used for tasks like data fetching, subscriptions, or manually changing the DOM.
//WHAT IS USESTATE? useState is a React Hook that lets you add state to function components.
// It returns an array with two elements: the current state value and a function to update that state value.



//WHAT IS THE DIFFERENCE BETWEEN USESTATE AND USEEFFECT? useState is used to manage state in a component, while useEffect is used to perform side effects based on changes in state or props.


function App() {
  const [count, setCount] = useState(10)

  return (
    <>
     
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
    
    </>
  )
}

export default App
