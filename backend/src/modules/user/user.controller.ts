import { Controller, Get } from '@nestjs/common';
import {
  Session,
  type UserSession,
  AllowAnonymous,
  OptionalAuth,
} from '@thallesp/nestjs-better-auth';
import { db } from '../../lib/db/drizzle';
import { user } from '../../lib/db/schema';

@Controller('users')
export class UserController {
  @Get()
  @AllowAnonymous()
  async getUsers() {
    return await db.select().from(user).limit(10);
  }

  @Get('me')
  async getProfile(@Session() session: UserSession) {
    return { user: session.user };
  }

  @Get('public')
  @AllowAnonymous()
  async getPublic() {
    return { message: 'Public route' };
  }

  @Get('optional')
  @OptionalAuth()
  async getOptional(@Session() session: UserSession) {
    return { authenticated: !!session };
  }
}
