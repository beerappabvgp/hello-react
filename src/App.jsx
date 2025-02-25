import { Button } from "./components/Button"


function App() {
  return (
    <div>
      <h1>Hello World !!! </h1>
      {/* This is how we use react components  */}
      <Button />
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