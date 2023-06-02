import fetch from "node-fetch";
export default async function initializeViewCountObj(url) {
  let viewCountObject = { viewCount: {}, users: {} };

  const data = await fetch(url).then((response) => response.json());
  const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());

  for (const [key] in Object.entries(data.methods)) {
    viewCountObject.viewCount[camelize(data.methods[key].slug)] = 0;
    viewCountObject.users[camelize(data.methods[key].slug)] = [];
  }

  // console.log(viewCountObject);

  return viewCountObject;
}
