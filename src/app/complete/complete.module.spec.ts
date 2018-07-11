import { CompleteModule } from './complete.module';

describe('CompleteModule', () => {
  let completeModule: CompleteModule;

  beforeEach(() => {
    completeModule = new CompleteModule();
  });

  it('should create an instance', () => {
    expect(completeModule).toBeTruthy();
  });
});
