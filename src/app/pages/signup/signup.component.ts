import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private authService: AuthService,private toastrService :ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(fv: NgForm){
    const {email,password} = fv.form.value;
    this.authService.signUp(email,password).then((res)=>{
      this.router.navigateByUrl('/');
      this.toastrService.success("registered success");
    }).catch((err)=>{
      console.error(err);
      this.toastrService.error("registration failed")
    });
  }

}
