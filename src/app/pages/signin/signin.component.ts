import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router,private authService: AuthService,private toastrService :ToastrService) { 
    authService.getUser().subscribe(
      (user)=>{
        console.log(user); 
      },
      (err) =>{
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit(fv: NgForm){
    const {email,password} = fv.form.value;
    this.authService.signIn(email,password).then((res)=>{
      this.router.navigateByUrl('/');
      this.toastrService.success("signin success");
    }).catch((err)=>{
      console.error(err);
      this.toastrService.error("signin failed")
    });
  }

}
