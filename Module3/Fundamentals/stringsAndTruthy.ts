const test = () => {
    const forcast = [
        { day: "Monday", temperature: 50 },
        { day: "Tuesday", temperature: 60 },
        { day: "Wednesday", temperature: 70 },
        { day: "Thursday", temperature: 80 },
        { day: "Friday", temperature: 90 },
    ];

    const firstDay = forcast[0].day;

    const isChecked = true;

    console.log(isChecked);
    console.log(!isChecked);
};

test();
