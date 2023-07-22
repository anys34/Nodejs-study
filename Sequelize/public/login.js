document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    try {
      await axios.post("/login/process", { username, password });
    } catch (err) {
      console.error(err);
    }
    e.target.username.value = "";
    e.target.password.value = "";
  });