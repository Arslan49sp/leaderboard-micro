const leadboardCard = (array) => {
  function loop(data) {
    return `
          <tr>
            <td>${data.user}</td>
            <td>${data.score}</td>
          </tr>
        `;
  }

  const table = document.getElementById('tableBody');

  table.innerHTML = array.map((data) => loop(data)).join('');
};

export default leadboardCard;
