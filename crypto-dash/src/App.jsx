import { useState, useEffect } from "react";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import Header from "./components/Header";
import NotFoundPage from "./pages/not-found";
import { Route, Routes } from "react-router";
const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  const fetchCoins = async () => {
    try {
      const response = await fetch(
        `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`,
      );
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();

      setCoins(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [limit]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              coins={coins}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              sortBy={sortBy}
              setSortBy={setSortBy}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
