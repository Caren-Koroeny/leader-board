import './style.css';
import { postScores, getScores } from '../modules/createGame.js';

const refreshButton = document.getElementById('refresh-btn');
const listCont = document.getElementById('listcont');
const form = document.getElementById('form');
const name = document.getElementById('userName');
const scores = document.getElementById('Score');

// GET Request
const update = async () => {
  const display = await getScores();
  listCont.innerHTML = '';
  display.forEach((element) => {
    const item = document.createElement('li');
    item.innerHTML = `
            ${element.user} : ${element.score}
        `;
    listCont.appendChild(item);
  });
};

refreshButton.addEventListener('click', update);

// POST REQUEST

form.addEventListener('submit', (e) => {
  const formData = {
    user: name.value,
    score: scores.value,
  };
  e.preventDefault();
  postScores(formData);
  name.value = '';
  scores.value = '';
});
