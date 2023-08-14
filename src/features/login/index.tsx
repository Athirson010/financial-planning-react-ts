import * as M from "@mui/material";
import * as Styled from "./style";
import { z } from "zod";
import { Button, Input } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { auth } from "../../Services/AutenticacaoService";

const schemaModel = z.object({
  email: z.string()
          .nonempty()
          .email("Digite um e-mail valido!"),
  senha: z.string()
          .min(8, "A senha deve ter no minimo 8 caracteres"),
})

type schemaModelType = z.infer<typeof schemaModel>;

export default function Login() {
  const [controlLoading, setControlLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaModelType>({
    resolver: zodResolver(schemaModel)
  });

  const handleFormLogin = async (values: schemaModelType) => {
    setControlLoading(true);
    await auth(values.email, values.senha);
    setControlLoading(false);
  };

  return (
    <Styled.Container>
      <Styled.BoxLeft />
      <Styled.BoxRight>
        <M.Box
          onSubmit={handleSubmit(handleFormLogin)}
          component="form"
          sx={{ mt: 1 }}
        >
          <Styled.Logo />

          <M.Box sx={{ display: "block", width: "60%" }}>
            <Styled.Group>
              <Input
                {...register("email")}
                icon={<IconAt />}
                placeholder="Seu e-mail"
                error={errors.email?.message}
                radius="md"
                size="lg"
              />

              <Input
                {...register("senha")}
                type="password"
                placeholder="Digite sua senha"
                error={errors.senha?.message}
                radius="md"
                size="lg"
              />

              <Button
                type="submit"
                color="teal"
                loading={controlLoading}
                uppercase
              >
                Entrar
              </Button>

              <M.Grid container marginTop="2rem">
                <M.Grid item xs>
                <M.Typography color="#f5f5f1">
                    <M.Link  style={{ cursor: "pointer" }} href="/register" color="inherit">
                      Criar conta
                    </M.Link>
                  </M.Typography>
                </M.Grid>
                <M.Grid item>
                <M.Typography color="#f5f5f1">
                    <M.Link  style={{ cursor: "pointer" }} href="#" color="inherit">
                      Esqueci a senha
                    </M.Link>
                  </M.Typography>
                </M.Grid>
              </M.Grid>
            </Styled.Group>
          </M.Box>
        </M.Box>
      </Styled.BoxRight>
    </Styled.Container>
  );
}
