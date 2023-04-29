import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const API = "https://api.quotable.io/quotes/random";
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchQuote() {
      const response = await fetch(API);
      const data = await response.json();

      setQuote(data);
    }

    fetchQuote();
  }, []);

  if (quote === null) {
    return <p>Loading random quote data...</p>;
  }

  return <div>{quote[0].content}</div>;
}

export default App;
