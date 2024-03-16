import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import WantToCooke from "./components/WantToCooke/WantToCooke";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <Cards></Cards>
        </div>
        <div className="col-span-5">
          <WantToCooke></WantToCooke>
        </div>
      </div>
    </>
  );
}

export default App;
