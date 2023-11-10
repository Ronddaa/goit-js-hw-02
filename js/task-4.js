function getShippingCost(country) {
  let message;
  // Change code below this line
  
  const China = 100;
  const Chile = 250;
  const Australia = 170;
  const Jamaica = 120;
  
  switch (country) {
    case 'China' :
      message = `Shipping to ${country} will cost ${China} credits`;
      break;
      case 'Chile' :
      message = `Shipping to ${country} will cost ${Chile} credits`;
      break;
      case 'Australia' :
      message = `Shipping to ${country} will cost ${Australia} credits`;
      break;
      case 'Jamaica' :
      message = `Shipping to ${country} will cost ${Jamaica} credits`;
      break;
    default :
      message = "Sorry, there is no delivery to your country";
  }
  // Change code above this line
  return message;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"