import axios from 'axios';

async function getResults(query) {
  const key = 'db52682a0f67e5d014ec7914be9bb523';

  try {
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (err) {
    alert(err);
  }

}

getResults('tomato pasta');
