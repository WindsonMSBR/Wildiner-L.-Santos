import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Skill } from '../../core/models';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements OnInit {
  skills: Skill[] = [];
  certifications: Skill[] = [];
  technicalSkills: Skill[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit() {
    this.skills = this.portfolioDataService.getSkills();
    this.certifications = this.skills.filter(skill => skill.type === 'certification');
    this.technicalSkills = this.skills.filter(skill => skill.type === 'technical');
  }
}
