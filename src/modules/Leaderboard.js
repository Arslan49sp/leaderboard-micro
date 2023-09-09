export default class Leaderboard {
  constructor() {
    this.scores = [];
  }

  sort() {
    this.scores.sort((a, b) => b.score - a.score);
  }
}
