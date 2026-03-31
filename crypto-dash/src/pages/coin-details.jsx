import { useState, useEffect } from "react";
import { useParams } from "react-router";

const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinDetailsPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchCoin = async () => {
    try {
      const res = await fetch(`${API_URL}/${id}`);
      if (!res.ok) throw new Error("Failed to catch data");
      const data = await res.json();
      console.log("data-> ", data);
    } catch (err) {
      console.log("err-> ", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoin();
  }, [id]);

  return <div>Coin Details {id}</div>;
};

export default CoinDetailsPage;
