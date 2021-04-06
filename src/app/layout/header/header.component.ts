import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = null;

  constructor(private auth: AuthService, private toastr: ToastrService,private router:Router) {
    auth.getUser().subscribe(
      (user) => {
        this.email = user?.email;
      }
    )
  }

  ngOnInit(): void {
  }

  async signOut(){
    try {
      const res = await this.auth.signOut();
      this.router.navigateByUrl('/signin');
      this.toastr.success("Signed Out Successfully");
    } catch (error) {
      this.toastr.error("something went wrong!")
    }
  }

}
