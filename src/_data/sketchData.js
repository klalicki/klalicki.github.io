const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  const username = "klalicki";
  let json = await EleventyFetch(
    `https://api.github.com/users/${username}/repos`,
    {
      duration: "10m",
      type: "json", // also supports "text" or "buffer"
    }
  );
  // console.log(json);
  // const obj = JSON.parse(json);
  const filteredProjects = json.filter((repo) => {
    // console.log(repo.topics);
    return repo.topics.includes("sketches");
  });
  // console.log(filteredProjects);

  return { filteredProjects };
};
