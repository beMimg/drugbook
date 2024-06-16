import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import DrugInfo from "./pages/DrugInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/drug/:id" element={<DrugInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
