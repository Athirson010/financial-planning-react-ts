import * as M from "@mui/material";
import * as Styled from "./style";
import { z } from "zod";
import { Button, Input } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { set, useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod" 
import { useState } from "react";

const schemaModel = z.object({
  email: z.string().nonempty().email("Digite um e-mail valido!"),
  senha: z.string().min(8, "A senha deve ter no minimo 8 caracteres"),
});

type schemaModelType = z.infer<typeof schemaModel> 

export default function Login() {

  const [controlLoading, setControlLoading] = useState<boolean>(false);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<schemaModelType>({
      resolver: zodResolver(schemaModel),
    });

  const handleFormSubmit = (data: any) => {
    setControlLoading(true);
    setTimeout(() => {
      setControlLoading(false);
    }, 220)
    console.log(controlLoading);
  }  

  return (
    <Styled.Container>
      <Styled.BoxLeft />
      <Styled.BoxRight>
        <M.Box onSubmit={handleSubmit(handleFormSubmit)} component="form" noValidate sx={{ mt: 1 }}>
          <Styled.Logo />

          <M.Box sx={{ display: "block", width: "60%" }}>
            <Styled.Group>
              <Input
                {...register("email")}
                icon={<IconAt />}
                placeholder="Seu e-mail"
                radius="md"
                size="lg"
              />

              <Input
               {...register("senha")}
                type="password"
                placeholder="Digite sua senha"
                radius="md"
                size="lg"
              />
              
              <Button type="submit" style={{cursor: "pointer"}} loading={controlLoading} loaderPosition="center">Login</Button>
            </Styled.Group>
          </M.Box>
        </M.Box>
      </Styled.BoxRight>
    </Styled.Container>
  );
}
