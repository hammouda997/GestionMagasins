import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailProduitComponent } from './edit-detail-produit.component';

describe('EditDetailProduitComponent', () => {
  let component: EditDetailProduitComponent;
  let fixture: ComponentFixture<EditDetailProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDetailProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
