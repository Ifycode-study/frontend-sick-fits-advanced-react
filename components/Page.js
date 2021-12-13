import PropTypes from 'prop-types';

// Another way to write props.children - destructuring
// Note children is an "in-built" prop

export default function Page({ children, cool }) {
    return (
        <div>
            <h2>Page component</h2>
            {children}
            <div>{cool}</div>
        </div>
    );
}

Page.propTypes = {
    cool: PropTypes.string,
    children: PropTypes.any
}

/*---------------------------------------------------------
Elements in <Page> in e.g. index.js has to be more than one. 
Otherwise, use:

children: PropTypes.node

OR

children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
])

OR

children: PropTypes.any
-----------------------------------------------------------*/