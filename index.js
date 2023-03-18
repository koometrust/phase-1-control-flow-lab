function scuberGreetingForFeet(feet) {
  let response;
  if (feet <= 400) {
    response = 'This one is on me!';
  } else if (feet > 400 && feet <= 2500) { // Fixed the condition to be less than or equal to 2500
    response = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    response = 'No can do.';
  }
  return response;
}
function ternaryCheckCity(city){
  return (city === "NYC") ? "Ok, sounds good." : "No go."; // Used ternary operator to check if city is "NYC"
}
function switchOnCharmFromTip(tipAmount){
  switch(tipAmount) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}