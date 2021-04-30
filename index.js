function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue >= 2000 && someValue < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
  console.log(scuberGreetingForFeet(2501));
} 

function ternaryCheckCity(someCity){
  return (someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}
ternaryCheckCity('NYC');



function switchOnCharmFromTip(order){
  let response;
  switch (order) {
    case 'generous':
       response ='Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    case 'thanks for everything':
      response = 'Bye.'
      break;
  }
  return response;
}