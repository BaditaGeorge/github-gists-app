/* eslint-disable no-loop-func */
//util functions

function parseFiles(rawFiles) {
  let parsedFiles = [];
  for (let key in rawFiles) {
    parsedFiles.push({
      fileName: key,
      tag: rawFiles[key].language,
      rawContent: rawFiles[key].raw_url,
    });
  }
  return parsedFiles;
}

function parseForks(forksData) {
  let users = [];
  for (let fork of forksData) {
    users.push(fork.owner.login);
  }
  return users;
}

function parseGist(rawData, forksArr) {
  return {
    forksUrl: rawData.forks_url,
    createdAt: rawData.created_at.replace(/T|Z/gi, ' '),
    updatedAt: rawData.updated_at.replace(/T|Z/gi, ' '),
    description: rawData.description,
    userName: rawData.owner.login,
    files: parseFiles(rawData.files),
    forks: forksArr.join(","),
  };
}

//

const ApiConsumer = {
  fetchUsersGists: (userName, page, setGistsArray) => {
    let per_page = 5;
    const baseUrl = `https://api.github.com/users/${userName}/gists?page=${page}&per_page=${per_page}`;
    let gists = [];

    fetch(baseUrl).then((resp) => {
      let numOfResults = 0;
      if (resp.status === 200) {
        resp.json().then((data) => {
          numOfResults = data.length;
          for (let entry of data) {
            fetch(entry.forks_url).then((forks_resp) => {
              if (forks_resp.status === 200) {
                forks_resp.json().then((forks) => {
                  let gistData = parseGist(entry, parseForks(forks));
                  gists.push(gistData);
                  if (gists.length === numOfResults) {
                    console.log(gists);
                    setGistsArray(gists);
                  }
                });
              }
            });
          }
        });
      }
    });
  },
};

export default ApiConsumer;
