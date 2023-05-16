import { Layout } from "../../style/global";
import { Modal } from "./styles";
import { ModalConteudo } from "./styles";
import  logoSemFundo  from "../../assets/logo-sem-texto.png"

export default function Login() {
  return (
   <Layout>
    <Modal>
        <ModalConteudo>
            <img src={logoSemFundo} alt="Logo" width='60%'/>
        </ModalConteudo>
    </Modal>
   </Layout>
  );
}
