import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import {MatPaginatorModule} from '@angular/material/paginator';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent implements OnInit {

  //displayedColumns: string[] = ['ID', 'Name', 'Email', 'Phone','Salary','Department']; 

 totalLength:any;
 page:number =1;


  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        console.log(employees);
        this.employees = employees;
        this.totalLength = employees.length;
       
      },
      error: (response) =>{
        console.log(response);
      }
    });
  }

}
