import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'app.api';

export type GithubProfileProps = {
  name: string;
  avatar_url: string;
  blog: string;
  html_url: string;
  bio: string;
}

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  username: string = 'NewLeonardooliv';
  name?: string;
  description?: string;
  github?: string;
  portfolio?: string;
  avatar?: string;
  linkedin?: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProfile();
  }

  async getProfile() {
    this.http.get<GithubProfileProps>(`${API}/users/${this.username}`).subscribe((data: GithubProfileProps) => {
      this.name = data.name;
      this.description = data.bio;
      this.github = data.html_url;
      this.portfolio = 'https://leonardo-eta.vercel.app/';
      this.avatar = data.avatar_url;
      this.linkedin = data.blog;
    });
  }
}
