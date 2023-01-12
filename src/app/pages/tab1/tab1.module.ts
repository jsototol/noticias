import { ModalInfoPageModule } from './../../modals/modal-info/modal-info.module';
import { ComponentsModule } from './../../components/components.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalController } from '@ionic/angular';
import { TranslateModule, TranslateLoader,TranslateService } from '@ngx-translate/core';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ComponentsModule,
    NgSelectModule,
    ModalInfoPageModule,
    TranslateModule
  ],
  providers: [
    ModalController,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
