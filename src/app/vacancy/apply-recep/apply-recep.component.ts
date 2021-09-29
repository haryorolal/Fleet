import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, EmailValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {$enum} from 'ts-enum-util';
import { Router } from '@angular/router';
import { IUser } from '../vacancy.model';
import { EmailValidation, RequiredTextVaidation, OneCharValidation, BirthDateValidation, USAZipCodeValidation, USAPhoneNumberValidation, OptionaTextValidation } from 'src/app/common/validations';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/common/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-apply-recep',
  templateUrl: './apply-recep.component.html',
  styleUrls: ['./apply-recep.component.css']
})
export class ApplyRecepComponent implements OnInit {

  datasaved = false;
  message = null;

  userForm: FormGroup;
  //selectedFile:File =null;
  selectedFile:string;
  //user: IUser;
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
  //Image1: ['', Validators.required],
  Image2:['',Validators.required],
  Image3:['',Validators.required]
  //imageFront:['', Validators.required],  
  //imageBack:['', Validators.required],
  //imageName:['', Validators.required],

  
  })
}

get formControls(){
  return this.userForm["controls"]
}

onFileSelected(event){
  /*this.selectedFile = event.item(0);  
  var reader = new FileReader();
  reader.onload = (event:any) => { 
    this.imageUrl = event.target.result;
  }  
  reader.readAsDataURL(this.selectedFile);*/

  for(let i =0; i < event.target.files.length; i++){
    this.selectedFile = event.target.files[i];
    this.myFiles.push( event.target.files[i] )

    //console.log(this.myFiles);
  }


  /*var reader = new FileReader();
    reader.onload = (event:any) => { 
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);*/
  //this.selectedFile= <File>event.target.files[0];
}

/*fileUpload(){
  this.auth.postFile1(this.myFiles[0]).subscribe(
    () => {
      //this.toast.success("Uploaded successfully");
      if( this.datasaved = true){        
        this.message="Uploaded successfully";
      }
      
    } 
  );
}*/

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
    //myFormData.append('imageFront', this.userForm.value.imageFront);
    //myFormData.append('imageBack', this.userForm.value.imageBack);
    //myFormData.append('imageName', this.userForm.value.imageName);

    if(myFormData != null){
        this.auth.postCandidate(myFormData).subscribe(() => {
          if (this.datasaved = true){
            this.message = "Your data is saved successfully, We will be in touch soon";
          }else{
            this.message = "Oops! I guess you should try again or check your network.";
          }          
        })
        this.ResetForms();
    }else{
      this.message = "Gotya! Trying to be smart? Your form is empty";
    }
  }



  ResetForms(){
    this.userForm.reset();
  }
}
