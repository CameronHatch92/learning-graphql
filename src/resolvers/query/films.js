const axios = require('axios');

module.exports = async (root, args) => await axios
  .get(`https://swapi.co/api/films`)
  .then(response => {
    let num = Math.min(response.data.results.length, args.first);
    return response.data.results.filter((film, index) => index < num);
  });