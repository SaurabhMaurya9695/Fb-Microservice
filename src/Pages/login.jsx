import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import WelNav from "../Component/WelNav"

const Login = () => {

  const { palette } = useTheme();
  const navigate = useNavigate();
  const [formField , setformField] = useState({
      name : "",
      email : "",
      gender :"",
      password :"",
      bio :""
  })
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const loginForm = () => {

    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log("ok");
      console.log(formField);
    }

    const handleChange =(value , event)=>{
      setformField({
        ...formField,
        [value]: event.target.value
      })


    }

    const resetForm = () =>{
      setformField({
        name : "",
        email : "",
        gender :"",
        password :"",
        bio :""
      })
    }


    return (
      <>
        <Box sx={{ minWidth: 275  , boxShadow: 1}}>
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
                    id="name"
                    label="Enter Your Name"
                    type="text"
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                    name="name"
                    value={formField.name}
                    onChange={(event)=> handleChange("name" , event)}
                  ></TextField>
                </FormControl>
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
                <FormControl className="mt-2">
                <div className="container">
                    <div className={isNonMobileScreens ?"radioBox":"radioBox1" }>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={formField.gender}
                        onChange={(event)=>{
                          setformField({
                            ...formField,
                            "gender":event.target.value
                          })
                        }}
                      >
                        <div>
                          <Row>
                            <Col>
                              <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                              />
                            </Col>
                            <Col>
                              <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                              />
                            </Col>
                          </Row>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </FormControl>
                <FormControl>
                  <TextField
                    className="mt-2"
                    id="text"
                    label="Enter Your discription "
                    type="text"
                    rows={4}
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                    multiline
                    name="bio"
                    value={formField.bio}
                    onChange={(event)=> handleChange("bio" , event)}
                  ></TextField>
                </FormControl>
                <div className="container">
                <Button className="mt-3" variant="contained" type="submit">
                  Register Here
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
              
                 "Don't have an account? Sign Up here."
            </Typography>
              </Form>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  };

  return (
    <div>
      <WelNav loginForm={loginForm} text={"Complete this form to Register in Connector!!"}/>
      
    </div>
  );
};

export default Login;
