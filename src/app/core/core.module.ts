import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MaterialModule} from "../material/material.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [DashboardComponent, LoginComponent],
  exports: [DashboardComponent, LoginComponent],
  }
)
  export class CoreModule { }
