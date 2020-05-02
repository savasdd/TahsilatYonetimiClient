import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialdesignModule} from "../materialdesign/materialdesign.module";
import {RoutingModule} from "../routing/routing.module";
import {LoginModule} from "../login/login.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialdesignModule,
    RoutingModule,
    LoginModule
  ],
  exports: [MaterialdesignModule, RoutingModule]
})
export class SharedModule {
}
