import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import DrugInfo from "./pages/DrugInfo";
import "@fontsource/roboto/300.css"; // Light font weight
import "@fontsource/roboto/400.css"; // Regular font weight
import "@fontsource/roboto/500.css"; // Medium font weight
import "@fontsource/roboto/700.css"; // Bold font weight

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
