import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ListOfDrugsByGenericName from "./pages/ListOfDrugsByGenericName";
import DetailedInfoDrug from "./pages/DetailedInfoDrug";
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
          <Route
            path="/list/:genericName"
            element={<ListOfDrugsByGenericName />}
          />
          <Route path="/information/:id" element={<DetailedInfoDrug />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
