import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import Google from "@mui/icons-material/Google";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" sx={{ padding: 2 }} fullWidth>
                <Typography>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" sx={{ padding: 2 }} fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container directon="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/register">
            Create account
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
