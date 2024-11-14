import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    // Using fetch to get data from the backend
    fetch("http://localhost:3000/api/data")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        console.log(data);
        setData(data.data); // Set the received data in state
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <article>
        <h1 className="read-the-docs">
          Click on the Vite and React logos to learn more
        </h1>
      </article>
      <hr />
      <div>
        <h1>Data from Server</h1>
          {data.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
      </div>
    </>
  );
}

export default Home;
