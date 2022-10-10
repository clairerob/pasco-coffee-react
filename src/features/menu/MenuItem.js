const MenuItem = ({item}) => {
    const { drink, description, price } = item;
    return (
        <>
        <h5>{drink.toLowerCase()}</h5>
        <p><small>{description.toLowerCase()}</small>
        <br/>
        <strong>${price}</strong>
        </p>
        </>
    )
};

export default MenuItem;