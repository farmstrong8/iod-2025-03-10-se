const main = () => {
    // console.log(user.name);
    // console.log(user.location.lat);

    const numbers = [1, 2, 3, 4, 5]; // array of numbers

    //iterate over the array

    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index]); // log each number to the console
    }

    //for each loop
    console.log("for each loop");
    for (const number of numbers) {
        console.log(number); // log each number to the console
    }

    //forEach
    console.log("forEach loop");
    numbers.forEach((number, index) => {
        console.log(number, index); // log each number to the console
    });

    // shallow copies

    const age = { age: 20 }; // object with age property
    const user = { name: "Elliot", age: 27 };

    const userClone = { ...user }; // shallow copy using spread operator

    console.log(userClone); // log the cloned object to the console

    const userClone2 = { ...user, age: 30 }; // shallow copy with modified age property

    console.log(userClone2); // log the cloned object with modified property to the console

    const userClone3 = { ...user, ...age };

    console.log("userClone3", userClone3); // log the cloned object with modified property to the console

    // numbers

    const laterNumbers = [6, 7, 8, 9, 10]; // array of numbers

    const allNumbers = [...numbers, ...laterNumbers]; // concatenate two arrays using spread operator

    console.log(allNumbers); // log the concatenated array to the console

    const testUser = {
        // user object contained within curly braces
        name: "joe", // string property with key 'name' and value 'joe'
        age: 20, // numeric property with key 'age' and value 20
        hasDog: true, // multi-word property key 'has a dog' with boolean value true
        location: {
            lat: 34.0522, // nested object with latitude property
            long: -118.2437, // nested object with longitude property
        },
    };

    // create the ability to show a user on a map

    /**
     * Using a map package and it has the input, and function named showUserOnMap
     *
     * @param {number} lat - The latitude of the location.
     * @param {number} long - The longitude of the location.
     * @param {string} name - The name of the user.
     * @param {number} age - The age of the user.
     */

    const showUserOnMap = ({ name, lat, long }) => {
        console.log(`Showing ${name} on map at ${lat}, ${long}`);
    };

    const input = {
        ...testUser.location,
        name: testUser.name,
        age: testUser.age,
    };

    const customerOne = {
        id: 1,
        name: "Elliot",
    };

    const customerTwo = {
        id: 2,
        name: "Joe",
    };

    const apiCallOne = [customerOne, customerTwo]; // array of customer objects

    const directorOne = {
        id: 1,
        name: "Test",
    };

    const directorTwo = {
        id: 2,
        name: "Test",
    };

    const apiCallTwo = [directorOne, directorTwo]; // array of director objects

    // create an array of all the ids of all the users

    const concatenatedArray = apiCallOne.concat(apiCallTwo); // concatenate two arrays

    const allIds = [...apiCallOne, ...apiCallTwo].map((user) => user.id); // concatenate two arrays and map to get ids

    const customerIds = apiCallOne.map((customer) => customer.id); // map to get ids from customer array
    const directorIds = apiCallTwo.map((director) => director.id); // map to get ids from director array

    const allIds2 = [...customerIds, ...directorIds]; // concatenate two arrays of ids
};

main();
