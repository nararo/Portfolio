import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../services/education.service';
import { Education } from '../../interfaces/education.interface';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe((data) => {
      this.educationList = data;
    });
  }
}
