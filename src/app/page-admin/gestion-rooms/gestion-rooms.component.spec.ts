import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRoomsComponent } from './gestion-rooms.component';

describe('GestionRoomsComponent', () => {
  let component: GestionRoomsComponent;
  let fixture: ComponentFixture<GestionRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
