import "./App.css";
import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
import NewHeader from "./Components/Header/NewHeader";
import Store from "./Components/Store/Store";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
function App() {
  return (
    <>
      {/* <Header></Header> */}
      <NewHeader></NewHeader>
      <Store products={productsArr}></Store>
      <Footer></Footer>
    </>
  );
}

export default App;
