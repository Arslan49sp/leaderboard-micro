import './style.css';

import Leaderboard from './modules/Leaderboard.js';
import leadboardCard from './modules/leadboardCard.js';
import addNewUser from './modules/addNewUser.js';
import getScore from './modules/fetchScores.js';

const leaderboard = new Leaderboard();

getScore().then((data) => {
  leaderboard.scores = data.result;
  leaderboard.sort();
  leadboardCard(leaderboard.scores);
});

const addButton = document.getElementById('submitUser');
addButton.addEventListener('click', (e) => {
  // Prevent from submitting form.
  e.preventDefault();
  addNewUser();
});

const refreshButton = document.getElementById('btnRefresh');
refreshButton.addEventListener('click', () => {
  getScore().then((data) => {
    leaderboard.scores = data.result;
    leaderboard.sort();
    leadboardCard(leaderboard.scores);
  });
});
