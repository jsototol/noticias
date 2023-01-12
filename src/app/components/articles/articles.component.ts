import { Distritos } from './../../Interfaces/distritos';
import { Article } from './../../Interfaces/index';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  @Input() articles: Distritos[] = [];
  @Input() i!: number;
  constructor() { }

  ngOnInit() {}

}
