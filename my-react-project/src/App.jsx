import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Productltem from "./components/Productltem";

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "Hoàng Cao Huân",
      price: 200,
      image: "https://picsum.photos/200/200"
    },
    {
      id: 2,
      name: "Hoàng Cao Huân",
      price: 200,
      image: "https://picsum.photos/200/200"
    },
    {
      id: 3,
      name: "Hoàng Cao Huân",
      price: 200,
      image: "https://picsum.photos/200/200"
    }
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      excerpt:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
      slug: "/how-are-you",
      img: "http://picsum.com/200/200",
    },
    {
      id: 1,
      title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
      excerpt:
        "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
      slug: "/how-are-you",
      img: "http://picsum.com/200/200",
    },
  ]);
  const [post, setPost] = useState({
    id: 1,
    title: "A UX Case Study on Creating a Studious Environment for Students",
    date: "Posted on 27th January 2021",
    img: "http://picsum.com/200/200",
    description:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
  });

  const [status, setStatus] = useState(false);
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Header />
        <div style={{display: status ? "block" : "none"}}
          className="border-2 w-40 h-40 text-white"
        >
          Popup bật
        </div>
        <br />
        <button className="p-5 bg-red-500 mr-5" onClick={() => setStatus(true)}>Bật</button>
        <button className="p-5 bg-blue-500" onClick={() => setStatus(false)}>Tắt</button>
        <div className="m-5 text-center">
          <h2 className="font-bold text-2xl mb-5">Sản phẩm mới</h2>
          <div className="grid grid-cols-3 grap-8">

            {productList.map((product) => {
              console.log("product", product);
              return <Productltem key={product.id} product={product} />
            })}
          </div>
        </div>
        <Main />
        <Footer />
      </div>
    </>
  );


}

export default App
