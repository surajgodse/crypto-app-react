import { useState, useEffect } from "react";
import axios from "axios";

export default function Crypto() {
  const [info, setInfo] = useState([]);
  const [coin, setCoin] = useState("");

  const hCoin = (event) => setCoin(event.target.value);

  const finfo = info.filter((c) =>
    c.name.toLowerCase().includes(coin.toLowerCase())
  );

  useEffect(() => {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD";
    axios
      .get(url)
      .then((res) => setInfo(res.data))
      .catch((err) => alert("issue" + err));
  }, []);

  return (
    <>
      <div className="container">
        <center>
          <h1>CryptoVerse</h1>
          <form>
            <input
              type="text"
              placeholder="Enter coin name"
              onChange={hCoin}
              value={coin}
            />
          </form>
          <br />
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Icon</th>
                <th>Price</th>
                <th>ATH</th>
                <th>ATL</th>
              </tr>
            </thead>
            <tbody>
              {finfo.map((e) => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.symbol}</td>
                  <td>
                    <img src={e.image} alt={`${e.name} icon`} />
                  </td>
                  <td>${e.current_price}</td>
                  <td>${e.ath}</td>
                  <td>${e.atl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
      <footer>
        <p>Created by @Suraj Godse</p>
        <a
          href="https://www.linkedin.com/in/suraj-godse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/linkedin-logo.png" alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/surajgodse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/github-logo.png" alt="GitHub" />
        </a>
      </footer>
    </>
  );
}
