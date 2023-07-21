async function getCar() {
  try {
    const res = await axios.get("/car");
    const cars = res.data;
    console.log(cars + "입니다.");
  } catch (err) {
    console.error(err);
  }
}

document.getElementById("car-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const carnum = e.target.carnum.value;
  if (!carnum) {
    return alert("자동차 번호를 입력하세요");
  }

  try {
    await axios.post("/car", { carnum });
    getCar();
  } catch (err) {
    console.error(err);
  }
  e.target.carnum.value = "";
});
