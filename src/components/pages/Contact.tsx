import React from "react";
import PersistentDrawer from "../../templates/PersistentDrawer";
import styles from "./styles/Contact.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const Contact: React.FC = () => {
  return (
    <PersistentDrawer title="コンタクト">
      <Container
        maxWidth="xs"
        style={{ borderStyle: "groove", padding: "1em", paddingTop: "1em" }}
      >
        <Grid
          container
          spacing={5}
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <a
              href="https://github.com/hukurou82"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" />
              github
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <a
              href="https://www.instagram.com/hukurou82/?hl=ja"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon fontSize="large" />
              Instagram
            </a>
          </Grid>
        </Grid>
      </Container>
    </PersistentDrawer>
  );
};

export default Contact;
