const convertus = (jsonData) => {
  let headers = [];
  for (let key in jsonData) {
    if (key !== 'children') {
      headers.push(key);
    }
  }
  let result = [];

  const traverseTree = (node) => {
    currentString = [];
    for (let key in node) {
      if (key !== 'children') {
        let index = headers.indexOf(key);
        if (index !== -1) {
          currentString[index] = node[key]
        } else {
          currentString[index] = 'null';
          headers.push(key);
          let newIndexToPush = headers.indexOf(key);
          currentString[newIndexToPush] = node[key];
        }
      }
    }
    result.push(currentString.join(','));
    if (node.children.length) {
      node.children.forEach(child => {
        traverseTree(child);
      })
    }
  }

  traverseTree(jsonData);
  result.unshift(headers.join(','));
  return result.join('\n');
}

module.exports.convertus = convertus;