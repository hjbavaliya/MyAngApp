import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:'', component : UsersComponent},
  { path:'users', component : UsersComponent},
  { path:'userdetail/:id', component : UserdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
