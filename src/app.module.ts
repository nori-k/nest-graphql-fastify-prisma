import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './modules/prisma/prisma.service';
import { UserModule } from './components/user/user.module';
import { PostModule } from './components/post/post.module';

const envbool = process.env.NODE_ENV !== 'production';
@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: envbool
        ? join(process.cwd(), 'src/generated/schema.gql')
        : true,
      sortSchema: envbool,
      graphiql: envbool,
    }),
    UserModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
