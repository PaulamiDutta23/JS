const main = () => {
  const inputString = Deno.readTextFileSync("./finalSrk.csv");
  const allQuestionsString = Deno.readTextFileSync("./src/questions.md");
  const input = inputString.match(/\".+\n\"/g);
  const allQuestions = allQuestionsString.match(/.+\n/g);
  console.log(input, allQuestions);
};

main();