

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
  const data = await getFromUrl(url, token);
  return data ? data.files : null;
}

async function getFromUrl(url: string, token: string) {
  const response = await fetch(url, getRequestOpts(token));
  if (response.status != 200) {
    return null;
  }
  return await response.json();
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

export {getCommits, getCommitFiles};