import {
  Alert,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import colorConfigs from "../../../configs/colorConfigs";
import ButtonUI from "../button/ButtonUI";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Show from "../../../utils/Show";
import AuthContext from "../../../hooks/context/AppContext";

const inputStyle = {
  width: "100%",
  bgcolor: colorConfigs.input.bg,
};

const isEmail = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const LoginForm = () => {
  const navigation = useNavigate();
  const { setAuth } = useContext(AuthContext);

  //use Ref
  const userRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //inputs errors
  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  //Overall Form Validity
  const [formValid, setFormValid] = useState<string | null>(null);

  // Handles Display and Hide Password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  //useEffect
  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    if (formValid) {
      setUsernameError("");
      setPasswordError("");
    }
  }, [formValid]);

  useEffect(() => {
    if (usernameError || passwordError) {
      setFormValid("");
    }
  }, [usernameError, passwordError]);

  // Validation for onBlur
  const onBlurUsername = () => {
    console.log(isEmail(username));

    if (!username) {
      setUsernameError("Username is required!");
      return;
    }
    if (!isEmail(username)) {
      setUsernameError("Invalid username!");
      return;
    }
    setUsernameError("");
  };
  const onBlurPassword = () => {
    if (!password) {
      setPasswordError("Password is required!");
      return;
    }
    setPasswordError("");
  };

  const handleSubmit = async () => {
    if (!username && !password) {
      setFormValid("Username or password is invalid!");
      return;
    }
    toast.success("Login successfully!");
    navigation("/dashboard");
    setAuth({ username });
    sessionStorage.setItem("auth", JSON.stringify({ username }));
    setFormValid(null);
  };

  return (
    <Stack spacing={2} width="70%">
      <TextField
        sx={inputStyle}
        name="username"
        placeholder="Enter Email"
        variant="outlined"
        error={!!usernameError}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={onBlurUsername}
        ref={userRef}
        fullWidth
        required
      />
      <Show>
        <Show.When isTrue={!!usernameError}>
          <Alert severity="error">{usernameError}</Alert>
        </Show.When>
      </Show>

      <TextField
        sx={inputStyle}
        name="password"
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
        required
        error={!!passwordError}
        onBlur={onBlurPassword}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Show>
        <Show.When isTrue={!!passwordError}>
          <Alert severity="error">{passwordError}</Alert>
        </Show.When>
      </Show>
      <Show>
        <Show.When isTrue={!!formValid}>
          <Alert severity="error">{formValid}</Alert>
        </Show.When>
      </Show>
      <Typography
        variant="body2"
        sx={{
          fontStyle: "italic",
          color: "gray",
          placeSelf: "end",
        }}
      >
        <a href="#">Forgot Password?</a>
      </Typography>
      <ButtonUI onClick={handleSubmit} title="Sign In" />
    </Stack>
  );
};

export default LoginForm;
