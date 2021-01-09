import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { StandardModule } from '../standard/standard.module';
import { HomeComponent } from '../standard/home/home.component';
import { AboutusComponent } from '../standard/aboutus/aboutus.component';
import { ContactusComponent } from '../standard/contactus/contactus.component';
import { LoginComponent } from '../standard/login/login.component';
import { RegisterComponent } from '../standard/register/register.component';
import { TestComponent } from '../standard/test/test.component';


const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'test',component:TestComponent}
]

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    StandardModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    ContainerComponent
  ]
})
export class SPAModule { }
