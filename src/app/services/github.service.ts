import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUserDetails(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}`);
  }

  getRepos(repoURL: string) {
    return this.http.get(repoURL);
  }


}
