onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const apiKey = '73a93c37'; // Your OMDb API key
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
        console.log(data); // Log the data to verify
        if (data.Response === "True") {
          const img = document.createElement('img');
          img.src = data.Poster;
          img.alt = movie;
          gallery.appendChild(img);
        }
      })
      .catch(error => console.error('Error fetching movie data:', error));
  });
};

function showMovieList() {
    window.location.href = 'marvel-list.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const movieImage = document.querySelector('img[alt="Movie Image"]');
    movieImage.addEventListener('click', () => {
        const buttonContainer = document.createElement('div');
        const seeListButton = document.createElement('button');

        seeListButton.textContent = 'See The List';
        seeListButton.style.padding = '10px 20px';
        seeListButton.style.fontSize = '16px';
        seeListButton.style.cursor = 'pointer';
        seeListButton.style.backgroundColor = '#ff69b4';
        seeListButton.style.color = 'white';
        seeListButton.style.border = 'none';
        seeListButton.style.borderRadius = '5px';
        seeListButton.style.marginTop = '20px';
        seeListButton.style.position = 'absolute';
        seeListButton.style.zIndex = '3000'; // Ensure it's on top

        seeListButton.addEventListener('click', showMovieList);

        buttonContainer.appendChild(seeListButton);
        document.body.appendChild(buttonContainer);
    });
});
