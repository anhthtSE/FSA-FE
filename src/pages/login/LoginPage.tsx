import { Grid, Paper, Stack, Typography } from "@mui/material";

import "./LoginPage.css";
import LoginForm from "../../components/ui/forms/LoginForm";

const LoginPage = () => {
  return (
    <Grid
      container
      className="grid-style"
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}></Grid>
      <Grid item xs={4} textAlign="center">
        <Paper
          elevation={10}
          sx={{
            height: "auto",
            width: "auto",
            padding: "40px",
            position: "relative",
          }}
        >
          <Stack spacing={8} alignItems="center">
            <Stack spacing={4}>
              <Typography variant="h3">
                FPT Fresh Academy Training Management
              </Typography>
              <Typography variant="body2">
                If you don’t have the account, please contact &nbsp;
                <a
                  style={{ color: "blue" }}
                  href="https://fsoft-academy.edu.vn/"
                >
                  https://fsoft-academy.edu.vn/
                </a>
              </Typography>
            </Stack>
            <LoginForm />
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
