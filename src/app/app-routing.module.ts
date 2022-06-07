import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DetailsFormComponent } from './details-form/details-form.component';

const routes: Routes = [
  { path: '', component: StudentDetailsComponent },
  { path: 'add-student', component: DetailsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
