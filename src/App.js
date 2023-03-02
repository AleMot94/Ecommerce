import "./App.css";
import NavBarComp from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Counter } from "./componentes/Counter/Counter";

function App() {
  return (
    <div className="App">
      <NavBarComp />
      <ItemListContainer titulo="ECOMMERCE" />
      <Counter initial={10} title="contador" stock={20} />
    </div>
  );
}

export default App;
