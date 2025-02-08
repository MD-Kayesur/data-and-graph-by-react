import PropTypes from 'prop-types'; // ES6
   

function Link({route, }) {







    return (
        <div>
            <li className="mr-4  hover:bg-red-400" key={route.id}>
                <a href= {route.path}>{route.name}</a>
                </li>
                
        </div>
    )
}

Link.propTypes ={
    route:PropTypes.object
}

export default Link
