import { Component, OnInit } from '@angular/core';
import { AboutMeService } from '../../services/about-me.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent implements OnInit {
  aboutMeData = '';

  constructor(private aboutMeService: AboutMeService) {}

  ngOnInit(): void {
    this.aboutMeService.getPresentation().subscribe((data) => {
      this.aboutMeData = data;
    });
  }
}
