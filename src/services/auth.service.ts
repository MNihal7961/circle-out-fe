import api from "../api/api";

class AuthService {
  static async signIn(email: string, password: string) {
    try {
      const res = await api.post('/auth/signin', { email, password });
      return res.data;
    } catch (error: any) {
      throw error.response?.data?.message || 'Sign in failed';
    }
  }

  static async signUp(email: string, password: string) {
    try {
      const res = await api.post('/auth/signup', { email, password });
      return res.data;
    } catch (error: any) {
      throw error.response?.data?.message || 'Sign up failed';
    }
  }

  static async refresh(userId: string, refreshToken: string) {
    try {
      const res = await api.post('/auth/refresh', { userId, refreshToken });
      return res.data;
    } catch (error: any) {
      throw error.response?.data?.message || 'Refresh failed';
    }
  }

  static async getMe() {
    try {
      const res = await api.get('/auth/me');
      return res.data;
    } catch (error: any) {
      throw error.response?.data?.message || 'Get user failed';
    }
  }
}

export default AuthService; 