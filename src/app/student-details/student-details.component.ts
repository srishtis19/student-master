import {  AfterViewInit, ViewChild , Component, OnInit } from '@angular/core';
import { student } from '../students';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { StudentDetailsService } from '../student-details.service';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  
})
export class StudentDetailsComponent implements AfterViewInit {
  
  studentData:any = []
  dataSource!:any

  constructor(private studentDetailsService: StudentDetailsService) { }
  ngOnInit(){

    this.studentDetailsService.getData().subscribe((res)=>{
      this.studentData = res
      this.dataSource = new MatTableDataSource<any>(this.studentData);
      this.dataSource._updateChangeSubscription()
      this.dataSource.paginator = this.paginator;
    })


  }
  ngAfterViewInit() {
    
  }

  

  displayedColumns: string[] = [ 'name','age','gender','city','state','hobbies','delete'];
  //dataSource = studentData
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  

  removeStudent(student:student) {

    this.studentDetailsService.removeStudent(student._id)
    
    const index = this.dataSource.data.indexOf(student)
    this.dataSource.data.splice(index,1)
    this.dataSource._updateChangeSubscription()
    this.dataSource.paginator = this.paginator
  }

}
