/* eslint-disable no-unused-vars */
import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import WantToCooke from "./components/WantToCooke/WantToCooke";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [cooke, setCooke] = useState([]);
  const [preparing, setPreparing] = useState([]);

  const handleClick = (item) => {
    setCooke((c) => [...c, item]);
  };

  const handleClickShow = (item) => {
    const updatedCooke = cooke.filter((c) => c !== item);
    setPreparing((p) => [...p, item]);
    setCooke(updatedCooke);
  };

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <Header></Header>
      <Banner></Banner>
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <Cards recipe={recipe} handleClick={handleClick}></Cards>
        </div>
        <div className="col-span-5">
          <WantToCooke
            cooke={cooke}
            handleClickShow={handleClickShow}
            preparing={preparing}
          ></WantToCooke>
        </div>
      </div>
    </>
  );
}

export default App;
