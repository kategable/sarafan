import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@sarafan/feature-home').then((m) => m.FeatureHomeModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('@sarafan/feature-profile').then((m) => m.FeatureProfileModule),
    // canActivate: [AuthGuard]
  }];
  // {
  //   path: '',
  //   component: ShellComponent
  // },
  // {
  //   path: 'beta',
  //   component: BetaComponent
  // },
  // {
  //   path: 'search',
  //   loadChildren: () =>
  //     import('@sarafan/providers/feature-search').then(
  //       m => m.ProvidersFeatureSearchModule
  //     )
  // },
  // {
  //   path: 'callback',
  //   component: CallbackComponent
  // },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('@sarafan/feature-home').then((m) => m.FeatureHomeModule),
  //   // canActivate: [AuthGuard]
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () =>
  //     import('@sarafan/feature-profile').then((m) => m.FeatureProfileModule),
  //   // canActivate: [AuthGuard]
  // },
  // {
  //   path: 'debug',
  //   loadChildren: () =>
  //   import('./debug/debug.module').then(
  //     m => m.DebugModule
  //   )

  // },


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}
