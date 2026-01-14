export type UserRole = "ROLE_USER" | "ROLE_ADMIN";

export interface BaseUser {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
}

export interface FullUser extends BaseUser {
  phone?: string;
  avatar?: string;
  city?: string;
  ward?: string;
  district?: string;
  address?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  full_name: string;
  password_confirmation: string;
}
