import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import WantToCooke from "./components/WantToCooke/WantToCooke";
import { useEffect } from "react";


function App() {
const [recipe, setRecipe]= useState([]);

const [cooke, setCooke]= useState([])
  const handleClick = (item) => {
    setCooke(c => [...c, item])
  };

useEffect(()=>{
  fetch('./recipes.json')
  .then(res => res.json())
  .then(data=> setRecipe(data))
},[])

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <Cards recipe={recipe} handleClick={handleClick}></Cards>
        </div>
        <div className="col-span-5">
          <WantToCooke cooke={cooke}></WantToCooke>
        </div>
      </div>
    </>
  );
}

export default App;
