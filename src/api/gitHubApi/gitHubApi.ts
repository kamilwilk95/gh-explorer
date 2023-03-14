import { Octokit } from "octokit"
import { GhUser } from "../../types/users";

export const USER_TO_GET = 5;
const octokit = new Octokit({
  auth: process.env.REACT_APP_GH_TOKEN
});
const fetchUsersNames = async (userName: string): Promise<GhUser[]> => {
  const data = (await octokit.request('GET /search/users', {
    q: userName,
    per_page: USER_TO_GET
  })).data.items;

  return data.map(user => ({
    ...user,
    repositories: null
  }));
}

const fetchReposByUserLogin = async (username: string) => {
  return (await octokit.request("GET /users/{username}/repos", {
    username
  })).data
}

export const GitHubApi = {
  fetchUsersNames,
  fetchReposByUserLogin
}