import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-preview',
  templateUrl: './website-preview.component.html',
  styleUrls: ['./website-preview.component.css']
})
export class WebsitePreviewComponent implements OnInit {
  style = 'aurora';
  content = { brand: 'Nexora', headline: 'Build products people love.', description: 'The simple workspace for ambitious teams to plan, create, and grow.', buttonText: 'Start for free', navOne: 'Features', navTwo: 'Stories', sectionTitle: 'Everything your best work needs.', sectionDescription: 'A complete toolkit designed to help you move with clarity and confidence.', featureOne: 'One clear workspace', featureTwo: 'Designed for flow', featureThree: 'Move with confidence', testimonial: 'This changed how our team works together every day.' };

  ngOnInit(): void {
    const saved = localStorage.getItem('portfolio-theme-preview');
    if (saved) { const preview = JSON.parse(saved); this.style = preview.style; this.content = preview.content; }
  }
}
