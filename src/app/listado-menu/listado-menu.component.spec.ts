import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMenuComponent } from './listado-menu.component';

describe('ListadoMenuComponent', () => {
  let component: ListadoMenuComponent;
  let fixture: ComponentFixture<ListadoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
