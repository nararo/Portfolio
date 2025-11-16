import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillComponent } from '../skill/skill.component';
import { EducationComponent } from '../education/education.component';
import { ProjectComponent } from '../project/project.component';
import { ResourceComponent } from '../resource/resource.component';
import { QuoteComponent } from '../quote/quote.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillComponent,
    EducationComponent,
    QuoteComponent,
    ProjectComponent,
    ResourceComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
