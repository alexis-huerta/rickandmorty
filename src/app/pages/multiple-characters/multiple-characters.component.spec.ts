import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCharactersComponent } from './multiple-characters.component';

describe('MultipleCharactersComponent', () => {
  let component: MultipleCharactersComponent;
  let fixture: ComponentFixture<MultipleCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
