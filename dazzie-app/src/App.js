import "./App.css";
import Routes from "./routes/Routes";
import { RouterProvider } from "react-router-dom";


const App = () =>{
  return (
    <RouterProvider router={Routes} />

  );
}

export default App;
