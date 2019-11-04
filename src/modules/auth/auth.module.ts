import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './../../entities/user.entity';

import { JwtKey } from './../common/environment/environment';

@Module({
  imports : [
    TypeOrmModule.forFeature([ User ]),
    JwtModule.register({ 
      secret: JwtKey
    }),
  ],
  controllers : [ 
    AuthController 
  ],
  providers : [ 
    AuthService 
  ],
  exports : []
})
export class AuthModule {}
