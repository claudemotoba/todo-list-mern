import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import CreateTodo from './pages/create-todo/create-todo';
import TodoList from './pages/todolist/list-todo';
import Header from "./components/layout/header/header";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>

          <Route path="" element={<TodoList/>}/>
          <Route path="/save" element={<CreateTodo/>}/>
          <Route path="/save/:id" element={<CreateTodo/>}/>

        </Routes>
      </div>
    </Router>

  );
}

export default App;
