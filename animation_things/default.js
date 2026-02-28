let i = 0;
const fID = setInterval(() => {
  console.log(i++);
  if (i === 3) {
    clearInterval(fID);
    i = -1;
    const sID = setInterval(() => {
      if (i === 2) {
        clearInterval(sID);
      }
      console.log(i++);
    }, 500);
  }
}, 500);
