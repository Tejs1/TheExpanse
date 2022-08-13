export function modifyLink(link) {
  if (link.includes("https")) {
    return link;
  }
  return "https://robertsspaceindustries.com" + link;
}
