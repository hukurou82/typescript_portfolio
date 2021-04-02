import React from "react";
import PersistentDrawer from "../../templates/PersistentDrawer";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import BuildIcon from "@material-ui/icons/Build";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CodeIcon from "@material-ui/icons/Code";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import styles from "./styles/Work.module.css";

const createData = (
  name: string,
  skil: string,
  fw: string,
  description: string,
  url: string
) => {
  return { name, skil, fw, description, url };
};

const rows = [
  createData(
    "ポートフォリオ",
    "言語:Typescript",
    "FW:React、Material-UI",
    "現在見ているポートフォリオ",
    "./"
  ),
  createData(
    "TODOリスト",
    "言語:Javascript",
    "FW:React、Bootstrap",
    "Reactを使ったCURD",
    "https://hukurou82.github.io/todo/"
  ),
  createData(
    "チャットbot",
    "言語:Javascript、Firebase、Slack",
    "FW:React、Redux、Material-UI",
    "自動でチャットのやり取りをし、細かいやり取りは直接連絡を取れるチャットbot",
    "https://chatbot-21dbb.web.app/"
  ),
  createData(
    "新型コロナウイルスの感染者数チャート",
    "言語:Typescript、Firebase",
    "FW:React、Redux、Chrat.js",
    "新型コロナウイルスの感染者数が分かるチャートをChart.jsを使い実装",
    "https://covid19-app-bbc7f.web.app/"
  ),
  createData(
    "リアルタイムチャットアプリ",
    "言語:Javascript、Firebase",
    "FW:React、Material-UI",
    "FirebaseのDBを使ったチャットアプリ",
    "https://new-chat-app-d9f76.web.app/"
  ),
  createData(
    "TypescriptとRedux toolkitで作るTODO",
    "言語:Typescript、Firebase",
    "FW:React、Redux toolkit、Material-UI",
    "DB付きtodoリスト",
    "https://typescript-todo-10fba.web.app/login"
  ),
  createData(
    "AWSで構築するWordpress",
    "言語:Linux",
    "",
    "EC2でサーバーを構築、ドメインを購入しIPアドレスと紐づけプライベートサブネットを作りRDSを設置してWordpressをインストール",
    "http://aws-hukurou.work/"
  ),
  createData(
    "映画ランキングサイト",
    "言語:HTML、CSS、jQuery",
    "FW:Bootstrap",
    "映画ランキングサイト",
    "http://hukurou82.html.xdomain.jp/test3/index.html"
  ),
];

const Work: React.FC = () => {
  return (
    <PersistentDrawer title="ワーク">
      <p>作ってきたサイトです。ポートフォリオ名をクリックしてください。</p>
      <Grid container spacing={1} justify="center">
        {rows.map((row) => (
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={styles.html}
            key={row.name}
          >
            <CardContent>
              <Typography color="textSecondary" variant="h5" gutterBottom>
                <a href={row.url} target="_blank" className={styles.a}>
                  <BuildIcon />
                  {row.name}
                </a>
              </Typography>
              <Typography variant="h6">{row.description}</Typography>
              <Typography variant="subtitle1">
                {row.skil}
                <br />
                {row.fw}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </PersistentDrawer>
  );
};

export default Work;
