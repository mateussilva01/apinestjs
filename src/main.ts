import { NestFactory } from '@nestjs/core';
import { ExceptionFiltersFilter } from 'src/filters/exception-filters.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExceptionFiltersFilter())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
