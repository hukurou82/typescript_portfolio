import React from "react";
import PersistentDrawer from "../../templates/PersistentDrawer";
import Slider from "./Slider";
import img1 from "../img/test1.jpg";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import styles from "./styles/Profile.module.css";

const Profile: React.FC = () => {
  return (
    <PersistentDrawer title="プロフィール">
      <Container maxWidth="sm">
        <Grid container spacing={1} justify="center">
          <Typography variant="h5" component="div">
            <h2 className={styles.h2}>
              元精密機器設計エンジニア出身のフロントエンジニアです。
            </h2>
            <p>
              主にTypescriptやJavascriptで開発をしています。
              <br />
              2000年に初めてHTMLとCSSで個人ホームページを作りましたが、そのあと設計エンジニアになりました。
              <br />
              新しい技術や気になる事があればどんどん突っ込んでいき体験したいという考えです。
              <br />
              より良い暮らしの為様々なサービスを作り出していけたらいいなと考えています。
            </p>
          </Typography>
        </Grid>
      </Container>
    </PersistentDrawer>
  );
};

export default Profile;
