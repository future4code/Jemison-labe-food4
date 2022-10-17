import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ImageStyle } from "./styled";
import { Formik } from "formik";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [ConfirmPassword, setConfirmPassword] = useState(false);
  const onClickConfirmPassword = () => {
    setConfirmPassword(!ConfirmPassword);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "22.5rem",
        height: "40rem;",
        padding: "16px",
        margin: "0 auto",
      }}
    >
      <ImageStyle
        src="/assets/logo-future-eats-invert.png"
        alt="labefood logo"
      />
      <Typography
        textAlign="center"
        as="h1"
        sx={{
          width: "20.5rem",
          height: " 2.625rem",
          fontFamily: "Roboto",
          fontSize: "1rem",
          fontWeight: "normal",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "normal",
          letterSpacing: "-0.39px",
          textAlign: "center",
          color: "#000",
        }}
      >
        Cadastrar
      </Typography>

      <Formik
        initialValues={{
          name: "",
          email: "",
          cpf: "",
          password: "",
          confirm: "",
        }}
        onSubmit={(values) => {
          console.log(values.name);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Box sx={{ width: "22.5rem" }}>
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                sx={{
                  width: "20.5rem",
                  margin: "10px 0px",
                  borderRadius: "2px",
                  borderColor: "#b8b8b8",
                }}
                label="Nome"
                required
                onChange={handleChange}
                value={values.name}
              />
              <TextField
                name="email"
                sx={{
                  width: "20.5rem",
                  margin: "10px 0px",
                  borderRadius: "2px",
                  borderColor: "#b8b8b8",
                }}
                label="Email"
                required
                onChange={handleChange}
                value={values.email}
              />
              <TextField
                name="cpf"
                sx={{
                  width: "20.5rem",
                  margin: "10px 0px",
                  borderRadius: "2px",
                  borderColor: "#b8b8b8",
                }}
                label="CPF"
                required
                onChange={handleChange}
                value={values.cpf}
              />
              <TextField
                name="password"
                sx={{
                  width: "20.5rem",
                  margin: "10px 0px",
                  borderRadius: "2px",
                  borderColor: "#b8b8b8",
                }}
                label="Senha"
                required
                onChange={handleChange}
                value={values.password}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <Box
                      onClick={onClickShowPassword}
                      sx={{ cursor: "pointer" }}
                    >
                      <InputAdornment position="end">
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </InputAdornment>
                    </Box>
                  ),
                }}
              />
              <TextField
                name="confirm"
                sx={{
                  width: "20.5rem",
                  margin: "10px 0px",
                  borderRadius: "2px",
                  borderColor: "#b8b8b8",
                }}
                label="Confirmar"
                required
                onChange={handleChange}
                value={values.confirm}
                type={ConfirmPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <Box
                      onClick={onClickConfirmPassword}
                      sx={{ cursor: "pointer" }}
                    >
                      <InputAdornment position="end">
                        {ConfirmPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </InputAdornment>
                    </Box>
                  ),
                }}
              />
              <Button
                variant="solid"
                sx={{
                  bgcolor: "#e8222e",
                  textTransform: "unset",
                  width: "20.5rem",
                  height: " 2.625rem",
                  fontFamily: "Roboto",
                  fontSize: "1rem",
                  fontWeight: "normal",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: "normal",
                  letterSpacing: "-0.39px",
                  textAlign: "center",
                  color: "#000",
                  "&:hover": {
                    bgcolor: "white",
                    border: "1px solid #e8222e",
                    color: "#e8222e",
                  },
                  border: "1px solid black",
                }}
                type="submit"
              >
                Criar
              </Button>
            </form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};
