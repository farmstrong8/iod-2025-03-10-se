const main = () => {
    const mj = ["Michael", "Jordan"];
    const [mjFirst, mjLast] = mj; // destructure (unpack) array on right into separate variables on left

    console.log(mjFirst, mjLast); // Michael Jordan

    //better way to organize this

    const person = {
        firstName: "Michael",
        lastName: "Jordan",
    };

    const { firstName, lastName } = person; // destructure (unpack) object on right into separate variables on left

    console.log(firstName, lastName); // Michael Jordan
};

main();
