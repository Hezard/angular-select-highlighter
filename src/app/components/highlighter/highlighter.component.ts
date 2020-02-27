import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import uuid from 'uuid';

import { SelectionItem } from '../../models';
import { HighlighterService, DomService } from 'src/app/services';

@Component({
  selector: 'app-highlighter',
  templateUrl: './highlighter.component.html',
  styleUrls: ['./highlighter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlighterComponent implements OnChanges {
  public content: Array<string | SelectionItem> = null;

  constructor(private highlighterService: HighlighterService, private domService: DomService) {}

  @Input() color: string;
  @Input() text: string;
  @Input() data: SelectionItem[];

  @Output() selectionText = new EventEmitter<SelectionItem[]>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.text || changes.data) {
      this.content = this.highlighterService.updateContent(this.data, this.text);
    }
  }

  @HostListener('mouseup', ['$event'])
  onSelectionText({ currentTarget }: { currentTarget: HTMLElement }): void {
    const { color, data } = this;
    const selection: Selection = window.getSelection();
    const { anchorNode, anchorOffset, focusOffset } = selection;
    const value = selection.toString();

    // skip outer events of container and empty selections
    if ((!data && !data.length && !color) || !value || !currentTarget.contains(anchorNode)) {
      selection.empty();
      return;
    }

    // find && update indexes if we replace existing highlight elements
    const currentIndex: number = this.domService.findSelectionIndex(currentTarget.childNodes, selection);
    const isBackward: boolean = this.domService.isSelectionBackward(selection);
    const item: SelectionItem = {
      id: uuid(),
      value,
      variant: color,
      ...(isBackward
        ? {
            start: focusOffset + currentIndex,
            end: focusOffset + currentIndex + value.length
          }
        : {
            start: anchorOffset + currentIndex,
            end: anchorOffset + currentIndex + value.length
          })
    };

    const collection: SelectionItem[] = this.highlighterService.updateSelections(data, item, !color);

    this.selectionText.emit(collection);
    selection.empty();
  }
}
