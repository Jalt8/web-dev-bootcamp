import PropTypes from 'prop-types';
import Property from "./Property";

function PropertyList({ properties }) {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'row',
        flexWrap: 'wrap'
    };

    const propertyStyle = {
        margin: '10px'
    };

    return (
        <div style={containerStyle}>
            {properties.map(p => (
                <div key={p.id} style={propertyStyle}>
                    <Property {...p} />
                </div>
            ))}
        </div>
    );
}

PropertyList.propTypes = {
    properties: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired
};

export default PropertyList;
