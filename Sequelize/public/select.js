document.getElementById("car-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const carnum = e.target.carnum.value;
  if (!carnum) {
    return alert("자동차 번호를 입력하세요");
  }
  try {
    await axios.post("/", { carnum });
  } catch (err) {
    console.error(err);
  }
  e.target.carnum.value = "";
});
