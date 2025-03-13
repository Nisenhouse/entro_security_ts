import * as readline from 'readline/promises';

type InputData = {
  owner: string;
  repo: string;
  token: string;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getInput() : Promise<InputData> {
  try {
      const owner = await rl.question('Enter owner\n');
      const repo = await rl.question('Enter repo\n');
      const token = await rl.question('Enter token\n');
      const result : InputData = {
        owner: owner,
        repo: repo,
        token: token
      };
      return result;
  } finally {
      rl.close();
  }
}

export {getInput, InputData};