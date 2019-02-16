import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }
  
  async getResult() {
    const key = 'db52682a0f67e5d014ec7914be9bb523';
    try {
      const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
    } catch (err) {
      alert(err);
    }
  }
};
