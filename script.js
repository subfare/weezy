document.addEventListener("DOMContentLoaded", function () {
  const songs = [
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/1/18/Weezer_Van_Weezer.png/300px-Weezer_Van_Weezer.png", name: "1 More Hit", rating: 4.4 },
    { cover_image: "https://preview.redd.it/5mknzp1odv061.png?width=640&crop=smart&auto=webp&s=25a726701911bb66de35889a5644e222283d9122", name: "367", rating: 6.4 },
    { cover_image: "https://lastfm.freetls.fastly.net/i/u/500x500/306f2f58ae40968629921bf42809c4c3.jpg", name: "Acapulco", rating: 3.4 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/7/77/Szns_spring_art.jpg/300px-Szns_spring_art.jpg", name: "Across The Meadow", rating: 6.8 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/f/ff/Weezer_Pinkerton.jpg/300px-Weezer_Pinkerton.jpg", name: "Across The Sea", rating: 8.7 },
    { cover_image: "https://preview.redd.it/5mknzp1odv061.png?width=640&crop=smart&auto=webp&s=25a726701911bb66de35889a5644e222283d9122", name: "Ain't Got Much Time", rating: 5.5 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/5/56/Weezer_EWBAITE.jpg/300px-Weezer_EWBAITE.jpg", name: "Ain't Got Nobody", rating: 7.4 },
  ];

  const tableBody = document.querySelector("#song-table tbody");
  const sortOptions = document.getElementById("sort-options");

  function renderSongs(songList) {
    tableBody.innerHTML = ""; // Clear existing rows
    songList.forEach(song => {
      const row = `
        <tr>
          <td><img src="${song.cover_image}" alt="${song.name} Cover"></td>
          <td>${song.name}</td>
          <td>${song.rating}/10</td>
        </tr>
      `;
      tableBody.insertAdjacentHTML("beforeend", row);
    });
  }

  function sortSongs(criteria) {
    let sortedSongs = [...songs];
    if (criteria === "alphabetical") {
      sortedSongs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "high") {
      sortedSongs.sort((a, b) => b.rating - a.rating);
    } else if (criteria === "low") {
      sortedSongs.sort((a, b) => a.rating - b.rating);
    }
    renderSongs(sortedSongs);
  }

  // Event listeners
  sortOptions.addEventListener("change", function () {
    sortSongs(this.value);
  });

  document.getElementById("search-bar").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filteredSongs = songs.filter(song =>
      song.name.toLowerCase().includes(query)
    );
    renderSongs(filteredSongs);
  });

  // Initial render
  renderSongs(songs);
});
