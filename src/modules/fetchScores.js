import scoresUrl from './helper.js';

const getScore = async () => {
  const resp = await fetch(scoresUrl, { method: 'GET' });
  return resp.json();
};

export default getScore;