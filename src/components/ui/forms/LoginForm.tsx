import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import colorConfigs from "../../../configs/colorConfigs";
import ButtonUI from "../button/ButtonUI";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const inputStyle = {
  width: "100%",
  bgcolor: colorConfigs.input.bg,
};

const LoginForm = () => {
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onBlurUsername = () => {
    if (!username) {
      setUsernameError("Username is required");
    } else {
      setUsernameError(null);
    }
  };
  const onBlurPassword = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (username && password) {
      toast.success("Login successfully!");
      navigation("/dashboard");
    }
  };

  return (
    <Stack spacing={2} width="70%">
      <TextField
        sx={inputStyle}
        name="username"
        placeholder="Enter Username"
        variant="outlined"
        error={!!usernameError}
        helperText={usernameError}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={onBlurUsername}
        fullWidth
        required
      />
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
        helperText={passwordError}
        onBlur={onBlurPassword}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
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
