const songs = [
  { cover_image: "cover1.jpg", name: "1 More Hit", rating: 4.4 },
  { cover_image: "cover2.jpg", name: "367", rating: 6.4 },
  { cover_image: "cover3.jpg", name: "Acapulco", rating: 3.4 },
  { cover_image: "cover4.jpg", name: "Across The Meadow", rating: 6.8 },
  { cover_image: "cover5.jpg", name: "Across The Sea", rating: 8.7 },
  { cover_image: "cover6.jpg", name: "Ain't Got Much Time", rating: 5.5 },
];

const tableBody = document.querySelector("#song-table tbody");

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

document.getElementById("search-bar").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filteredSongs = songs.filter(song =>
    song.name.toLowerCase().includes(query)
  );
  renderSongs(filteredSongs);
});

document.getElementById("sort-alpha").addEventListener("click", function () {
  const sortedSongs = [...songs].sort((a, b) => a.name.localeCompare(b.name));
  renderSongs(sortedSongs);
});

document.getElementById("sort-high").addEventListener("click", function () {
  const sortedSongs = [...songs].sort((a, b) => b.rating - a.rating);
  renderSongs(sortedSongs);
});

document.getElementById("sort-low").addEventListener("click", function () {
  const sortedSongs = [...songs].sort((a, b) => a.rating - b.rating);
  renderSongs(sortedSongs);
});

// Initial render
renderSongs(songs);
