import {getInput, InputData} from './input'
import {token} from './secret/tokenSecret'
import {getCommits, getCommitFiles} from './github'

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

main();


