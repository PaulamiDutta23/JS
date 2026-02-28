const randomNumber = () => Math.floor(Math.random() * 100);

const main = async () => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomNumber()}`,
  );

  const character = await res.json();
  const name = prompt("Guess the character name: ");
  console.log(
    `Actual character name ${character.name}, you have guessed: ${name}`,
  );
};

main();
