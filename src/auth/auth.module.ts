import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtAuthModule } from 'src/jwt/jwt.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UsersModule, JwtAuthModule],
})
export class AuthModule {}
