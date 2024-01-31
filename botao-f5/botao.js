const btn = document.querySelector("#btn-1");

function sayHello() {
    console.log("Hello! ");
}

function sayWorld() {
    console.log ("Word");
}

// Abordagen1
btn.addEventListener("click", sayHello);

btn.addEventListener("click", sayWorld);

// Abordagem2

const btn2 = document.querySelector("#btn-2");

btn2.addEventListener("click",  () => { 
    
    sayHello();

    sayWorld();

});

