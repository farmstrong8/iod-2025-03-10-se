const main = () => {
    const products = [
        { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
        { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
        { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
        { id: 4, title: "Ladies Tee", price: 25.95, category: "Shirts" },
    ];

    console.log(products);

    // Get all of the shirts

    /**
     * We cannot use map here, because its function is to transform data
     * Map Object A to Object B
     */
    const shirtsWithMap = products.map((product) => {
        if (product.category === "Shirts") {
            return product;
        }
    });

    //const shirt = shirtsWithMap[1].title;

    console.log(shirtsWithMap);
    // console.log(shirt);

    const shirtsWithFilter = products.filter((product) => {
        return product.category === "Shirts";
    });

    console.log(shirtsWithFilter);

    // Map and filter
    const shirtTitlesWithMapAndFilter = products
        .filter((product) => {
            return product.category === "Shirts";
        })
        .map((product) => {
            return product.title;
        });

    console.log("Map and filter", shirtTitlesWithMapAndFilter);

    // const products = [
    //     { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
    //     { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
    //     { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
    //     { id: 4, title: "Ladies Tee", price: 25.95, category: "Shirts" },
    // ];

    // Reduce
    const shirtTitlesWithReduce = products.reduce((accumulator, product) => {
        if (product.category === "Shirts") {
            accumulator.push(product.title);
        }
        return accumulator;
    }, []);

    console.log("Reduce", shirtTitlesWithReduce);
};

main();
