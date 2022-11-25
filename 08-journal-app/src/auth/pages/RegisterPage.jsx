import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

import { startCreatinUserWithEmailPassword } from "../../store/auth";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Email must have an @"],
  password: [
    (value) => value.length >= 6,
    "Password must be longer than 6 characters",
  ],
  displayName: [(value) => value.length >= 1, "Name is required"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  // console.log(displayNameValid);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatinUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Your name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{ padding: 2 }}
                fullWidth
              >
                <Typography>Create Account</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container directon="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>Already have an account? | </Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Login
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
