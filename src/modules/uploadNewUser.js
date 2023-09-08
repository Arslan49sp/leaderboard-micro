import scoresUrl from './helper.js';

const uploadNewUser = async (input) => {
  const resp = await fetch(scoresUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });
  return resp;
};

export default uploadNewUser;
