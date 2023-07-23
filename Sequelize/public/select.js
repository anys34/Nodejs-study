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
    const response = await axios.post("/signup", { username, password, carnum });
    const data = response.data;
    if (data === "fail") {
        alert("이미 등록된 차량번호입니다.");
        location.href = "/";
      }
  } catch (err) {
    console.error(err);
  }
  e.target.username.value = "";
  e.target.password.value = "";
  e.target.carnum.value = "";
});

document.getElementById("account-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const carnum = e.target.carnum.value;
    const account = e.target.account.value;
    try {
      const response = await axios.post("/account", { carnum, account });
      const data = response.data;
      if(data === "success") {
        alert("계좌 등록이 완료 되었습니다.");
      }
      else if(data === "fail") {
        alert("로그인을 해주시기 바랍니다.");
        location.href = "/login";
      }
    } catch (err) {
      console.error(err);
    }
    e.target.carnum.value = "";
    e.target.account.value = "";
});
