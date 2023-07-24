import { Box, Button, TextField } from "@mui/material";
import { BoxLeft, BoxRight, CampoTexto, Container, Logo } from "./styles";
import logo from "../../assets/logo2.png";
import { Label, LabelImportant } from "@mui/icons-material";

export default function Login() {
  return (
    <Container>
      <BoxLeft />
      <BoxRight>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Logo />
          <Box sx={{ display:"block", width: "50%" }}>
            <CampoTexto
              className=""
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="email"
              color="secondary"
              name="email"
              autoComplete="email"
            />
            <TextField
              sx={{  }}
              margin="normal"
              required
              color="info"
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </BoxRight>
    </Container>
  );
}
