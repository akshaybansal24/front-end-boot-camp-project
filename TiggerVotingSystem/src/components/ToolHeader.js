import PropTypes from 'prop-types';

export const ToolHeader = props => {
    return (
        <header>
            <img className="tool-header" src="Tigger Logo 192.png" alt="Tigger Logo"  width={64} height={64}/>
            <h1 className="header-text">{props.headerText}</h1>
            <p>{props.message}</p>
        </header>
    );
}

ToolHeader.defaultProps = {
    headerText: "Tiger Voting Tool",
    message: "Life is not about how fast you run or how high you climb, but how well you bounce!",
}

ToolHeader.propTypes = {
    headerText: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}