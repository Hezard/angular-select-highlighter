export function findTextNode(hostElement, textQuery) {
  return [...hostElement.childNodes].find(node => node.nodeValue === textQuery);
}

export function createSelection(textNode, start, end) {
  const selection = window.getSelection();
  const range = document.createRange();
  range.setStart(textNode, start);
  range.setEnd(textNode, end);
  selection.addRange(range);

  return selection.toString();
}
