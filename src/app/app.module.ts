import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { SideNavigationComponent } from "./components/side-navigation/side-navigation.component";
import { ContentManagementComponent } from "./components/content-management/content-management.component";
import { UserManagementComponent } from "./components/user-management/user-management.component";
import { DialogBoxComponent } from "./components/dialog-box/dialog-box.component";

const appRoutes: Routes = [
  {
    path: "",
    component: ContentManagementComponent,
    data: { title: "Content Management" }
  },
  {
    path: "content-management",
    component: ContentManagementComponent,
    data: { title: "Content Management" }
  },
  {
    path: "user-management",
    component: UserManagementComponent,
    data: { title: "User Management" }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    ContentManagementComponent,
    UserManagementComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  entryComponents: [DialogBoxComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
