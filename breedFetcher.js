// const request = require("request");
// const [, , breed] = process.argv;

// const breedUrl = breed.substring(0, 4);
// const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedUrl

// request(url, (error, response, body) => {
//   if (error) {
//     console.error('Failed to fetch data:', error);
//     return;
//   }

//   const data = JSON.parse(body);
//   if (data[0] == undefined) {
//     console.log("Breed not found")
//     return;
//   }
//   console.log(data[0].description);
// });

const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (error, response, body) => {
    if (error) {
      callback('Failed to fetch data: ' + error, null);
      return;
    }

    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback('Breed not found', null);
      return;
    }

    const description = data[0].description;
    callback(null, description);
  });
};

module.exports = { fetchBreedDescription };


