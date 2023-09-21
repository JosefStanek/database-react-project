import axios from "axios";
import {
  Typography,
  Grid,
  Box,
  Card,
  Divider,
  TextField,
  Button,
  Snackbar,
  Stack,
  Alert,
} from "@mui/material";
import { Form, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";

export const HelpDesk = () => {
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const data = useActionData();
  const handleClick = () => {
    setConfirmDialog(true);
  };
  useEffect(() => {
    if (data) {
      console.log(data);
      handleClick();
      setEmail("");
      setMessage("");
    }
  }, [data]);

  return (
    <>
      <Box>
        <Snackbar
          open={confirmDialog}
          onClose={() => setConfirmDialog(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={4000}
        >
          <Alert
            onClose={() => setConfirmDialog(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Zpráva byla úspěšně odeslána.
          </Alert>
        </Snackbar>
      </Box>

      {/* test */}
      <Typography
        variant="h4"
        textAlign={"center"}
        mt={4}
        textTransform={"uppercase"}
        fontWeight={800}
        color={"primary"}
      >
        Nevíte si rady?
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        Kontaktujte nás.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"center"}>
            <Card
              sx={{ padding: "2rem", marginTop: "1rem", maxWidth: "600px" }}
              elevation={4}
            >
              <Typography variant="h6" textAlign={"left"}>
                Telefonem
              </Typography>
              <Typography variant="body1" textAlign={"left"}>
                V připadě nesrovnalosti či nefunkčnosti sw nás prosím
                kontaktujte na telefon:
                <span style={{ color: "#1976d2" }}> +420 777 555 222</span>
              </Typography>
              <Box m={2}>
                <Divider />
              </Box>
              <Typography variant="h6" textAlign={"left"}>
                Emailem
              </Typography>
              <Typography variant="body1" textAlign={"left"}>
                Můžete nás také kontaktovat pomocí emailové stránky
                <span style={{ color: "#1976d2" }}> test@test.cz</span>
              </Typography>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"center"}>
            <Card
              sx={{
                padding: "2rem",
                marginY: "1rem",
                maxWidth: "600px",
                width: "600px",
              }}
              elevation={4}
            >
              <Typography
                variant="h6"
                textTransform={"uppercase"}
                textAlign={"center"}
                m={2}
                color={"primary"}
              >
                Ozvěte se přímo
              </Typography>
              <Form method="post">
                <TextField
                  name="email"
                  size="small"
                  variant="standard"
                  fullWidth
                  label="zadej email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  name="message"
                  id="standard-multiline-flexible"
                  label="napiš zprávu"
                  multiline
                  fullWidth
                  rows={5}
                  required
                  variant="standard"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button sx={{ mt: "1rem" }} type="submit">
                  odeslat
                </Button>
              </Form>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export const action = async ({ request }) => {
  const data = await request.formData();
  const newData = {
    email: data.get("email"),
    message: data.get("message"),
  };
  const res = await axios.post("http://localhost:3000/messages", newData);

  return res;
};
