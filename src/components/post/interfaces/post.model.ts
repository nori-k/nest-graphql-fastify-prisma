import { Field, ObjectType, ID } from '@nestjs/graphql';
import { User } from '../../user/interfaces/user.model';

@ObjectType()
export class Post {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  content!: string | null;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  visible!: boolean | null;

  @Field(() => User, { nullable: true })
  author?: User | null;

  @Field(() => String, { nullable: false })
  authorId!: string;
}
