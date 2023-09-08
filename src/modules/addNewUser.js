import { postNewScore } from "./fetchScores.js";
const addNewUser = () => {
  const nameInput = document.getElementById("name");
  const scoreInput = document.getElementById("score");
  const newUser = {
    user: nameInput.value,
    score: Number(scoreInput.value),
  };

  postNewScore(newUser).then((response) => {
    if (response.status === 201) {
      // if user updated successfully on the server.
      // Clearing the input fields.
      nameInput.value = "";
      scoreInput.value = "";
    }
  });
};

export default addNewUser;
