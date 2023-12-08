import React from "react";
import WelNav from "../Component/WelNav";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Service/user.service";

const Register = () => {

  const { palette } = useTheme();
  const navigate = useNavigate();
  const [formField, setformField] = useState({
    email: "",
    password: ""
  });
  const registerForm = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("ok");
      console.log(formField);
      loginUser(formField).then((data)=>{
        console.log(data);
        navigate("/")
      }).catch((error)=>{
        console.log(error);
      })
    };

    const handleChange = (value, event) => {
      setformField({
        ...formField,
        [value]: event.target.value,
      });
    };
    const resetForm = () => {
      setformField({
        email: "",
        password: ""
      });
    };

    return (<>
    <Box sx={{ minWidth: 275  , boxShadow: 1 , border:"none"}}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
              </Typography>
              <Form onSubmit={handleSubmit}>
                <FormControl>
                  <TextField
                    className="mt-2"
                    id="email"
                    label="Enter Your Email"
                    type="email"
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                    name="email"
                    value={formField.email}
                    onChange={(event)=> handleChange("email" , event)}
                  ></TextField>
                </FormControl>
                <FormControl>
                  <TextField
                    className="mt-2"
                    id="password"
                    label="Enter Your Password"
                    type="password"
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                    name="password"
                    value={formField.password}
                    onChange={(event)=> handleChange("password" , event)}
                  ></TextField>
                </FormControl>
                <div className="container">
                <Button className="mt-3" variant="contained" type="submit">
                  Login Here
                </Button>
                </div>

                <Typography
                  onClick={() => {
                    navigate("/register")
                    resetForm();
                  }}
                
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.dark,
                },
              }}
            >
              
                 "Already have an account? Login  here."
            </Typography>
              </Form>
            </CardContent>
          </Card>
        </Box>
    </>);
  };
  return (
    <div>
      <WelNav loginForm={registerForm} text={"Complete this Form to Sign In!!"} />
    </div>
  );
};

export default Register;
