import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent implements OnInit {
  listSkills: any[] = [];

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((data) => {
      this.listSkills = data;
    });
  }
}
