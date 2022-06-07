import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor(private http: HttpClient) { }

  // Service to submit form data to backend
  submitForm(data:any) {
    const URL = "http://localhost:8080/sendStudentDetails"
    return this.http.post<any>(URL, data)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  // Service to get Student Details data from backend
  getData():Observable<any> {
    const URL = "http://localhost:8080/getStudentDetails"
    return this.http.get<any>(URL)
  }

  // Service to delete student entry
  removeStudent(id:any){

    const URL = `http://localhost:8080/removeStudent/${id}`;
    console.log(URL)
    return this.http.delete(URL).subscribe(res => console.log(res))

  }
}
