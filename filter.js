// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const greater = ages.filter((num) => {
  return num > 18;
});

console.log(greater);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pair = ages1.filter((number) => {
  return number % 2 === 0;
});

console.log(pair);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lol = streamers.filter((game) => {
  return game.gameMorePlayed === "League of Legends";
});

console.log(lol);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.
const streamers1 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const nameU = streamers1.filter((streamer) => {
  return streamer.name.includes("u");
});

console.log(nameU);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.

const legends = streamers1.filter((games) => {
  if (games.gameMorePlayed.includes("Legends") && games.age > 35) {
    console.log(games.gameMorePlayed.toUpperCase());
  }
});
