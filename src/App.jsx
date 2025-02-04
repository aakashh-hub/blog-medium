import CreateBlog from "./components/CreateBlog"
import NavBar from "./components/NavBar"
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/addBlog" element={<CreateBlog />} />
      </Routes>
    </>
  )
}

export default App
