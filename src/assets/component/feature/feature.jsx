 import PropTypes from "prop-types"

function Feature({feature}) {
    console.log(feature);
    
    return (
        <div className="text-left pl-3">
             <p>  {feature} </p>
            
        </div>
    )
}
Feature.propTypes={
    Feature:PropTypes.string
}
export default Feature
