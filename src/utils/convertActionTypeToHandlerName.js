const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, txt => `${txt.charAt(0).toUpperCase()}${txt.substr(1).toLowerCase()}`);
}

const convertActionTypeToHandlerName = (str) => {
  const split = str.split('_');
  const first = split[0].toLowerCase();
  if (split.length === 1) return first;
  const last = toTitleCase(split[1]);
  return `${first}${last}`;
}

module.exports = convertActionTypeToHandlerName;
