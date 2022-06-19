import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { UserCreateInput } from './interfaces/user-create.input';
import { User } from './interfaces/user.model';

@Resolver()
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => User, { description: 'User,ID指定単数取得' })
  async getOneUserByID(@Args('userId') input: string): Promise<User> {
    return await this.prisma.user.findFirst({ where: { id: input } });
  }

  @Query(() => [User], { description: 'User, ID指定複数取得' })
  async getManyUserByIDs(input: string[]): Promise<User[]> {
    return await this.prisma.user.findMany({ where: { id: { in: input } } });
  }

  @Query(() => [User], { description: 'User, ID指定なし複数取得' })
  async getAllUser() {
    return await this.prisma.user.findMany();
  }

  @Mutation(() => User, { description: 'User, 単数登録' })
  async createUser(
    @Args('userCreateInput') input: UserCreateInput,
  ): Promise<User> {
    return await this.prisma.user.create({ data: input });
  }
}
