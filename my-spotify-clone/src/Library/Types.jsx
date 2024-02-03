import PropTypes from "prop-types";

function Types(props){
    return(
        <button className="listen-type">{props.name}</button>
    )
}

Types.defaultProps = {
    name: "Undefined"
}

Types.propTypes = {
    name: PropTypes.string
}

export default Types;