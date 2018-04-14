(function initialize(){
    const greeting = buildGreeting();
    displayGreeting(greeting);
    document.querySelector("#name-form")
        .addEventListener("submit", nameFormHandler);
})();

function nameFormHandler(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    localStorage.setItem("name", formData.get("fart"));
    displayGreeting(buildGreeting());
    event.target.reset();
}

function displayGreeting(greeting){
    document.querySelector("#name-form p").textContent = greeting;
}

function buildGreeting(){
    let greeting = "Hi!";
    if (localStorage.getItem("name")){
        greeting = `Hi ${localStorage.getItem("name")}!`;
    }
    return greeting;
}
