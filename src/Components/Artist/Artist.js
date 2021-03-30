import React from "react"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function Artist() {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/artists")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setArtists(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Artists</h1>
      {artists.map((artist) => {
        return (
          <div key={artist.artist} className="artistCard">
            <Link to={`/artists/${artist._id}`} key={artist._id}>
              <img src={artist.photo} alt={`${artist.artist}`} />
              <h3>{artist.artist}</h3>
              <div className="microphoneIcon">
                <img
                  src="https://img.icons8.com/emoji/48/000000/microphone-emoji.png"
                  alt="microphone to like"
                />
                <p>{artist.likes.length}</p>
                <p>{artist._id}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Artist