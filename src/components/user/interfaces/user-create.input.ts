import { Field, InputType } from '@nestjs/graphql';
import { Gender } from './user.model';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Gender, { nullable: false })
  gender!: keyof typeof Gender;
}
