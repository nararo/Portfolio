import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  experienceList: any[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe((data) => {
      this.experienceList = data;
    });
  }
}
