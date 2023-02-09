import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';


import {CardComponent} from './shared-modules/components/card/card.component';
import {StepperComponent} from './shared-modules/components/stepper/stepper.component';
import {SidebarComponent} from './shared-modules/components/sidebar/sidebar.component';
import {HeaderComponent} from './shared-modules/components/header/header.component';
import {FooterComponent} from './shared-modules/components/footer/footer.component';
import {TitleComponent} from './shared-modules/components/title/title.component';
import {SubtitleComponent} from './shared-modules/components/subtitle/subtitle.component';
import {HeaderActionsComponent} from './shared-modules/components/header-actions/header-actions.component';
import {CustomerComponent} from './pages/customer/customer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {CustomersService} from './shared-modules/services/customers/customers.service';
import {LoaderComponent} from "./shared-modules/components/loader/loader.component";
import {CustomerViewComponent} from "./pages/customer-view/customer-view.component";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StepperComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    SubtitleComponent,
    HeaderActionsComponent,
    CustomerComponent,
    CustomerViewComponent,
    LoaderComponent,
  ],
  entryComponents: [LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
