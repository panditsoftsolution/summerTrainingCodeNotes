import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";

const App = () => {
  const nav = ["Home", "skills", "Projects", "About", "Contact", "altufaltu"];
  let ispassed = false;

  function hello(){
    console.log("hello");
  };

  return (
    <>
      <Header navigation={nav} Hello={()=>hello()} />
      <Card>
        <h1>Hello</h1>
        <img src="#" />
        <p>i am a card</p>
        <button>Explore ...</button>
      </Card>
      <Card>
        <h1>bye</h1>
        <img src="#" />
        <p>i am a bye</p>
        <button>Explore again ...</button>
      </Card>
    </>
  );
};

export default App;
