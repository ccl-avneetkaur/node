setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

const names = ["avneet", "Anahat", "Baaz"];

const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = {
      longitude: 0,
      latitude: 0,
    };

    callback(data);
  }, 2000);
};

geoCode("Philadelphia", (data) => {
  console.log(data);
});

const sum = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;
    callback(sum);
  }, 2000);
};

sum(1, 4, (sum) => {
  console.log(sum);
});
