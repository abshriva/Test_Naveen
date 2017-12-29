import { RouterModule, Routes } from '@angular/router';

import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeesComponent } from '../employees/employees.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes= [
    { path:'employees', component:EmployeesComponent },
    { path:'employeeList', component:EmployeeDetailComponent },
    { path:'',component:HomeComponent},
    //{ path: '**', component: PageNotFoundComponent }
    //{path:'employees/:id',}

]

export const appRouting = RouterModule.forRoot(appRoutes);