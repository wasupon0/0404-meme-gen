import { useState } from "react";
import memeData from "../memeData";

function Meme() {
  const [memeUrl, setMemeUrl] = useState("");
  const memeArray = memeData.data.memes;
  const { name: memeName } = memeArray;

  function getMemeImage(e) {
    e.preventDefault();
    setMemeUrl(memeArray[Math.floor(Math.random() * memeArray.length)].url);
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
      <img className="meme--img" src={memeUrl} alt={`meme - ${memeName}`} />
    </main>
  );
}
export default Meme;
