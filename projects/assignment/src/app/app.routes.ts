import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  { path: '', redirectTo: 'assignment', pathMatch: 'full' },
  {
    path: 'assignment', children: [
      { path: '', loadChildren: () => import('./page/page.module').then(mod => mod.PageModule) }
    ]
  }
];
