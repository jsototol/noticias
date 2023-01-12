import { Component } from '@angular/core';
import { TranslateModule, TranslateLoader,TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private transalteService: TranslateService) {
    this.transalteService.setDefaultLang('Español')
    this.transalteService.addLangs(["English","Español"])
  }
}
