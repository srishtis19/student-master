import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { countryList } from '../countryList';
import { StudentDetailsService } from '../student-details.service';


@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  hobbiesCtrl = new FormControl('');
  filteredHobbies: Observable<string[]>;
  hobbies: string[] = [];
  allHobbies: string[] = ['Reading','Dancing','Singing','Music','Playing'];


  detailsForm = new FormGroup({

    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    age : new FormControl('',[Validators.required,
                              Validators.min(5),
                              Validators.max(20)]),
    gender : new FormControl('Female'),
    country: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    studentHobbies: new FormControl(this.hobbies)

  })

 
  @ViewChild('hobbiesInput') hobbiesInput!: ElementRef<HTMLInputElement>;

  constructor(private studentDetailsService: StudentDetailsService) {
    this.filteredHobbies = this.hobbiesCtrl.valueChanges.pipe(
      startWith(null),
      map((hobby: string | null) => (hobby? this._filter(hobby) : this.allHobbies.slice())),
    );
  
   }

   add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add hobby
    if (value) {
      this.hobbies.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.hobbiesCtrl.setValue(null)
  }

  remove(hobby: string): void {
    const index = this.hobbies.indexOf(hobby);

    if (index >= 0) {
      this.hobbies.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.hobbies.push(event.option.viewValue);
    this.hobbiesInput.nativeElement.value = '';
    this.hobbiesCtrl.setValue(null)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allHobbies.filter(hobby => hobby.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
  }

  countryList = countryList
  
  cities!: Array<any>;
  selectedCountry:any = ""
  
  onSubmit(){
    let studentData = this.detailsForm.value
    console.log(studentData)
    this.studentDetailsService.submitForm(studentData)
  }
}
