export interface User {
  id: string;
  created_at: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface CreateUserDTO
  extends Omit<User, 'id' | 'created_at' | 'avatar'> {}
export interface LoginUserDTO
  extends Omit<User, 'id' | 'name' | 'created_at' | 'avatar'> {}
