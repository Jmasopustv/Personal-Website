'use strict';

/**
 * GitHub repositories fetching functionality
 */
export function initRepositories() {
  const repositoriesList = document.querySelectorAll(".repositories-post-item");

  if (repositoriesList.length > 0) {
    const githubUsername = "jmasopustv";
    const githubApiUrl = `https://api.github.com/users/${githubUsername}/repos`;

    fetch(githubApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub API Error: ${response.status}`);
        }
        return response.json();
      })
      .then((repos) => {
        repos.slice(0, repositoriesList.length).forEach((repo, index) => {
          const listItem = repositoriesList[index];

          const anchor = listItem.querySelector("a");
          const image = listItem.querySelector(".repositories-banner-box img");
          const title = listItem.querySelector(".repositories-item-title");
          const description = listItem.querySelector(".repositories-text");
          const metaTime = listItem.querySelector(".repositories-meta time");

          anchor.href = repo.html_url;
          image.alt = repo.name;
          title.textContent = repo.name;
          description.textContent = repo.description || "No description available.";
          metaTime.textContent = `Updated: ${new Date(repo.updated_at).toLocaleDateString()}`;
          metaTime.setAttribute("datetime", repo.updated_at);
        });
      })
      .catch((error) => {
        console.error("Error fetching GitHub repositories:", error);
      });
  } else {
    console.log("No repository items found in the DOM.");
  }
}
