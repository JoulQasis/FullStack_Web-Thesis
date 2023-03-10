import Content from "./Content";
import { Route, Routes } from "react-router-dom";

function App() 
{
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
