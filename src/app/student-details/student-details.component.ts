import { ViewChild , Component, OnInit } from '@angular/core';
import { student } from '../students';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { StudentDetailsService } from '../student-details.service';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  
})
export class StudentDetailsComponent implements OnInit {
  
  //Stores students list
  studentData:any = []
  dataSource!:any

  constructor(private studentDetailsService: StudentDetailsService) { }

  ngOnInit(){

    //Get student data from backend
    this.studentDetailsService.getData().subscribe((res)=>{
      this.studentData = res
      this.dataSource = new MatTableDataSource<any>(this.studentData.reverse());
      this.dataSource._updateChangeSubscription()
      this.dataSource.paginator = this.paginator;
    })


  }

  displayedColumns: string[] = [ 'name','age','gender','state','country','hobbies','delete'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  removeStudent(student:student) {

    this.studentDetailsService.removeStudent(student._id)

    const index = this.dataSource.data.indexOf(student)
    this.dataSource.data.splice(index,1)
    this.dataSource._updateChangeSubscription()
    this.dataSource.paginator = this.paginator
  }

}
