import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{SPAModule} from './spa/spa.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { StandardModule } from './standard/standard.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SPAModule,
    AdminModule,
    StandardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
