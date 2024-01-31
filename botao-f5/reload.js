const btn = document.querySelector("#btn-1");

        function sayHello() {
            console.log("Hello!");
        }

        function sayWorld() {
            console.log("World");
        }

        function handleClick() {
            sayHello();
            sayWorld();
            location.reload();
        }

        btn.addEventListener("click", handleClick);