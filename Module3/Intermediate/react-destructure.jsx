/**
 * destructure props using the spread syntax
 */
const MyComponent = ({ name, address, ...props }) => {
    // age and occupation are destructured from props
    const { age, occupation } = props;

    return (
        <div>
            <h1>{name}</h1>
            <p>{address}</p>
        </div>
    );
};
