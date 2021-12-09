import PropTypes from 'prop-types';

export const ToolHeader = props => {
    return (
        <header>
            <img src="Tigger Logo 192.png" alt="Tigger Logo"  width={64} height={64}/>
            <h1>{props.headerText}</h1>
        </header>
    );
}

ToolHeader.defaultProps = {
    headerText: "The Tool",
}

ToolHeader.propTypes = {
    headerText: PropTypes.string.isRequired,
}