function toggleLyrics(songId) {
    const lyrics = document.getElementById(songId);
    if (lyrics) { 
      if (lyrics.style.display === 'none') {
        lyrics.style.display = 'block';
      } else {
        lyrics.style.display = 'none';
      }
    }
  }
  
  document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const songs = document.querySelectorAll('.song-title');
    let found = false;

    songs.forEach(song => {
        if (song.textContent.toLowerCase().includes(searchInput)) {
            song.scrollIntoView({ behavior: 'smooth' });
            song.classList.add('highlight');
            setTimeout(() => song.classList.remove('highlight'), 2000);
            found = true;
        }
    });

    if (!found) {
        alert('Música não encontrada.');
    }
});

function toggleLyrics(id) {
    const lyrics = document.getElementById(id);
    if (lyrics.style.display === 'none') {
        lyrics.style.display = 'block';
    } else {
        lyrics.style.display = 'none';
    }
}
