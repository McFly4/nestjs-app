import { TaskValidationMiddleware } from './task-validator.middleware';

describe('TaskValidationMiddleware', () => {
  it('should be defined', () => {
    expect(new TaskValidationMiddleware()).toBeDefined();
  });
});
