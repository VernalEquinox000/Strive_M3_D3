
    const headers = {
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
    }

    function returnCard(songInfo) {
      // songInfo represents the info for the current song
      // creating the wrapper div
      return `
          <div class="col text-center" id=${songInfo.id}>
            <a href="/album_page.html?id=${songInfo.album.id}">
              <img class="img-fluid" src=${
                songInfo.album.cover_medium
              } alt="1" />
            </a>
            <p>
              <a href="/album_page.html?id=${songInfo.album.id}">
                Album: "${
                  songInfo.album.title.length < 16
                    ? `${songInfo.album.title}`
                    : `${songInfo.album.title.substring(0, 16)}...`
                }"<br>
              </a>
              <a href="/artist_page.html?id=${songInfo.artist.id}">
                Artist: ${songInfo.artist.name}
              </a>
            </p>
          </div>`;
    }

    let eminemTracks = [];
    let metallicaTracks = [];
    let behemothTracks = [];

    let found = []

    const createCards = function () {
      const btn = document.getElementById("fetch-button");

      document.getElementById("eminem").classList.remove('d-none')
      document.getElementById("metallica").classList.remove("d-none");
      document.getElementById("behemoth").classList.remove("d-none");
      document
        .getElementById("count-unique-button")
        .classList.remove("d-none");

      btn.remove();

      const eminemDiv = document.getElementById("eminemSection");

      eminemTracks.forEach(eminemTrack => {
        eminemDiv.innerHTML += returnCard(eminemTrack);
      });

      const metallicaDiv = document.getElementById("metallicaSection");

      metallicaTracks.forEach(metallicaTrack => {
        metallicaDiv.innerHTML += returnCard(metallicaTrack);
      })

      const behemothDiv = document.getElementById("behemothSection");

      behemothTracks.forEach(behemothTrack => {
        behemothDiv.innerHTML += returnCard(behemothTrack)
      })
      // ALTERNATIVE VERSION
      // for (let i = 0; i < eminemTracks.length; i++) {
      //   eminemDiv.innerHTML += returnCard(eminemTracks[i]);
      // }

      // for (let i = 0; i < metallicaTracks.length; i++) {
      //   metallicaDiv.innerHTML += returnCard(metallicaTracks[i]);
      // }
      // for (let i = 0; i < behemothTracks.length; i++) {
      //   behemothDiv.innerHTML += returnCard(behemothTracks[i]);
      // }
    };

    const search = function () {
      const searchQuery = document.getElementById("searchField").value
      fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`, {
          method: "GET",
          headers
        })
        .then(response => response.json())
        .then(data => {
          const searchSection = document.getElementById("searchSection");
          searchSection.innerHTML = ''
          found = []

          found = data.data
          if (found.length > 0) {

            document.getElementById("found").classList.remove('d-none')

            found.forEach(track => {
              searchSection.innerHTML += returnCard(track);
            });
          }
        })
    }


    const countUniqueAlbums = function () {

      // const allTracks = eminemTracks.concat(metallicaTracks, behemothTracks)
      // const uniqueAlbums = []
      // console.log(allTracks)

      // for (let i = 0; i < allAlbums.length; i++) {
      //   if (
      //     uniqueAlbums.findIndex(
      //       (a) => a.album.id === allAlbums[i].album.id
      //     ) === -1
      //   ) {
      //     uniqueAlbums.push(allAlbums[i]);
      //   }
      // }

      const uniqueAlbumCount = eminemTracks.concat(metallicaTracks, behemothTracks).map(track => track.album
          .title)
        .filter((
            albumId, i, array) => array.indexOf(
            albumId) ===
          i)
      // .reduce((sum, elem) => sum + 1, 0) // Just an example...better use .length :)
      console.log(uniqueAlbumCount)

      alert(`${uniqueAlbumCount.length} unique albums`);
    }


    window.onload = function () {
      // fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
      //     method: "GET",
      //     headers,
      //   })
      //   .then(response => {
      //     if (response.ok) {
      //       return response.json();
      //     }
      //   })
      //   .then( artists => 
      //     eminemTracks = artists.data.slice(0, 8);
      //   )
      //   .catch( error =>
      //     console.log(error));

      // fetch(
      //     "https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
      //       method: "GET",
      //       headers,
      //     }
      //   )
      //   .then(response => {
      //     if (response.ok) {
      //       return response.json();
      //     }
      //   })
      //   .then( artists => 
      //     metallicaTracks = artists.data.slice(0, 8);
      //   )
      //   .catch( error =>
      //     console.log(error));

      // fetch(
      //     "https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
      //       method: "GET",
      //       headers,
      //     }
      //   )
      //   .then(response => {
      //     if (response.ok) {
      //       return response.json();
      //     }
      //   })
      //   .then( artists =>
      //     behemothTracks = artists.data.slice(0, 8))
      //   .catch(error =>  console.log(error));

      // ALTERNATIVE WITH PROMISE ALL
      const fetchEminem = fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
          method: "GET",
          headers,
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })

      const fetchMetallica = fetch(
          "https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
            method: "GET",
            headers,
          }
        )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })

      const fetchBehemoth = fetch(
          "https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
            method: "GET",
            headers,
          }
        )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })


      Promise.all([fetchEminem, fetchMetallica, fetchBehemoth]).then(response => {
        console.log(response)
        eminemTracks = response[0].data
        metallicaTracks = response[1].data
        behemothTracks = response[2].data
      }).catch(err => console.log(err))
    };
  