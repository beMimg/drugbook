import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import ListOfDrugsByGenericName from "./pages/ListOfDrugsByGenericName";
import DetailedDrugInfo from "./pages/DetailedDrugInfo";
import "@fontsource/roboto/300.css"; // Light font weight
import "@fontsource/roboto/400.css"; // Regular font weight
import "@fontsource/roboto/500.css"; // Medium font weight
import "@fontsource/roboto/700.css"; // Bold font weight
import About from "./pages/About";
import SearchResultsForInput from "./pages/SearchResultsForInput";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/search/:input" element={<SearchResultsForInput />} />
          <Route
            path="/list/:genericName"
            element={<ListOfDrugsByGenericName />}
          />
          <Route path="/information/:id" element={<DetailedDrugInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
