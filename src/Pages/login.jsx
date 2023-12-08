import React from "react";
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

const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const loginForm = () => {

    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log("ok");
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
                <h5>Complete this form to login in Connector!!</h5>
              </Typography>
              <Form onSubmit={handleSubmit}>
                <FormControl>
                  <TextField
                    className="mt-2"
                    id="outlined-multiline-flexible"
                    label="Enter Your Name"
                    type="text"
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                  ></TextField>
                </FormControl>
                <FormControl>
                  <TextField
                    className="mt-2"
                    id="outlined-multiline-flexible"
                    label="Enter Your Email"
                    type="email"
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                  ></TextField>
                </FormControl>
                <FormControl>
                  <TextField
                    className="mt-2"
                    id="outlined-multiline-flexible"
                    label="Enter Your Password"
                    type="password"
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                  ></TextField>
                </FormControl>
                <FormControl className="mt-2">
                  <div className="container">
                    <div className="radioBox">
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
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
                    id="outlined-multiline-flexible"
                    label="Enter Your discription "
                    type="text"
                    rows={4}
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                    multiline
                  ></TextField>
                </FormControl>
                <Button className="mt-3" variant="contained" type="submit">
                  Register Here
                </Button>
              </Form>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  };

  return (
    <div>
      <Box>
        <Box
          width="100%"
          backgroundColor={theme.palette.background.alt}
          p="1rem 6%"
          textAlign="center"
        >
          <Typography fontWeight="bold" fontSize="32px" color="primary">
            Connector
          </Typography>
        </Box>
        <Box
          className="text-center"
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
            Welcome to Connector, to Connect The Social Media for You!!
          </Typography>
          <div className="container">{loginForm()}</div>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
