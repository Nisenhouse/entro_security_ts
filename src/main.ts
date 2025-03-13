import {getInput, InputData} from './input';

async function main() {
  //const inputData = await getInput();
  const inputData = {
    owner: "Nisenhouse",
    repo: "entro_security",
    token: "xxxx"
  };
  console.table(inputData);
  const commits = await getCommits(inputData.owner, inputData.repo, inputData.token)
  console.log(commits);
}

function getRequestOpts(token: string) : RequestInit {
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${token}`
  }
  const opts: RequestInit = {
      headers
  };
  return opts;
}

async function getCommits(owner: string, repo: string, token: string) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits`,
    getRequestOpts(token));
  if (response.status != 200) {
    return null;
  }
  const data = await response.json();
  return data;
}

// getInput().then((data : InputData) => {
//   console.table(data);
// });



main();


