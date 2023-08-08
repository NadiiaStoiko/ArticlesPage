import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input() public articleItem: any;
  @Input() public inputValue?: any;
  public arrowIcon = 'assets/img/arrow_right.svg';
  public calendarIcon = 'assets/img/calendar.svg';
  public itemSummary:string = '';

  constructor(
    private router: Router
  ) { }

  public routeToArticle(): void {
    this.router.navigate(['/detail', this.articleItem.id, { title: this.articleItem.title, itemSummary: this.articleItem.summary, pic: this.articleItem.image_url }]);
  }
}
