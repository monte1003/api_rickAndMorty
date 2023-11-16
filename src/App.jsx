import "./App.css";
import Header from "../components/header";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";
import Characters from "../components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCaracters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCaracters(info.prev);
  };

  const onNext = () => {
    fetchCaracters(info.next);
  };

  useEffect(() => {
    fetchCaracters(url);
  }, []);
  return (
    <>
      <Header brand="Rick and Morty App" />
      <div className="container mt-5 mb-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
