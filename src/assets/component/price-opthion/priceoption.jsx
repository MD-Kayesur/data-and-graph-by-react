import PropTypes from "prop-types";
import Feature from "../feature/feature";

function Priceoption({ option }) {
//   console.log(option);
  const { name, price, features  } = option;
console.log(features);

  return (
    <div className="text-center mt-4 flex flex-col  rounded-2xl bg-blue-300  p-4">
      <div className="my-3"> 
        <h2 className="text-5xl font-bold">{price}/mon</h2>
        <h1 className="text-3xl  font-bold "> {name} </h1>
      
      </div>
<div className="flex-grow">
     {
      features?.map((feature,inx) => <Feature key={inx} feature={feature}></Feature>  )
      }
</div>

<button className="text-2xl my-3 bg-green-400 w-full rounded-2xl py-2 text-white hover:bg-green-700 px-4">Buy now</button>
    </div>
  );
}
Priceoption.propTypes = {
  option: PropTypes.object,
};
export default Priceoption;
