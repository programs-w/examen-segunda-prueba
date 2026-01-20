import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTarea } from './editar-tarea';

describe('EditarTarea', () => {
  let component: EditarTarea;
  let fixture: ComponentFixture<EditarTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarTarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTarea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
