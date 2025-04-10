const main = () => {
    const degrees = 50;
    const weather = `it was ${degrees} degrees today`; //string interpolation

    const forcast = [
        { day: "Monday", temperature: 50 },
        { day: "Tuesday", temperature: 60 },
        { day: "Wednesday", temperature: 70 },
        { day: "Thursday", temperature: 80 },
        { day: "Friday", temperature: 90 },
    ];

    if (!forcast.length) {
        console.log("No forcast available");
    }

    // console.log(weather);
    // console.log(firstDay);

    const isChecked = true;

    console.log(isChecked);
    console.log(!isChecked);
    console.log(!!isChecked);

    console.log("string practice");
    const emptyString = "";
    console.log(Boolean(emptyString));
    console.log(!!emptyString);

    const notEmptyString = "hello";
    console.log(Boolean(notEmptyString));
    console.log(!!notEmptyString);

    console.log("number practice");
    console.log(Boolean(Infinity));
    console.log(Boolean(-Infinity));
    console.log(Boolean(0));

    console.log(
        NaN
            ? "NaN is true"
            : "NaN is false"
            ? "do something"
            : "do something else"
    ); // NaN is false
};

main();
