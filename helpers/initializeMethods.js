export default async function initializeMethods(url) {
  let viewCountObject = {viewCount : {}};
  
  const data = await fetch(url).then(response => response.json());
  const camelize = s => s.replace(/-./g, x=>x[1].toUpperCase())

  for (const [key] in Object.entries(data.methods)) {
    viewCountObject.viewCount[camelize(data.methods[key].slug)] = 0;
  }

  return viewCountObject;

  // console.log(viewCountObject);
};