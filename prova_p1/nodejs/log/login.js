async function getUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("senha").value;

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      window.location.href = "http://127.0.0.1:5000";
    } else {
      console.error("Erro na solicitação:", response.status);
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}

document.getElementById("botao").addEventListener("click", function (event) {
  event.preventDefault();
  getUser();
  return false;
});
