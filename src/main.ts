import {getInput, InputData} from './input';

async function getData() {
  const response = await fetch('https://api.github.com/users/github');
  const data = await response.json();
  console.log(data);
  return data;
}

// getInput().then((data : InputData) => {
//   console.table(data);
// });



getData().then((data) => {
  console.table(data);
});


