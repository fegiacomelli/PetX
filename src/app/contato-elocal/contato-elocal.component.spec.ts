import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoELocalComponent } from './contato-elocal.component';

describe('ContatoELocalComponent', () => {
  let component: ContatoELocalComponent;
  let fixture: ComponentFixture<ContatoELocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoELocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoELocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
