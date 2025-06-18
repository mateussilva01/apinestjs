import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Usuario = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req.email;
  }
)

