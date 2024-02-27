import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../../../hooks/context/AppContext";
import Show from "../../../utils/Show";

const textStyle = {
  cursor: "pointer",
};

const Profile = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const navigator = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, [setAuth]);

  useEffect(() => {
    const handlePopstate = () => {
      // Xử lý khi sự kiện popstate xảy ra (khi người dùng nhấn nút quay lại)
      toast.warning("You have been logged out");
      setAuth({});
      navigator("/");
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      // Làm sạch sự kiện khi component unmount
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [setAuth, navigator]);

  const logOut = (event: React.MouseEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    toast.success("Logout successfully");
    setAuth({});
    localStorage.removeItem("auth");
    navigator("/");
  };

  return (
    <Show>
      <Show.When isTrue={!!auth.username}>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar alt={auth.username} />
          <Box
            sx={{
              width: "100px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <Typography>{auth.username}</Typography>
            <Typography sx={textStyle} onClick={logOut} variant="subtitle2">
              Log out
            </Typography>
          </Box>
        </Stack>
      </Show.When>
    </Show>
  );
};

export default Profile;
