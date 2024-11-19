document.addEventListener("DOMContentLoaded", function () {
  const songs = [
    { cover_image: "https://christer.neocities.org/gave16.png", name: "1 More Hit", rating: 4.4 },
    { cover_image: "https://christer.neocities.org/gave16.png", name: "367", rating: 6.4 },
    { cover_image: "https://christer.neocities.org/gave16.png", name: "Acapulco", rating: 3.4 },
    { cover_image: "https://christer.neocities.org/gave16.png", name: "Across The Meadow", rating: 6.8 },
    { cover_image: "https://christer.neocities.org/gave16.png", name: "Across The Sea", rating: 8.7 },
    { cover_image: "https://christer.neocities.org/gave16.png", name: "Ain't Got Much Time", rating: 5.5 },
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
