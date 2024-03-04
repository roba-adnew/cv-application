import PropTypes from 'prop-types';

function HeaderDisplay({ headerData }) {
    return (
        <div>
            <h1 id='name'>{headerData['name']}</h1>
            <div id="headerInfo">
                {Object.keys(headerData).map(
                    field => 
                    {
                        return field !== 'name' &&
                        ((field === 'phone') || 
                        (field === 'address') ||
                        (field === 'email')) && 
                        <p 
                        key={field} 
                        id={field} >
                            {headerData[field]}
                        </p>
                    }
                )}
                {Object.keys(headerData).map(
                    field => 
                    {
                        return field !== 'name' &&
                        ((field === 'Github') || 
                        (field === 'LinkedIn')) && 
                        <a  
                        key={field}
                        href={headerData[field]}>
                            {field + ' '} 
                        </a>
                    }
                )}
            </div>
        </div>
    )
}

HeaderDisplay.propTypes = {
    headerData: PropTypes.object
};

export default HeaderDisplay