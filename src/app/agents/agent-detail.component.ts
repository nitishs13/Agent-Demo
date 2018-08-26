import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';
import { IAgent } from './agent';


@Component({
  
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.css']
})
export class AgentDetailComponent implements OnInit {
  pageTitle: string = 'Agent Details';
  agent: IAgent;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.agent = {
      "agencyId": id,
      "agencyName": "We Insure",
      "agencyCode": "FLHOV1234",
      "submitted": "10/8/2018",
      "principal": "Remi Martin",
      "telephone": "1234528968",
      "status": "Under Review",
      "redirect": "https://www.relyonanchor.com/"
    }
  }

}
