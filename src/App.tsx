import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar";


export default function App() {
  return (
     <Router>
      <div className="flex h-screen">
        <SideBar></SideBar>
      </div>
    </Router>
   
  )
}
