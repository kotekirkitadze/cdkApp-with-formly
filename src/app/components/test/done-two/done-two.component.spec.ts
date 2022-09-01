import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTwoComponent } from './done-two.component';

describe('DoneTwoComponent', () => {
  let component: DoneTwoComponent;
  let fixture: ComponentFixture<DoneTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
