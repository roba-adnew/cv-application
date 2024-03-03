import PropTypes from 'prop-types';

export default function HeaderDisplay({ headerData }) {
    return (
        <div>
            {Object.keys(headerData).map(field => 
                <p key={field}>{headerData[field]}</p>
            )}
        </div>
    )
}

HeaderDisplay.propTypes = {headerData: PropTypes.object};
