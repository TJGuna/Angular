import { Routes } from '@angular/router';
import {ParentComponent} from './views/databinding/parent/parent.component';

export const routes: Routes = [
  { path: '', component: ParentComponent },
  // { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  // Add more routes as needed
];
