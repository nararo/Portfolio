import { Component } from '@angular/core';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ResourceComponent } from './components/resource/resource.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SkillComponent } from './components/skill/skill.component';
import { QuoteComponent } from './components/quote/quote.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, FooterComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  protected title = 'porfolio';

  theme: string = 'light-mode';
  language: string = 'ES';

  onThemeChange(newTheme: string) {
    this.theme = newTheme;
  }

  onLanguageChange(newLanguage: string) {
    this.language = newLanguage;
  }
}
