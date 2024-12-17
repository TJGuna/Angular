import { Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {ParentComponent} from "./views/binding/parent/parent.component";
import {LayoutComponent} from "./layout/layout.component";
import {SignalsComponent} from "./views/signals/signals.component";

export const routes: Routes = [
  {
    path:'',component:LayoutComponent,children:[
      { path: '', component: HomeComponent },
      { path: 'binding', component: ParentComponent },
      { path: 'signals', component: SignalsComponent },
    ]},
  // { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
];
