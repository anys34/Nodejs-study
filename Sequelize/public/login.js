document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  
  try {
    const response = await axios.post("/login", { username, password });
    const data = response.data;
    
    if (data === "success") {
      alert("로그인 성공");
      location.href = "/";
    } else {
      alert("로그인 실패");
    }
  } catch (err) {
    console.error("Error during login:", err);
    alert("로그인 요청 중 오류가 발생했습니다.");
  }
  
  e.target.username.value = "";
  e.target.password.value = "";
});
