import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MaterialModule} from "../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MaterialModule,
  ],
  declarations: [DashboardComponent, LoginComponent],
  exports: [DashboardComponent, LoginComponent],
  }
)
  export class CoreModule { }
