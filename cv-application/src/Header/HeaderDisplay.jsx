import PropTypes from 'prop-types';

function HeaderDisplay({ headerData }) {
    return (
        <div id="headerDisplay">
            <h1 id='name'>{headerData['name']}</h1>
            <div id="headerInfo">
                {Object.keys(headerData).map(
                    field =>
                        ((field === 'phone') ||
                            (field === 'address') ||
                            (field === 'email')) &&
                        <p
                            key={field}
                            id={field} >
                            &#183; {headerData[field]} &#183;
                        </p>
                )}
                {Object.keys(headerData).map(
                    field =>
                        ((field === 'Github') ||
                            (field === 'LinkedIn')) &&
                        <a
                            key={field}
                            href={headerData[field]}>
                            &#183; {field}  &#183;
                        </a>
                )}
            </div>
        </div>
    )
}

HeaderDisplay.propTypes = {
    headerData: PropTypes.object
};

export default HeaderDisplay