const request = require("request");
const [, , breed] = process.argv;

const breedUrl = breed.substring(0, 4);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedUrl

request(url, (error, response, body) => {
  if (error) {
    console.error('Failed to fetch data:', error);
    return;
  }

  const data = JSON.parse(body);
  if (data[0] == undefined) {
    console.log("Breed not found")
    return;
  }
  console.log(data[0].description);
});

