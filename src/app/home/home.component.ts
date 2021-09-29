import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

  services = [    
    {
      id: '1',
      title: 'Local Client Strategy Managers ',
      url: 'assets/manager.jpg',
      content: "We will provide a single, consistent point of contact who’s been tasked to learn everything about your business and your fleet to maximize efficiency and cost savings. They will remember your birthday too."
    },
    {
      id: '2',
      title: 'Proactive Fleet Management',
      url: 'assets/proactive.jpeg',
      content: 'We’ll continuously monitor your fleet performance to ensure you’re buying and selling vehicles at the right time, staying on top of maintenance, and taking advantage of cost saving opportunities '
    },
    {
      id: '3',
      title: 'Buying and Selling',
      url: 'assets/buying.jpg',
      content: 'No other company buys and sells more vehicles than Enterprise. We bring that expertise and automotive market influence to you, making sure you enjoy higher resale values and the right prices for the right vehicles.'        
    },
    {
      id: '4',
      title: 'Transparent Pricing',
      url: 'assets/transparent.png',
      content: 'We don’t believe in hidden fees or surprise upcharges. What you see is what you get We do everything we can to ensure you have a clear view of your long-term fleet management spending.'
    },
    {
      id: '5',
      title: 'Fleet Planning Technology and Reporting ',
      url: 'assets/negotiate price.jpg',
      content: 'Our Fleet Planning Toolkit, Client Website, customizable dashboards, real-time alerts, eFleets Mobile App and self-service options make planning and operations simpler and clearer.'
    },
     {
      id: '6',
      title: 'Telematics',
      url: 'assets/telematics.jpg',
      content: 'State-of-the-art telematics software makes it easy to track fleet vehicles in real time Capture GPS tracking data and keep tabs on everything from the current dispatch situation to long-term driving pattern.'        
    },
    {
      id: '7',
      title: 'Maintenance Management',
      url: 'assets/maintenance.jpg',
      content: 'Don’t let surprise repairs and ongoing maintenance issues cut into your cash flow. Our fleet maintenance programs keep your company vehicles at their best, get them back on the road faster, and identify incredible cost saving opportunities.'
    },
    {
      id: '8',
      title: 'Vehicle Accident Management ',
      url: 'assets/accident.jpg',
      content: 'Accidents happen. When they do, we work to get your drivers and your vehicles back on the road while minimizing hassles. We work with local repair and body shops nationwide to get fleet vehicles repaired quickly and safely.'
    },
    {
      id: '9',
      title: 'Fuel Management',
      url: 'assets/fuel.png',
      content: 'Fuel Management Reduce fleet fuel expenditures with a fuel management program Accepted at 90% of U.S. fuel locations, you’ll be able to set controls, manage fuel purchases, authorize spending and gain peace of mind that your drivers always have an accepted payment method' 
     },
    {
      id: '10',
      title: 'Titles, Licensing, Registration ',
      url: 'assets/licencing.jpg',
      content: 'The bigger your fleet, the bigger the headache licensing and registration routines can be. We make it simple with an expert team available to handle the process from start to finish—for both current and new vehicles, in all 50 states.'
    }
  ]

}
