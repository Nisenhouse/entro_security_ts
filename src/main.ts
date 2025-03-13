import {getInput, InputData} from './input';
import {token} from './secret/tokenSecret'

async function main() {
  //const inputData = await getInput();
  const inputData = {
    owner: "Nisenhouse",
    repo: "entro_security",
    token: "xxxx"
  };
  if (token) {
    inputData.token = token;
  }
  await checkRepo(inputData.owner, inputData.repo, inputData.token);
}

async function checkRepo(owner : string, repo : string, token: string) {
  const commits = await getCommits(owner, repo, token);
  commits.forEach(async (commit) => {
    const url = commit.url;
    const files = await getCommitFiles(url, token);
    files.forEach((file) => {
      const patch = file.patch;
      /* TODO:*/
    });
  });
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
  return await response.json();
}

async function getCommitFiles(url: string, token: string) {
  const response = await fetch(url, getRequestOpts(token));
  if (response.status != 200) {
    return null;
  }
  return (await response.json()).files;
}

// getInput().then((data : InputData) => {
//   console.table(data);
// });



main();


