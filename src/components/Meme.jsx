import { useState } from "react";
import memeData from "../memeData";

function Meme() {
  const [memeObj, setMemeObj] = useState({
    topText: "topText",
    bottomText: "bottomText",
    url: "https://i.imgflip.com/30b1gx.jpg",
    name: "Drake Hotline Bling",
  });

  function getMemeImage(e) {
    e.preventDefault();
    const memeArray = memeData.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArray.length);
    const memeName = memeArray[randomIndex].name;
    const memeUrl = memeArray[randomIndex].url;
    setMemeObj((prev) => ({ ...prev, url: memeUrl, name: memeName }));
  }

  return (
    <main>
      <form className="meme--container">
        <label>
          Top Text
          <input type="text" placeholder="Shut up" />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="And take my money" />
        </label>

        <button className="meme--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </form>
      <img
        className="meme--img"
        src={memeObj.url}
        alt={`meme - ${memeObj.name}`}
      />
    </main>
  );
}
export default Meme;
