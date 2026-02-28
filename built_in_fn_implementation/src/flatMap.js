export const flatMap = (mapper, data) => {
  const mappedData = data.map(mapper);
  const flatMappedData = [];

  for (let i = 0; i < mappedData.length; i++) {
    if (Array.isArray(mappedData[i])) {
      for (let j = 0; j < mappedData[i].length; j++) {
        flatMappedData.push(mappedData[i][j]);
      }
    } else {
      flatMappedData.push(mappedData[i]);
    }
  }

  return flatMappedData;
};
