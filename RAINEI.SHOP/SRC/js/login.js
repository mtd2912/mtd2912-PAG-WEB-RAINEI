document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formLogin");
    const errorMsg = document.getElementById("loginError");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        try {
            const res = await fetch("https://fakestoreapi.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("usuario", username);

                window.location.href = "index.html";
            } else {
                errorMsg.classList.remove("oculto");
            }

        } catch (err) {
            errorMsg.classList.remove("oculto");
        }
    });
});
