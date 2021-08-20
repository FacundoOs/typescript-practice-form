import { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from './components/AddToList'

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Player",
      age: 34,
      url: "https://images.unsplash.com/photo-1580692475446-c2fabbbbf835?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      note: "string",
    },
  ]);

  return (
    <div className="App">
      <h1>List</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
