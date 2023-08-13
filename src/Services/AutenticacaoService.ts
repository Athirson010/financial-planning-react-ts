import { toast } from 'react-toastify';
import { Api } from '../config/axios-config';

interface ILogin {
    login: string;
    token: string;
}

export const auth = async (email:string, senha: string): Promise<ILogin | Error> => {
    try {
      const data: ILogin = await Api.post('/usuarios/autenticar', { email, senha });
  
      if (data) {
        return data;
      }
      return new Error('Erro no login.');
    } catch (error) {
     // toast.error("Falha ao comunicar com o serviço.");
      return new Error((error as { message: string }).message || 'Erro no login.');
    }
  };

