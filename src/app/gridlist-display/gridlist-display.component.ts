import { Component } from '@angular/core';

@Component({
  selector: 'gridlist-display',
  templateUrl: './gridlist-display.component.html',
  styleUrls: ['./gridlist-display.component.css']
})

export interface Card{
  cols: number;
  rows: number;
  id: string;
}

export class GridlistDisplayComponent{

  cards: Card[] = [
    { cols: 1.2, rows: 1, id: 'card-days'},
    { cols: 1.2, rows: 1, id: 'card-tools'},
    { cols: 3, rows: 1, id: 'card-assignees'},
    { cols: 3, rows: 1, id: 'card-table'},
  ]

}