import React from "react";
import { UpvoteProvider } from "./context/UpvoteContext";
import UpvoteList from "./components/UpvoteList";
import "./styles.css";

const App = () => (
  <UpvoteProvider>
    <div className="app">
      <UpvoteList listName="list1" />
      <UpvoteList listName="list2" />
    </div>
  </UpvoteProvider>
);

export default App;
