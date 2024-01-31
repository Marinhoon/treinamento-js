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
            location.reload(true);
        }

        function handleKeyPress(event) {
            if (event.ctrlKey && event.key === "F5") {
                handleClick();
            }
        }

        btn.addEventListener("click", handleClick);
        document.addEventListener("keydown", handleKeyPress);