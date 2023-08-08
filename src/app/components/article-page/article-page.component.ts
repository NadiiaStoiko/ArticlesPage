import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  public arrowIcon = 'assets/img/arrow.svg';
  public picture: string='';
  public title: string='';
  public descr: string = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
   this.picture = this.route.snapshot.params['pic'];
   this.title = this.route.snapshot.params['title'];
   this.descr = this.route.snapshot.params['itemSummary'];
  }

  public routeToArticlesList():void {
    this.location.back();
  }

}
