import Priceoption from "../price-opthion/priceoption";

 

function  priceoptions() {
  const  priceoptions = [
    {
      "id": 1,
       "name": "Basic Plan",
       "price": 19.99,
       "features": [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi",
        "No personal training",
      ],
    },
    {
      "id": 2,
       "name": "Standard Plan",
       "price": 39.99,
       "features": [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "1 personal training session per month",
        "Nutritional launce",
      ],
    },
    {
      "id": 3,
       "name": "Premium Plan",
       "price": 59.99,
       "features": [
        "24/7 gym access",
        "Locker room & shower facilities",
        "Unlimited group fitness classes",
        "4 personal training sessions per month",
        "Diet & meal planning support",
        "Sauna & steam room access",
      ],
    },
    {
      "id": 4,
       "name": "Elite Plan",
       "price": 89.99,
       "features": [
        "All Premium Plan benefits",
        "Unlimited personal training",
        "Private locker & towel service",
        "Advanced body composition analysis",
        "Priority booking for classes",
        "Free supplements & protein shakes",
      ],
    },
    {
      "id": 5,
       "name": "Day Pass",
       "price": 9.99,
       "features": [
        "One-day gym access",
        "Locker room access",
        "Group fitness class (if available)",
      ],
    },
    {
      "id": 6,
       "name": "Elite Plan",
       "price": 89.99,
       "features": [
        "All Premium Plan benefits",
        "Unlimited personal training",
        "Private locker & towel service",
        "Advanced body composition analysis",
        "Priority booking for classes",
        "Free supplements & protein shakes",
      ],
    },
    {
      "id": 7,
       "name": "Elite Plan",
       "price": 89.99,
       "features": [
        "All Premium Plan benefits",
        "Unlimited personal training",
        "Private locker & towel service",
        "Advanced body composition analysis",
        "Priority booking for classes",
        "Free supplements & protein shakes",
      ],
    },
    {
      "id": 8,
       "name": "Elite Plan",
       "price": 89.99,
       "features": [
        "All Premium Plan benefits",
        "Unlimited personal training",
        "Private locker & towel service",
        "Advanced body composition analysis",
        "Priority booking for classes",
        "Free supplements & protein shakes",
      ],
    },
    {
      "id": 9,
       "name": "Elite Plan",
       "price": 89.99,
       "features": [
        "All Premium Plan benefits",
        "Unlimited personal training",
        "Private locker & towel service",
        "Advanced body composition analysis",
        "Priority booking for classes",
        "Free supplements & protein shakes",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center"> best price in the town</h2>
     <div className="grid md:grid-cols-3   gap-6">
     {
priceoptions.map((option,inx) => <Priceoption key={inx} option={option}></Priceoption>)
      }
     </div>
    </div>
  );
}
 priceoptions.propTypes = {};
export default  priceoptions;
