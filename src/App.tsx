import "./App.css";
import ListDisplay from "./components/ListDisplay/ListDisplay";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <span>Hello World!</span>
      <ListDisplay data={["Item 1", "Item 2", "Item 3"]} />
    </>
  );
}

export default App;
