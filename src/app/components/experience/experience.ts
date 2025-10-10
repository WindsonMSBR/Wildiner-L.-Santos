import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Experience as ExperienceModel } from '../../core/models';
import { ExperienceCard } from '../experience-card/experience-card';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements OnInit {
  experiences: ExperienceModel[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit() {
    this.experiences = this.portfolioDataService.getExperiences();
  }

  trackByCompany(index: number, experience: ExperienceModel): string {
    return experience.company;
  }
}
