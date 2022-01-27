import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';

import {HomeComponent} from './home/home.component';
import {MatListModule} from '@angular/material/list';
import {BasicsComponent} from './home/steps/basics/basics.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {AdvancedComponent} from './home/steps/advanced/advanced.component';
import {PlaygroundComponent} from './shared/components/playground/playground.component';
import {OperatorsComponent} from './shared/components/operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicsComponent,
    PlaygroundComponent,
    AdvancedComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    /* material */
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    /* Flex */
    FlexModule
  ],
  exports: [
    OperatorsComponent,
    PlaygroundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
