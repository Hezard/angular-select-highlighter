import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SelectionItem } from 'src/app/models';

@Component({
  selector: 'app-highlighter-filter',
  templateUrl: './highlighter-filter.component.html',
  styleUrls: ['./highlighter-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlighterFilterComponent {
  @Input() data: SelectionItem[];
}
