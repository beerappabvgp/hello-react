import { Age } from "./components/Age"
import { Button } from "./components/Button"
import { Counter } from "./components/Counter"
import { DisplayUsers } from "./components/DisplayUsers"
import { EventExample } from "./components/EventExample"
import { ParentComponent } from "./components/ParentComponent"


function App() {
  return (
    <div>
      {/* <ParentComponent /> */}
      {/* <Age age={10} isVoted={true }/>
      <Age age={20} isVoted={true}/> */}
      {/* <DisplayUsers /> */}
      {/* <EventExample /> */}
      <Counter />
      <br />
      <br />
      <Counter />
    </div>
  )
}

export default App





// You need to create a new div tag 
// const div = document.createElement('div');
// need to create a h1 tag
// const h1 = document.createElement('h1');
// Add the content to h1 
// h1.innerText = "Hello World !!!"
// div.appendChild(h1);
// document.body.appendChild(div);