import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ArticlesServiceService } from 'src/app/services/articles-service.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  public inputValue=''
  public  searchIcon = 'assets/img/search.svg';
  public isLoading = false;
  public articlesList:any;

  constructor(private articalesServ: ArticlesServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.articalesServ.getGetArticles().pipe(take(15)).subscribe((articles)=>{
      this.articlesList = articles.results;

    });
    this.isLoading = false;
  }

  public inputHandler(event:any): void {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.inputValue = (event.target as HTMLInputElement).value;
      this.articalesFilter(this.inputValue);
    }
  }

  public searchHandler(value: string): void {
    this.inputValue = value;
    this.articalesFilter(this.inputValue);
  }

  private articalesFilter(value: string): void {
    const articlesListSum = this.articlesList.filter((articale:any)=>articale.summary.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    const articlesListTitle = this.articlesList.filter((articale:any)=>articale.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    let temp = articlesListTitle.concat(articlesListSum);
    this.articlesList = [...new Set(temp)];
  }
}
