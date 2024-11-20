document.addEventListener("DOMContentLoaded", function () {
  const songs = [
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/1/18/Weezer_Van_Weezer.png/300px-Weezer_Van_Weezer.png", name: "1 More Hit", rating: 4.4 },
    { cover_image: "https://preview.redd.it/5mknzp1odv061.png?width=640&crop=smart&auto=webp&s=25a726701911bb66de35889a5644e222283d9122", name: "367", rating: 6.4 },
    { cover_image: "https://lastfm.freetls.fastly.net/i/u/500x500/306f2f58ae40968629921bf42809c4c3.jpg", name: "Acapulco", rating: 3.4 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/7/77/Szns_spring_art.jpg/300px-Szns_spring_art.jpg", name: "Across The Meadow", rating: 6.8 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/f/ff/Weezer_Pinkerton.jpg/300px-Weezer_Pinkerton.jpg", name: "Across The Sea", rating: 8.7 },
    { cover_image: "https://preview.redd.it/5mknzp1odv061.png?width=640&crop=smart&auto=webp&s=25a726701911bb66de35889a5644e222283d9122", name: "Ain't Got Much Time", rating: 5.5 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/5/56/Weezer_EWBAITE.jpg/300px-Weezer_EWBAITE.jpg", name: "Ain't Got Nobody", rating: 7.4 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/8/8d/Weezer_OK_Human_album.jpg/300px-Weezer_OK_Human_album.jpg", name: "All My Favorite Songs", rating: 6 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/c/c6/Weezer_Hurley.jpg/300px-Weezer_Hurley.jpg", name: "All My Friends Are Insects", rating: 6.6 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/1/18/Weezer_Van_Weezer.png/300px-Weezer_Van_Weezer.png", name: "All the Good Ones", rating: 7.8 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/7/77/Szns_spring_art.jpg/300px-Szns_spring_art.jpg", name: "All This Love", rating: 6 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/8/8d/Weezer_OK_Human_album.jpg/300px-Weezer_OK_Human_album.jpg", name: "Aloo Gobi", rating: 8.1 },
    { cover_image: "https://preview.redd.it/67lv114wf3161.png?auto=webp&s=f3221f12197184be0cab3f2a4ef63c3f76394f9e", name: "Al's Bar", rating: 3.8 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/b/be/Weezer_Island_in_the_Sun_cover_CD.jpg/300px-Weezer_Island_in_the_Sun_cover_CD.jpg", name: "Always", rating: 5.5 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/f/f3/Weezer_Maladroit.jpg/300px-Weezer_Maladroit.jpg", name: "American Gigolo", rating: 4.3 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/a/a7/Weezer_The_Red_Album.jpg/300px-Weezer_The_Red_Album.jpg", name: "The Angel and the One", rating: 9.3 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/5/56/Weezer_EWBAITE.jpg/300px-Weezer_EWBAITE.jpg", name: "Anonymous", rating: 8.7 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/2/22/Theyeastmaster-cover.jpeg/300px-Theyeastmaster-cover.jpeg", name: "The Answer Man", rating: 5.9 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/5/57/Weezer_Pacific_Daydream.png/300px-Weezer_Pacific_Daydream.png", name: "Any Friend of Diane's", rating: 7.2 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/a/a7/Weezer_The_Red_Album.jpg/300px-Weezer_The_Red_Album.jpg", name: "Automatic", rating: 6.7 },
    { cover_image: "https://www.weezerpedia.com/w/images/thumb/9/9b/Death_to_false_metal.png/300px-Death_to_false_metal.png", name: "Autopilot", rating: 5.2 },
    { cover_image: "https://preview.redd.it/rb5hzewurxz61.png?auto=webp&s=41698e1b94f48da8d0b1bc5df410949af2bcb516", name: "Average Person", rating: 5.3 },
    { cover_image: "IMAGEGOESHERE", name: "COMING SOON", rating: 0.0 },
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
      sortedSongs.sort((a, b) => a.rating - b.ratings);
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
