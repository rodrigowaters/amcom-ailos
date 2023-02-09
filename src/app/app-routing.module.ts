import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerComponent} from "./pages/customer/customer.component";
import {CustomerViewComponent} from "./pages/customer-view/customer-view.component";

const routes: Routes = [
  {
    path: 'customer',
    children: [
      {
        path: '',
        component: CustomerComponent
      },
      {
        path: 'view',
        component: CustomerViewComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'customer',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
