import { Component, OnInit, Input } from '@angular/core';
import { Thumbnail } from 'src/app/models/thumbnail.model';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {
  @Input()
  public thumbnails: Thumbnail[] = [
    {
      image: '/assets/temp/images/thumbnail-image.png',
      title: 'Appointments',
      description: 'Mobile and video appointments with medical team'
    },
    {
      image: '/assets/temp/images/thumbnail-image.png',
      title: 'Consultations',
      description: 'Face-to-face consultation with local GP in 24 hours'
    },
    {
      image: '/assets/temp/images/thumbnail-image.png',
      title: 'Prescriptions',
      description: 'Convenient prescription and medication delivery'
    },
    {
      image: '/assets/temp/images/thumbnail-image.png',
      title: 'Sick notes',
      description: 'Instantly drafted and set to HR'
    },
    {
      image: '/assets/temp/images/thumbnail-image.png',
      title: 'Annual Health Check',
      description: 'For those on the Back to Work plan'
    },
    {
      image: '/assets/temp/images/thumbnail-image.png',
      title: 'Referrals',
      description: 'To specialist medical teams if required'
    },
    {
      image: '/assets/temp/images/thumbnail-image.png',
      title: 'Preventive Healthcare',
      description: 'We follow up with employees and send periodic advice'
    },
    {
      image: '/assets/temp/images/thumbnail-image.png',
      title: 'Symptom Checker',
      description: 'Specialist advice always on hand'
    }
  ]; 

  constructor() { }

  ngOnInit(): void { }
}
