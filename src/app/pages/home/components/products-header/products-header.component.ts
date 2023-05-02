import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort= 'descending';
  itemsShowCount = 12;

  constructor() {}

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void  {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdate(colsNum: number): void {
    this.columnsCountChange.emit(colsNum)
  }
}
