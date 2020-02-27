import { Injectable } from '@angular/core';
import uuid from 'uuid';
import { SelectionItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HighlighterService {
  public updateSelections(selections: SelectionItem[], target: SelectionItem, exclude = false): SelectionItem[] {
    return selections
      .reduce((arr, curr) => {
        if (target.start <= curr.start && target.end >= curr.end) {
          return [...arr];
        }

        // target inside existing selection
        if (target.start > curr.start && target.end < curr.end) {
          const before: SelectionItem = {
            id: uuid(),
            start: curr.start,
            end: target.start,
            value: curr.value.substr(0, target.start - curr.start),
            variant: curr.variant
          };
          const after: SelectionItem = {
            id: uuid(),
            start: target.end,
            end: curr.end,
            value: curr.value.substr(target.end - curr.end),
            variant: curr.variant
          };
          return [...arr, before, after];
        }

        // target overlaped at the beginig
        if (target.start <= curr.start && target.end < curr.end && target.end > curr.start) {
          const result: SelectionItem = {
            id: uuid(),
            start: target.end,
            end: curr.end,
            value: curr.value.substr(target.end - curr.end),
            variant: curr.variant
          };
          return [...arr, result];
        }

        // target overlaped at the end
        if (target.end >= curr.end && target.start > curr.start && target.start < curr.end) {
          const result: SelectionItem = {
            id: uuid(),
            start: curr.start,
            end: target.start,
            value: curr.value.substr(0, target.start - curr.start),
            variant: curr.variant
          };
          return [...arr, result];
        }
        return [...arr, curr];
      }, [])
      .concat(exclude ? [] : target)
      .sort((a, b) => a.start - b.start);
  }

  public updateContent(data: SelectionItem[], text: string): Array<string | SelectionItem> {
    const length: number = data && data.length;
    let position = 0;
    let content: string = text;

    if (length) {
      return data.reduce((children: Array<string | SelectionItem>, node: SelectionItem, index) => {
        const before: string | [] = content.substr(0, node.start - position) || [];
        content = content.substr(node.end - position);
        const after: string | [] = (index === length - 1 && content) || [];

        position = node.end;

        return children
          .concat(before)
          .concat(node)
          .concat(after);
      }, []);
    }
    return [text];
  }
}
