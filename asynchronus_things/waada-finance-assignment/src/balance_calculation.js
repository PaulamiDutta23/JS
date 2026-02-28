const parseData = (content) => content.split("\n").filter((row) => row);

const readFile = (filePath) =>
  Deno.readTextFile(filePath).then(parseData).catch((_) => []);

const formatRecord = (record) => {
  const [name, ...transactionFiles] = record.split(",");
  return { name, transactionFiles };
};

const formatContent = (amounts) => amounts.map(Number);

const getTransactions = (filePath) => readFile(filePath).then(formatContent);

const format = (name, transactionCount, balance) =>
  `${name},${transactionCount},${balance}`;

const aggregate = ({ name }, transactions) => {
  const amounts = transactions.flatMap((x) => x);
  const balance = amounts.reduce((total, amount) => total + amount, 0);
  return format(name, amounts.length, balance);
};

const processRecordOf = async (customer) => {
  const transactions = await Promise.all(
    customer.transactionFiles.map(getTransactions),
  );
  return aggregate(customer, transactions);
};

const writeToFile = (details) => {
  const detailsInString = details.join("\n");
  console.log(detailsInString);
  Deno.writeTextFile("./data/balance.csv", detailsInString);
};

const main = async () => {
  const customersData = await readFile("./data/small_data/customers.csv");
  const records = customersData.map(formatRecord);
  const summary = await Promise.all(records.map(processRecordOf));
  writeToFile(summary);
};

main();
