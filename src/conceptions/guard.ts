import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    console.log('guard');
    const request = context.switchToHttp().getRequest<Request>();
    const isAuth = request.headers.authorization === 'secret';

    if (!isAuth) throw new UnauthorizedException('You dont authorization');

    return isAuth;
  }
}
