import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const apiKey = '95c33b9a';
    const movies = [
      "Iron Man", "The Incredible Hulk", "Iron Man 2", "Thor", "Captain America: The First Avenger",
      "Marvel’s The First Avengers", "Iron Man 3", "Thor: The Dark World", "Captain America: The Winter Soldier",
      "Guardians of the Galaxy", "Avengers: Age of Ultron", "Ant-Man", "Captain America: Civil War",
      "Doctor Strange", "Guardians of the Galaxy Vol. 2", "Spider-Man: Homecoming", "Thor: Ragnarok",
      "Black Panther", "Avengers: Infinity War", "Ant-Man and the Wasp", "Captain Marvel", "Avengers: Endgame",
      "Spider-Man: Far From Home", "Black Widow", "Shang-Chi and the Legend of the Ten Rings", "Eternals",
      "Spider-Man: No Way Home", "Doctor Strange in the Multiverse of Madness", "Thor: Love and Thunder",
      "Black Panther: Wakanda Forever", "Ant-Man and the Wasp: Quantumania", "Guardians of the Galaxy Vol. 3",
      "The Marvels", "Deadpool & Wolverine", "Captain America: Brave New World", "Thunderbolts",
      "The Fantastic Four: First Steps", "Avengers: Doomsday", "Avengers: Secret Wars"
    ];

    const gallery = document.getElementById('gallery');

    movies.forEach(movie => {
      fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movie)}`)
        .then(response => response.json())
        .then(data => {
          if (data.Response === "True") {
            const img = document.createElement('img');
            img.src = data.Poster;
            img.alt = movie;
            gallery.appendChild(img);
          }
        })
        .catch(error => console.error('Error fetching movie data:', error));
    });
  }, []);

  return (
    <div className="app">
      
      <h1>Marvel Movie Gallery</h1>
      <div id="gallery" className="gallery"></div>
    </div>
  )
}

export default App
