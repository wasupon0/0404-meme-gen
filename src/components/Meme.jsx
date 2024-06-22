import { useEffect, useState } from "react";

function Meme() {
  const [memeObj, setMemeObj] = useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/30b1gx.jpg",
    name: "Drake Hotline Bling",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const memeData = await res.json();
      setAllMemes(memeData.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage(e) {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const memeName = allMemes[randomIndex].name;
    const memeUrl = allMemes[randomIndex].url;
    setMemeObj((prev) => ({
      ...prev,
      url: memeUrl,
      name: memeName,
      topText: "",
      bottomText: "",
    }));
  }

  function handleChange(event) {
    const { name, type, value } = event.target;
    setMemeObj((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <main>
      <form className="form">
        <label>
          Top Text
          <input
            type="text"
            name="topText"
            placeholder="topText"
            value={memeObj.topText}
            onChange={handleChange}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            name="bottomText"
            placeholder="bottomText"
            value={memeObj.bottomText}
            onChange={handleChange}
          />
        </label>

        <button className="meme--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </form>

      <div className="meme">
        <img
          className="meme--img"
          src={memeObj.url}
          alt={`meme - ${memeObj.name}`}
        />
        <h2 className="meme--text top">{memeObj.topText}</h2>
        <h2 className="meme--text bottom">{memeObj.bottomText}</h2>
      </div>
    </main>
  );
}
export default Meme;
