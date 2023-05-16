import { Layout, Linha } from "../../style/global";
import { ModalConteudo, Modal, Centralizador, Formulario } from "./styles";
import  logoSemFundo  from "../../assets/logo3.png"

export default function Login() {
  return (
   <Layout>
    <Modal>
        <ModalConteudo>
          <Centralizador>
            <img src={logoSemFundo} alt="Logo" />
            <Formulario>
            <form>
                <input type="text" placeholder="Digite seu e-mail" name="name" />
                <input type="password" placeholder="Digite sua senha" name="senha" />
            </form>
           
            <input type="submit"  value="Entrar" />
            <span>Esqueceu sua senha ?</span>
            <Linha></Linha>
            <input type="submit"  value="Criar nova conta" />
            </Formulario>
         </Centralizador>
        </ModalConteudo>
    </Modal>
   </Layout>
  );
}
