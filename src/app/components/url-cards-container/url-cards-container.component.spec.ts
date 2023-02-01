import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlCardsContainerComponent } from './url-cards-container.component';

describe('UrlCardsContainerComponent', () => {
  let component: UrlCardsContainerComponent;
  let fixture: ComponentFixture<UrlCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlCardsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
