function a() {
  console.log(this);
  return () => {
    console.log(this);
  }
}

const something = function () {
  console.log(this);
  return [1,2,3].map(function() {
    console.log(this);
  })
};

a();
a.call("used call method to call this function");
something.call([7,8,9]);