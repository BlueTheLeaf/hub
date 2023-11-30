const formEl = document.querySelector("form")
const usernameEl = document.getElementById("username")
const passwordEl = document.getElementById("password")

formEl.addEventListener("submit", (event) => {
    event.preventDefault()

    const username = usernameEl.value
    const password = passwordEl.value

    const defaultUser = {
        username: "user1",
        password: "password1"
    }

    if (username !== defaultUser.username || password !== defaultUser.password) return

    window.location.replace("https://jsahdjasnduaci7yacinajkscjna8scnakj2n5kadskjnas87cnas-cklana.7ank18ajslm5kat.repl.co//")
})
