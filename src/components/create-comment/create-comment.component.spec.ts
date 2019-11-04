import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateCommentComponent } from './create-comment.component';

describe('CreateCommentComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CreateCommentComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CreateCommentComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'publications-and-comments'`, () => {
    const fixture = TestBed.createComponent(CreateCommentComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('publications-and-comments');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CreateCommentComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to publications-and-comments!');
  });
});
