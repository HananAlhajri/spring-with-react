import './App.css';
import TodoApp from './components/todo/TodoApp';
// import Counter from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      {/* <PlayWithProps property1="value1" property2 = "value2" /> */}
      {/* <Counter /> */}
      <TodoApp />


    </div>
  );
}

// function PlayWithProps({property1, property2}) {
//   console.log(property1)
//   console.log(property2)

//   return (
//     <div>{property1}</div>
//   )
// }

export default App;
