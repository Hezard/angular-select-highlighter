import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {
  isSelectionBackward(selection: Selection): boolean {
    const position = selection.anchorNode.compareDocumentPosition(selection.focusNode);

    return (
      (!position && selection.anchorOffset > selection.focusOffset) || position === Node.DOCUMENT_POSITION_PRECEDING
    );
  }

  findSelectionIndex(nodeList: NodeListOf<ChildNode>, { anchorNode, focusNode }: Selection): number {
    let currentIndex = 0;
    const nodes = [].slice.call(nodeList);

    for (const node of nodes) {
      const firstChild = node.firstChild;
      const sibling = node.nextSibling;

      // skip comments nodes for safety iteration
      if (node.nodeType === 8) {
        continue;
      }

      if (
        (firstChild && firstChild === anchorNode) ||
        node === anchorNode ||
        (firstChild && firstChild === focusNode) ||
        node === focusNode
      ) {
        break;
      }

      currentIndex += (firstChild && firstChild.length) || node.length;

      if (
        sibling === anchorNode ||
        sibling === focusNode ||
        (sibling && sibling.firstChild === anchorNode) ||
        (sibling && sibling.firstChild === focusNode)
      ) {
        break;
      }
    }
    return currentIndex;
  }
}
