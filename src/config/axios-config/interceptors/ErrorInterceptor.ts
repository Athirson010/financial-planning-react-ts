import { AxiosError } from 'axios';
import { toast } from 'react-toastify';


export const errorInterceptor = (error: AxiosError) => {

  if (error.message === 'Network Error') {
    toast.error("Erro de conexão com o serviço")
    return Promise.reject(new Error('Erro de conexão.'));
  }

  if (error.response?.status === 403) {
   toast.error("Solicitação não autorizada.")
  }

  return Promise.reject(error);
};
