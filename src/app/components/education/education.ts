import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education implements OnInit {
  education: any[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit() {
    this.education = this.portfolioDataService.getEducation();
  }
}
