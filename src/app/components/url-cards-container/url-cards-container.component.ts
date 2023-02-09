import { Component, OnInit, Output } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'app-url-cards-container',
  templateUrl: './url-cards-container.component.html',
  styleUrls: ['./url-cards-container.component.scss'],
})
export class UrlCardsContainerComponent implements OnInit {
  public links!: Link[];
  constructor(private linkService: LinkService) {}

  ngOnInit(): void {
    this.getLinks();
  }

  getLinks() {
    this.linkService.getLinks().subscribe((links: Link[]) => {
      this.links = links;
    });
  }
}
