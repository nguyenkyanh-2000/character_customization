import React, { useState, useEffect } from "react";
import Avatar from "./components/Avatar";
import ItemList from "./components/ItemList";
import "./css/App.css";

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [hair, setHair] = useState(0);
  const [facial_hair, setFacialHair] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [eyebrows, setEyebrows] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [hat, setHat] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [earrings, setEarrings] = useState(0);
  const [neckwear, setNeckwear] = useState(0);
  const total = {
    body: 17,
    eyes: 17,
    hat: 28,
    hair: 73,
    facial_hair: 17,
    mouth: 24,
    eyebrows: 15,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };

  const randomizeAvatar = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setHair(Math.floor(Math.random() * total.hair));
    setFacialHair(Math.floor(Math.random() * total.facial_hair));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setMouth(Math.floor(Math.random() * total.mouth));
    setHat(Math.floor(Math.random() * total.hat));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setEarrings(Math.floor(Math.random() * total.earrings));
    setNeckwear(Math.floor(Math.random() * total.neckwear));
  };

  useEffect(() => {
    randomizeAvatar();
  });

  return (
    <div className="App">
      <h1 className="title">Character Customization</h1>
      <div>
        <div className="avatar-container">
          <Avatar
            body={body}
            eyes={eyes}
            hair={hair}
            facial_hair={facial_hair}
            hat={hat}
            mouth={mouth}
            eyebrows={eyebrows}
            glasses={glasses}
            clothing1={clothing1}
            clothing2={clothing2}
            clothing3={clothing3}
            neckwear={neckwear}
            earrings={earrings}
          ></Avatar>
          <button className="btn-randomize" onClick={() => randomizeAvatar()}>
            Randomize
          </button>
        </div>
      </div>
      <div className="item-list-container">
        <h1>Hats</h1>
        <ItemList
          total={total.hat}
          part="accessories/hats"
          selectedPart={hat}
          setState={setHat}
        ></ItemList>
      </div>
      <div className="item-list-container">
        <h1>Hair</h1>
        <ItemList
          total={total.hair}
          part="hair"
          selectedPart={hair}
          setState={setHair}
        ></ItemList>
      </div>
      <div className="item-list-container">
        <h1>Eyebrows</h1>
        <ItemList
          total={total.eyebrows}
          part="eyebrows"
          selectedPart={eyebrows}
          setState={setEyebrows}
        ></ItemList>
      </div>
      <div className="item-list-container">
        <h1>Glasses</h1>
        <ItemList
          total={total.glasses}
          part="accessories/glasses"
          selectedPart={glasses}
          setState={setGlasses}
        ></ItemList>
      </div>
      <div className="item-list-container">
        <h1>Eyes</h1>
        <ItemList
          total={total.eyes}
          part="eyes"
          selectedPart={eyes}
          setState={setEyes}
        ></ItemList>
      </div>
      <div className="item-list-container">
        <h1>Facial Hair</h1>
        <ItemList
          total={total.facial_hair}
          part="facial_hair"
          selectedPart={facial_hair}
          setState={setFacialHair}
        ></ItemList>
      </div>
      <div className="item-list-container">
        <h1>Body</h1>
        <ItemList
          total={total.body}
          part="body"
          selectedPart={body}
          setState={setBody}
        ></ItemList>
      </div>
      <div className="item-list-container">
        <h1>Clothing (Layer 1)</h1>
        <ItemList
          total={total.clothing1}
          part="clothes/layer_1"
          selectedPart={clothing1}
          setState={setClothing1}
        ></ItemList>
      </div>
      <div className="item-list-container">
        <h1>Clothing (Layer 2)</h1>
        <ItemList
          total={total.clothing2}
          part="clothes/layer_2"
          selectedPart={clothing2}
          setState={setClothing2}
        ></ItemList>
      </div>
      <div className="item-list-container">
        <h1>Clothing (Layer 3)</h1>
        <ItemList
          total={total.clothing2}
          part="clothes/layer_3"
          selectedPart={clothing3}
          setState={setClothing3}
        ></ItemList>
      </div>
    </div>
  );
}

export default App;
