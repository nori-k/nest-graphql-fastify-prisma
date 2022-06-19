import { Field, ObjectType, ID, Int, registerEnumType } from '@nestjs/graphql';
import { Post } from '../../post/interfaces/post.model';

@ObjectType()
export class UserCount {
  @Field(() => Int, { nullable: false })
  posts?: number;
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

registerEnumType(Gender, { name: 'Gender', description: undefined });

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  name!: string | null;

  @Field(() => Gender, { nullable: false })
  gender!: keyof typeof Gender;
}
