import { Age } from "./components/Age"
import { Button } from "./components/Button"
import { ChildProp } from "./components/ChildProp"
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
      {/* <Counter />
      <br />
      <br />
      <Counter /> */}
      {/* <ChildProp>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quis tenetur quibusdam repellat iste nesciunt voluptatum voluptatibus animi aspernatur ea officia, consequatur ipsum quod veritatis magni, nemo atque, quos similique.</p>
        <ul>
          <li>this is list item 1</li>
        </ul>
      </ChildProp> */}
      <Counter />
      {/* <Button /> */}
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