import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.components.html'
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categoriesSubsrciption: Subscription | undefined;

  categories: Array<string> | undefined;


  constructor(private sortService: StoreService) { }

  ngOnInit(): void {
    this.categoriesSubsrciption = this.sortService.getAllCategories()
      .subscribe(responce => {this.categories = responce});
  }

  onShowCategory(category: string):void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if(this.categoriesSubsrciption) {
      this.categoriesSubsrciption.unsubscribe()
    }
  }

}
