import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, EmailValidator, Validators, Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { PhoneType, IUSState } from './data';
import {$enum} from 'ts-enum-util';
import { Router } from '@angular/router';
import { IUser } from '../vacancy.model';
import { EmailValidation, RequiredTextVaidation, OneCharValidation, BirthDateValidation, USAZipCodeValidation, USAPhoneNumberValidation, OptionaTextValidation } from 'src//app/common/validations';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/common/auth.service';
import { HttpClient } from '@angular/common/http';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';
import {ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  datasaved = false;
  message = null;

  userForm: FormGroup;
  //selectedFile:File =null;
  selectedFile:string;
  //fileToUpload: File=null;
  user: IUser;
  userError = '';  
  imageUrl = 'assets/default-avatar.png';
  //PhoneTypes = $enum(PhoneType).getKeys()
  //states: Observable<IUSState[]>
  myFiles:string [] = [];

  constructor(private formBuilder: FormBuilder,  private auth:AuthService, private http:HttpClient) { }

  get dateOfBirth(){
    return this.userForm.get('dateOfBirth').value || new Date()
  }

  get age(){
    return new Date().getFullYear() - this.dateOfBirth.getFullYear()
  }

  get formControls(){
    return this.userForm["controls"]
  }

  ngOnInit() {
    this.setFormControl(); 
  }

  
setFormControl() {
  this.userForm = this.formBuilder.group({
  firstname: ['', RequiredTextVaidation],
  initials: [ '', OneCharValidation],
  lastname: [ '', RequiredTextVaidation],
  dateOfBirth: [ '', BirthDateValidation],
  email: [ '', EmailValidation],
  address:['', RequiredTextVaidation],
  phones:['', Validators.required],
  Image:['',Validators.required],  
  //Image1:['', Validators.required],
  Image2:['',Validators.required],
  Image3:['',Validators.required]
  //imageFront:['', Validators.required],  
  //imageBack:['', Validators.required],
  //imageName:['', Validators.required],

  
  })
}



onFileSelected(event){

  for(let i =0; i<event.target.files.length; i++){
    this.selectedFile = event.target.files[i];
    this.myFiles.push( event.target.files[i] )

    console.log(this.myFiles);
  }
}


save(){
  var myFormData = new FormData();
    myFormData.append('firstname', this.userForm.value.firstname);
    myFormData.append('initials', this.userForm.value.initials);
    myFormData.append('lastname', this.userForm.value.lastname);
    myFormData.append('dateOfBirth', this.userForm.value.dateOfBirth);
    myFormData.append('email', this.userForm.value.email);
    myFormData.append('address', this.userForm.value.address);
    myFormData.append('phones', this.userForm.value.phones);
    for (let i =0; i < this.myFiles.length; i++){      
      myFormData.append('Image[]', this.myFiles[i]);
    }

    if(myFormData != null){
        this.auth.postCandidate(myFormData).subscribe(() => {
          if (this.datasaved = true){
            this.message = "Your data is saved successfully, we will be in touch soon.";
          }else{
            this.message = "Oops! I guess you should try again or check your network.";
          }          
        })
        this.ResetForms();
        //this.postEmail(FormData);
    }else{
      this.message = "Gotya! Trying to be smart? Your form is empty";
    }


}

postEmail(email){
  this.auth.postemail(email).subscribe(() => {
    
  })
}


ResetForms(){
  this.userForm.reset();
}



/*buildUserForm(){
  this.userForm = this.formBuilder.group({
    email: [{
      value: (this.user && this.user.email) || '',      
    },  
    EmailValidation,
  ],
  name: this.formBuilder.group({
    first: [(this.user && this.user.name.first || '', RequiredTextVaidation)],
    middle: [(this.user && this.user.name.middle || '', OneCharValidation)],
    last: [(this.user && this.user.name.last || '', RequiredTextVaidation)],
  }),
  dateOfBirth: [(this.user && this.user.dateOfBirth || '', BirthDateValidation)],
  address: this.formBuilder.group({
    line1: [(this.user && this.user.address.line1 || '', RequiredTextVaidation)],
    line2: [(this.user && this.user.address.line2 || '', OptionaTextValidation)],
    city: [(this.user && this.user.address.city || '', RequiredTextVaidation)],
    state: [(this.user && this.user.address.state || '', RequiredTextVaidation)],
    zip: [(this.user && this.user.address.zip || '', USAZipCodeValidation)]
  })
  })

}*/



}
