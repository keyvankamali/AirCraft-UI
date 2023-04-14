import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAirCraftComponent } from './registeration.component';

describe('AddAirCraftComponent', () => {
  let component: AddAirCraftComponent;
  let fixture: ComponentFixture<AddAirCraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAirCraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAirCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
