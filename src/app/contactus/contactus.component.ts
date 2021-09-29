import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/auth.service';
import { IUser, Icontact } from '../vacancy/vacancy.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  Contact: Icontact
  contactForm: FormGroup
  message = null;
  datasaved = false;

  constructor(private auth:AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setformControl();
  }

  setformControl(){
    this.contactForm = this.formBuilder.group({
      names: ["", Validators.required],
      email: ["", Validators.required],
      messages: ["", Validators.required]
    })
  }

  postContact(){
    //console.log("i am here");
    var myFormData = new FormData();
    myFormData.append('names', this.contactForm.value.names)
    myFormData.append('email', this.contactForm.value.email)
    myFormData.append('messages', this.contactForm.value.messages)

    if(myFormData != null){
        this.auth.postcontact(myFormData).subscribe(() => {
          this.datasaved = true;
          this.message = "Message sent successfully, we will get in touch soon."
        })
        this.resetForm();
    }else{
      console.log("contact form is empty");
    }
  }

  resetForm(){
    this.contactForm.reset();
  }

}
