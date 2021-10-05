import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {

  myForm:FormGroup
  strclient=""
  clients=[]
  i=-1
  

  constructor(private formBuilder:FormBuilder) {
    
   }


  ngOnInit(): void {
    this.myForm=this.formBuilder.group({
      nomprenom:['',Validators.required],
      email:['',Validators.required],
      sexe:['',Validators.required],
      description:['',Validators.required]
    })
  }

  get f(){
    return this.myForm.controls
  }

  
  
  setClient(){
    
    this.i=this.i+1
    this.strclient="*nom et prenom:"+this.myForm.value.nomprenom+"   *email:"+this.myForm.value.email+"   *sexe:"+this.myForm.value.sexe+"   *description:"+this.myForm.value.description
    this.clients.splice(this.i,0,this.strclient)
    
  }


  onSubmit(){
    
     
  }


}
