import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'modal-info',
    loadChildren: () =>
      import('./modals/modal-info/modal-info.module').then(
        (m) => m.ModalInfoPageModule
      ),
  },
  {
    path: 'maps',
    loadChildren: () =>
      import('./pages/maps/maps.module').then((m) => m.MapsPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
