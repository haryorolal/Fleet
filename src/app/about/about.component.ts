import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  comments = [    
    {
      id: '1',
      title: 'Fleet Maintenance ',
      content: " including preventative maintenance programs, customize programs tailored to customers, parts ordering, fleet management with software and warranty claims, and management of vehicles such as trucks, small to heavy-duty equipment and airport Ground Support Equipment"
    },
    {
      id: '2',
      title: 'Diagnostic and Repair of Diesel/Gas Engines',
      content: ' including engine performance, no starts, general repair, emission control systems, oil leaks, replacement of water pumps, gaskets, oil leaks, fuel injectors, pumps, alternators, starters and more.'
    },
    {
      id: '3',
      title: 'Diagnostic and Repair of Hydraulics',
      content: ' including replacement of directional hydraulic valves, motors, cylinders and pumps; In-house fabrication of hydraulic hoses and lines.'        
    },
    {
      id: '4',
      title: 'Diagnostic and Repair of Pneumatic Systems',
      content: '​ including replacement of air valves, air compressors, air drier, lines, hoses, brake chambers, rebuilt of air valves, etc.'
    },
    {
      id: '5',
      title: 'Diagnostic and Repair of Electrical Systems ',
      content: ' 12 and 24-volt DC systems, AC systems, electrical motors, lithium and alkaline batteries, relays, program logistic controls, time delay, sensors, switches.'
    },
     {
      id: '6',
      title: 'Repair & Replacement of Mechanical Systems',
      content: 'including bearings, conveyors chains, pins, suspension, steering, brakes, driveshafts, slack adjusters, linkages, cables, etc.'        
    },
    {
      id: '7',
      title: 'Paint and Body Repair',
      content: ' including partial or complete refurbishment of equipment: sand blasting, undercoating, welding, and fabrication'        
    }
  ]

}
