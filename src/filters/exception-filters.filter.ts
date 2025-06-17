import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

@Catch()
export class ExceptionFiltersFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const erroHTTP = exception instanceof HttpException;
    const req = host.switchToHttp().getRequest();
    const retorno = host.switchToHttp().getResponse();
    const status = erroHTTP ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const res: any = erroHTTP && exception.getResponse();

    const payload = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url,
      message: res.message ?? 'Internal server error',
    }
    retorno.status(status).json(payload);
  }
}
