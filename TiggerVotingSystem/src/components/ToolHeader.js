import PropTypes from 'prop-types';

export const ToolHeader = props => {
    return (
        <header>
            <img src="Tigger Logo 192.png" alt="Tigger Logo"  width={64} height={64}/>
            <h1>{props.headerText}</h1>
            <p>{props.message}</p>
        </header>
    );
}

ToolHeader.defaultProps = {
    headerText: "Tiger Voting Tool",
    message: "Life is not about how fast you run on how high you climb but how well you bounce",
}

ToolHeader.propTypes = {
    headerText: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}