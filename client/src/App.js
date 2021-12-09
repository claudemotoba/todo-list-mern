import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import CreateTodo from './pages/create-todo/create-todo';
import TodoList from './pages/todolist/list-todo';
import Header from "./components/layout/header/header";
import './App.css';


function App() {
  return (
    <Router>
      <div className="d-flex col-sm-12 px-5 mt-5">

        <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>

          <Route exact path="/" element={<TodoList/>}/>
          {/* <Route exact path="/status/:status" element={<TodoList/>}/> */}
          <Route exact path="/save" element={<CreateTodo/>}/>
          <Route exact path="/save/:id" element={<CreateTodo/>}/>

        </Routes>
      </div>
    </Router>

  );
}

export default App;
