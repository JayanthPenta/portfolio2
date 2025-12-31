
const moods = {
  happy: {
    color: '#ffe066',
    quote: "Smile! It's a beautiful day 😊",
    emoji: '😊',
    videoId: 'ZbZSe6N_BXs'
  },
  sad: {
    color: '#4a4e69',
    quote: "It's okay to feel blue sometimes 💙",
    emoji: '😢',
    videoId: 'RgKAFK5djSk'
  },
  chill: {
    color: '#6a0572',
    quote: "Just relax and vibe 🌴",
    emoji: '😎',
    videoId: '5qap5aO4i9A'
  },
  angry: {
    color: '#ff4b5c',
    quote: "Let the music calm your fire 🔥",
    emoji: '😠',
    videoId: 'hLQl3WQQoQ0'
  }
};

const moodButtons = document.querySelectorAll('.mood');
const quote = document.getElementById('quote');
const player = document.getElementById('musicPlayer');
const emojiRain = document.getElementById('emojiRain');
const nameInput = document.getElementById('nameInput');
const startBtn = document.getElementById('startBtn');
const mainContent = document.getElementById('mainContent');
const moodScoreEl = document.getElementById('moodScore');

let username = 'User';
let moodCounts = JSON.parse(localStorage.getItem('moodCounts')) || {
  happy: 0, sad: 0, chill: 0, angry: 0
};

function updateMoodScore() {
  const maxMood = Object.entries(moodCounts).reduce((a, b) => (a[1] > b[1] ? a : b));
  moodScoreEl.textContent = `${username}, you’ve been mostly "${maxMood[0]}" (${maxMood[1]} times) ${moods[maxMood[0]].emoji}`;
}

// Start button: set username & show content
startBtn.addEventListener('click', () => {
  if (nameInput.value.trim()) {
    username = nameInput.value.trim();
  }
  mainContent.style.display = 'block';
  nameInput.style.display = 'none';
  startBtn.style.display = 'none';
  updateMoodScore();
  document.body.style.background = '#222'; // Default background before mood selection
});

// Mood selection logic
moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.dataset.mood;
    const { color, quote: moodQuote, emoji, videoId } = moods[mood];

    document.body.style.background = color;
    quote.textContent = `Hey ${username}, your mood is ${mood.charAt(0).toUpperCase() + mood.slice(1)} ${emoji}`;
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    // Save mood count
    moodCounts[mood]++;
    localStorage.setItem('moodCounts', JSON.stringify(moodCounts));
    updateMoodScore();

    // Emoji Rain
    emojiRain.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const emojiEl = document.createElement('div');
      emojiEl.classList.add('emoji');
      emojiEl.textContent = emoji;
      emojiEl.style.left = Math.random() * 100 + 'vw';
      emojiEl.style.animationDuration = 2 + Math.random() * 3 + 's';
      emojiRain.appendChild(emojiEl);
    }
  });
});

updateMoodScore(); // just in case someone already has local data
