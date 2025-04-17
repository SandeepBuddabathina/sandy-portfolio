import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Video Conferencing App',
      description: 'Real-time video conferencing using WebRTC, Socket.io, Angular, and Node.js.',
      techStack: ['Angular', 'WebRTC', 'Node.js', 'Socket.io'],
      image: 'assets/projects/video-app.png',
      github: 'https://github.com/SandeepBuddabathina/videocall.git',
      live: 'https://videocall-kappa-six.vercel.app/video-call/test123'
    },
    {
      title: 'Weather Forecast',
      description: 'A real-time weather forcasting with celcius and the fahrenheit and wind flow.',
      techStack: ['HTML', 'CSS', 'Javascript'],
      image: 'assets/projects/weather.png',
      github: 'https://github.com/SandeepBuddabathina/weather-app',
      live: 'https://weatherwebbs.netlify.app/'
    },
    {
      title: 'Food Ordering Application (Frontend)',
      description: 'A basic frontend food ordering application with a user-friendly interface.',
      techStack: ['Html', 'Css', 'Javascript'],
      image: 'assets/projects/food-app.png',
      github: 'https://github.com/SandeepBuddabathina/food-web.git',
      live: 'https://regal-snickerdoodle-5a8638.netlify.app/'
    } 
  ];
}
