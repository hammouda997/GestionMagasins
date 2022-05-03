import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailFactureComponent } from './list-detail-facture.component';

describe('ListDetailFactureComponent', () => {
  let component: ListDetailFactureComponent;
  let fixture: ComponentFixture<ListDetailFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetailFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
