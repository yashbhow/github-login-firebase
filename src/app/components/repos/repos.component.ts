import { Component, OnInit,Input,OnChanges,ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit,OnChanges {

  @Input() repoURL: string;
  repos:[]

  constructor(private githubService:GithubService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    if(this.repoURL){
      this.githubService.getRepos(this.repoURL).subscribe(
        (repos:[]) => {
          this.repos = repos;
          this.ref.detectChanges();
        },
        (err) =>{
          console.error(err);
        }
      )
    }
  }

}
