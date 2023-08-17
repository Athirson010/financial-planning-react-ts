import { Api } from '../config/axios-config';

interface ILogin {
    login: string;
    token: string;
}

export const auth = async (email:string, senha: string) => {
    const response = await Api.post('/usuarios/autenticar', { email, senha });
    return response.data;
};

