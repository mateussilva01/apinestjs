import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return false;
    }
    try {
      const secret = this.configService.get('JWT_SECRET');
      const payload = this.jwtService.verify(token, {secret})
      const dataAtual = (Date.now() / 1000) | 0;
      if (payload.exp < dataAtual) {
        throw new Error();
      }
      console.log(payload);
    } catch (e: unknown) {
        return false;
    }
    return true;
  }
}
