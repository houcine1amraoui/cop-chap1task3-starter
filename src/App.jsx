import "./App.css";
import groceryCartImg from "./assets/grocery-cart.png";

function App() {
  const groceryItems = [
    { id: 1, name: "bread", quantity: 1, completed: false },
    { id: 2, name: "meat", quantity: 1, completed: false },
  ];
  return (
    <main className="App">
      <div>
        <div>
          <h4 className="success">You&apos;re Done</h4>
          <div className="header">
            <h1>Shopping List</h1>
            <img src={groceryCartImg} alt="" />
            <input
              type="text"
              placeholder="Add an Item"
              className="item-input"
            />
          </div>
        </div>
        <ul>
          <li key={groceryItems[0].name}>
            <div className="container">
              <input
                type="checkbox"
                value={groceryItems[0].completed}
                checked={groceryItems[0].completed}
              />
              <p>{groceryItems[0].name}</p>
            </div>
            <div>
              <button className="remove-button">X</button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
