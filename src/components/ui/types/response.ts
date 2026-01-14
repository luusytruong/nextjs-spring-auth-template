export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
  access_token?: string;
  refresh_token?: string;
}
