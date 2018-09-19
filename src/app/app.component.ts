import { Component,OnInit } from '@angular/core';
import {EmployeesService} from './app.component.service';
import {IEmployee} from './interface'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: `
// <br>
// <app-check-box [all] = "getTotalEmployeeCount()"
//                [female] = "getTotalFemaleEmployeeCount()"
//                [male] = "getTotalMaleEmployeeCount()"
//                (countRadioButtonSelectionChange) ="onEmployeeCountRadioButtonChanged($event)" >
//   </app-check-box>
//   <br><br>
//   <table  border="1">
//                 <thead>
//                     <tr>
//                        <th>Code</th>
//                        <th>Name</th>
//                        <th>Gender</th>
//                        <th>Annual Salary</th>
//                        <th>Date Of Birth</th>
//                     </tr>
//                 </thead>
//                     <tbody>
//                     <ng-container *ngFor ='let employee of employees;'>
//                         <tr  *ngIf = "selectedEmployeeCountRadioButton == 'All' || selectedEmployeeCountRadioButton == employee.gender">
//                           <td>{{employee.code }}</td>
//                           <td>{{employee.name  | customPipe : employee.gender }}</td>
//                           <td>{{employee.gender }}</td>
//                           <td>{{employee.annualSalary }}</td>
//                           <td>{{employee.dateOfBirth }}</td>
//                         </tr>
//                       </ng-container>
//                     </tbody>
//             </table>
//             <br/>
//
//             `,
  styleUrls: ['./app.component.css'],
  providers : [EmployeesService]
})
export class AppComponent implements OnInit {
  employees : IEmployee[];
  selectedEmployeeCountRadioButton : string ='All';
  //private _employeeService : EmployeesService;
 constructor(private _employeeService : EmployeesService){
   //this._employeeService = _employeeService;
   //this.employees = this._employeeService.getEmployees();
 }

 ngOnInit(){
  this.employees = this._employeeService.getEmployees();
 }

 getTotalEmployeeCount () : number {
   return this.employees.length;
 }

 getTotalFemaleEmployeeCount () : number {
   return this.employees.filter(e => e.gender === 'Female').length;
 }

 getTotalMaleEmployeeCount () : number {
   return this.employees.filter(e => e.gender === 'Male').length;
 }

 onEmployeeCountRadioButtonChanged(selectedValue : string) : void {
   this.selectedEmployeeCountRadioButton = selectedValue;
 }

}
