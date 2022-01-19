import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdvancedComponent} from './home/steps/advanced/advanced.component';
import {BasicsComponent} from './home/steps/basics/basics.component';
import {OperatorsComponent} from './shared/components/operators/operators.component';
import {PlaygroundComponent} from './shared/components/playground/playground.component';

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
        children: [
          {
            path: 'operators',
            component: OperatorsComponent
          },
          {
            path: 'playground',
            component: PlaygroundComponent
          }
        ]
      },
      {

        path: 'advanced',
        component: AdvancedComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home/basic/operators'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
