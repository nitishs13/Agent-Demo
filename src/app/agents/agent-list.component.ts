import { Component, OnInit } from "@angular/core";
import { IAgent } from "./agent";
import { AgentService } from "./agent.service";

@Component({
    templateUrl: './agent-list.component.html',
    styleUrls: ['./agent-list.component.css'],
})

export class AgentListComponent implements OnInit{
pageTitle: string = 'List of Agencies';
showDisplayDetails: boolean = false;
errorMessage: string;

_listFilter: string;                   //Agent Filter Block
get listFilter(): string {
    return this._listFilter
}
set listFilter(value:string){
    this._listFilter = value;
    this.filteredAgents = this.listFilter ? this.performFilter(this.listFilter) : this.agents;
}

filteredAgents: IAgent[];
agents: IAgent[] = [];

constructor(private agentService: AgentService){ //dependanct injection code for the angular.product service
}

performFilter(filterBy: string):IAgent[]{            //Agent Filter block
    filterBy = filterBy.toLocaleLowerCase();
    return this.agents.filter((agent: IAgent)=>
        agent.agencyName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

toggleDisplay(): void {
   this.showDisplayDetails = !this.showDisplayDetails; 
}

ngOnInit(): void {
    this.agentService.getAgents().subscribe(
        agents => {this.agents = agents
            this.filteredAgents = this.agents;
        },
        error => this.errorMessage = <any>error
        );   
    }
}