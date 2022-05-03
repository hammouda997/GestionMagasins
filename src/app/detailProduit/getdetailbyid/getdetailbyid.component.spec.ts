import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdetailbyidComponent } from './getdetailbyid.component';

describe('GetdetailbyidComponent', () => {
  let component: GetdetailbyidComponent;
  let fixture: ComponentFixture<GetdetailbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdetailbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdetailbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
