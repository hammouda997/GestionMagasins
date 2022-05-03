import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdetailProduitComponent } from './listdetail-produit.component';

describe('ListdetailProduitComponent', () => {
  let component: ListdetailProduitComponent;
  let fixture: ComponentFixture<ListdetailProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdetailProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdetailProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
