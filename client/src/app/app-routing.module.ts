import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdvancedComponent} from './home/steps/advanced/advanced.component';
import {BasicsComponent} from './home/steps/basics/basics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/basic',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'basic',
        component: BasicsComponent,
      },
      {

        path: 'advanced',
        component: AdvancedComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home/basic'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
