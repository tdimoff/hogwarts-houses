import { Paper, Typography, Container, Grid } from "@mui/material";

const contactData = {
  name: "Cornelius Oswald Fudge",
  ministry: "Ministry of Magic Headquarters",
  address: "Underground of Whitehall and the HM Treasury building",
  city: "London",
  country: "Great Britain",
};

const ContactPage = () => {
  return (
    <Container maxWidth="md" className="mt-6">
      <Paper elevation={4} className="p-8">
        <Typography variant="h3" className="text-center pb-6">
          Contact Page
        </Typography>
        <Grid container spacing={1}>
          <Grid item md={6}>
            <img src="/cornelius.png" alt="Cornelius Fudge" width="350" />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h6" className="py-2">
              Name: {contactData.name}
            </Typography>
            <Typography variant="h6" className="py-2">
              Ministry: {contactData.ministry}
            </Typography>
            <Typography variant="h6" className="py-2">
              Address: {contactData.address}
            </Typography>
            <Typography variant="h6" className="py-2">
              City: {contactData.city}
            </Typography>
            <Typography variant="h6" className="py-2">
              Country: {contactData.country}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactPage;
