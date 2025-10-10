import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, About, Experience, Skills, Education, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Portfólio Profissional - Wildiner Silva';
}
