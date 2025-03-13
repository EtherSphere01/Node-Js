const url = "https://open-weather13.p.rapidapi.com/city/bangladesh/EN";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "62a45f81c1mshee3f3227d0c5dc2p1a0decjsn0c1d8eee2594",
    "x-rapidapi-host": "open-weather13.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
} catch (error) {
  console.error(error);
}
