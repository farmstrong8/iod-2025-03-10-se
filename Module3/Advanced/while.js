const main = () => {
    i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }

    while (true) {
        console.log("Infinite loop");
        break; // This will prevent the infinite loop
    }
};

let tickId = setInterval(() => console.log("tick"), 2000);
setTimeout(() => clearInterval(tickId), 10 * 1000);

main();
