import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Email = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const email = req.body.email;
    return email ?? '';
  }
)
