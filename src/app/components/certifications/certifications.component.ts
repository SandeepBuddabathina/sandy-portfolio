import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'React (Basic)',
      issuer: 'HackerRank',
      date: 'Recent',
      description: 'Demonstrated fundamental knowledge of React routing, hooks, state management, and component architecture.',
      image: 'assets/images/hacker-rank-react-cerificate.png',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7340720527243649024/'
    },
    {
      title: 'Claude Code in Action',
      issuer: 'Anthropic',
      date: 'Recent',
      description: 'Showcased ability to leverage Claude and Anthropic tools for building advanced AI-powered applications.',
      image: 'assets/images/ai-cerificate.png',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7437336719655448576/'
    },
    {
      title: 'Software Engineering Internship',
      issuer: 'Slashmark',
      date: 'Recent',
      description: 'Successfully completed a comprehensive software engineering internship, gaining hands-on experience in full-stack development.',
      image: 'assets/images/internship-cericiate.png',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7192545319526522880/'
    },
    {
      title: 'SQL Certification',
      issuer: 'Oracle Dev Gym',
      date: 'Recent',
      description: 'Earned certification demonstrating strong proficiency in SQL querying, database design, and relational data management.',
      image: 'assets/images/sql-certificate.png',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7254873972905816065/'
    }
  ];
}
