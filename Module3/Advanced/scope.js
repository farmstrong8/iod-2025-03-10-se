const x = 10;

const main = () => {
    console.log(x);

    const y = 20;

    if (x === 10) {
        const z = 30;
        console.log(z);
    }

    console.log(z); // ReferenceError: z is not defined
};

console.log(y); // ReferenceError: y is not defined

main();
