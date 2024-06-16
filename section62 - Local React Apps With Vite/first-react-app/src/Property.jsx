import PropTypes from 'prop-types';

function Property({ name, rating, price }) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>${price} a night</h3>
            <h4>{rating}⭐</h4>
        </div>
    );
}

Property.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
};

export default Property;
