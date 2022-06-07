import {  AfterViewInit, ViewChild , Component, OnInit } from '@angular/core';
import { student, studentData } from '../students';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  
})
export class StudentDetailsComponent implements AfterViewInit {
  

  constructor() { }

  displayedColumns: string[] = [ 'name','age','gender','city','state','hobbies','delete'];
  //dataSource = studentData
  dataSource = new MatTableDataSource<any>(studentData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  removeStudent(student:student) {
    
    const index = this.dataSource.data.indexOf(student)
    this.dataSource.data.splice(index,1)
    this.dataSource._updateChangeSubscription()
    this.dataSource.paginator = this.paginator
  }

}
