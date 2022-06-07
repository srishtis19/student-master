import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor(private http: HttpClient) { }

  submitForm(data:any) {
    const URL = "http://localhost:8080/sendStudentDetails"
    return this.http.post<any>(URL, data)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  getData():Observable<any> {
    const URL = "http://localhost:8080/getStudentDetails"
    return this.http.get<any>(URL)
  }

  removeStudent(id:any){

    const URL = `http://localhost:8080/removeStudent/${id}`;
    console.log(URL)
    return this.http.delete(URL).subscribe(res => console.log(res))

  }
}
