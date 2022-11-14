import { ValidationPipe } from '@nestjs/common';

export const validationPipe = new ValidationPipe({
  whitelist: true,
  transform: true,
});
