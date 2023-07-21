document.getElementById("car-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const carnum = e.target.carnum.value;

  try {
    await axios.post("/car", { carnum });
  } catch (err) {
    console.error(err);
  }
  e.target.carnum.value = "";
});

document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  const carnum = e.target.carnum.value;
  try {
    await axios.post("/signup", { username, password, carnum });
  } catch (err) {
    console.error(err);
  }
  e.target.username.value = "";
  e.target.password.value = "";
  e.target.carnum.value = "";
});
