// import * as React from "react";
import Avatar from "@mui/material/Avatar";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import { FormHelperText } from "@mui/material";

// import { dark } from "@mui/material/styles/createPalette";

const department = [
  {
    dept: "Computer Science and Engineering",
  },
  {
    dept: "Electronics and Communication Engineering",
  },
  {
    dept: "Electrical and Electronics Engineering",
  },
  {
    dept: "Mechanical Engineering",
  },
  {
    dept: "Civil Engineering",
  },
  {
    dept: "Information Technology",
  },
  {
    dept: "Automobile Engineering",
  },
  {
    dept: "Aeronautical Engineering",
  },
  {
    dept: "Artificial Intelligence and Data Science",
  },
  {
    dept: "Robotics and Automation Engineering",
  },
  {
    dept: "Biotechnology Engineering",
  },
  {
    dept: "Chemical Engineering",
  },
  {
    dept: "Environmental Engineering",
  },
  {
    dept: "English Literature",
  },
  {
    dept: "History",
  },
  {
    dept: "Economics",
  },
  {
    dept: "Political Science",
  },
  {
    dept: "Psychology",
  },
  {
    dept: "Sociology",
  },
  {
    dept: "Journalism and Mass Communication",
  },
  {
    dept: "Visual Communication",
  },
  {
    dept: "Performing Arts (Music, Dance, Drama)",
  },
  {
    dept: "Philosophy",
  },
  {
    dept: "Linguistics and Languages (Tamil, Hindi, etc.)",
  },
  {
    dept: "Fine Arts",
  },
];

const years = [
  {
    year: "I YEAR",
  },
  {
    year: "II YEAR",
  },
  {
    year: "III YEAR",
  },
  {
    year: "IV YEAR",
  },
];

export default function SignUp() {
  // const isValid = departments && year;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let formValues = {};

    for (let [key, value] of data.entries()) {
      formValues[key] = value;
    }

    console.log(formValues);
    console.log(year);
    console.log(departments);

    try {
      const response = await fetch("http://localhost:8080/signup", {
        // replace with your API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error);
    }
  };

  const theme = createTheme({
    palette: {
      background: {
        default: "#f5f5f5", // Light grey background
      },
      primary: {
        main: "#000000", // Blue for primary actions and highlights
      },
      secondary: {
        main: "#000000", // Pink for secondary actions and highlights
      },
    },
  });

  const [id, setIdImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [year, setYear] = useState("");
  const [departments, setDepartments] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    setPhoneNumberError(!/^[7-9][0-9]{9}$/.test(event.target.value));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(event.target.value.length < 8);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!/^[A-Z0-9._%+-]+@skcet\.ac\.in$/i.test(event.target.value));
  };
  return (
    <ThemeProvider theme={theme}>
      {/* <Container
        component="main"
        maxWidth="xs"
        style={{ borderColor: "black" }}
      > */}
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* <CssBaseline /> */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, ml: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    onChange={(event) => {
                      setFirstName(event);
                    }}
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    onChange={(event) => {
                      setLastName(event);
                    }}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmailChange}
                    error={emailError}
                    helperText={
                      emailError
                        ? "Please ensure your email address ends with '@skcet.ac.in'."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={handlePasswordChange}
                    error={passwordError}
                    helperText={
                      passwordError
                        ? "Password must contain at least 8 characters"
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Phone Number"
                    label="Phone Number"
                    type="number"
                    id="Phone Number"
                    autoComplete="number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    error={phoneNumberError}
                  />
                  {phoneNumberError && (
                    <FormHelperText style={{ color: "red", fontSize: "13px" }}>
                      *Please enter a valid mobile number.
                    </FormHelperText>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <Autocomplete
                    required
                    id="dept"
                    sx={{ width: 300 }}
                    options={department}
                    onChange={(event, value) => setDepartments(value.dept)}
                    autoHighlight
                    getOptionLabel={(option) => option.dept}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        {option.dept}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Department"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password", // disable autocomplete and autofill
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    id="year"
                    sx={{ width: 300 }}
                    options={years}
                    autoHighlight
                    getOptionLabel={(option) => option.year}
                    onChange={(event, value) => setYear(value.year)}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        {option.year}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Year of Studying"
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password", // disable autocomplete and autofill
                        }}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="ID_IMG"
                    label="ID_CARD_IMG"
                    type="file"
                    onChange={(Event) => {
                      setIdImage(Event.target.files[0]);
                    }}
                    InputLabelProps={{
                      shrink: true,
                      style: { color: "#1976d2" },
                    }}
                  />

                  <FormHelperText style={{ color: "red" }}>
                    *Upload Your College_ID Image
                  </FormHelperText>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="ID_IMG"
                    label="Upload Your License"
                    type="file"
                    InputLabelProps={{
                      shrink: true,
                      style: { color: "#1976d2" },
                    }}
                    //    InputProps={{ multiline: true, type: "file" }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={
                  !departments ||
                  !year ||
                  !firstName ||
                  !lastName ||
                  !password ||
                  !phoneNumber ||
                  phoneNumberError ||
                  passwordError
                }
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Copyright sx={{ mt: 5 }} /> */}
      {/* </Container> */}
    </ThemeProvider>
  );
}
