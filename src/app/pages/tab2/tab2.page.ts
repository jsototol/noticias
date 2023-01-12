import { TranslateService } from '@ngx-translate/core';
import { Article } from './../../Interfaces/index';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

 langs! :any[];

 public idioma:any;

  constructor(private translateService: TranslateService) {
    this.langs = this.translateService.getLangs();
  }

  ngOnInit(): void {

  }

  changeLang(event: any){
    this.translateService.use(event.detail.value)
  }
}
