import React from 'react'
import PersistentDrawer from '../../templates/PersistentDrawer'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BuildIcon from '@material-ui/icons/Build';
import {Grid} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CodeIcon from '@material-ui/icons/Code';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './styles/Work.module.css';



const createData = (
    name: string, 
    skil: string, 
    fw: string, 
    description: string,
    url: string,
) => {
  return { name, skil, fw, description, url};
}

const rows = [
  createData('ポートフォリオ','Typescript', 'React、Material-UI','現在見ているポートフォリオ', './'),
  createData('TODOリスト','Javascript', 'React、Bootstrap','Reactを使ったCURD',"https://hukurou82.github.io/todo/"),
  createData('チャットbot','Javascript、Firebase、Slack', 'React、Redux、Material-UI','自動でチャットのやり取りをし、細かいやり取りは直接連絡を取れるチャットbot', "https://chatbot-21dbb.web.app/"),
  createData('新型コロナウイルスの感染者数チャート','Typescript、Firebase', 'React、Redux、Chrat.js','新型コロナウイルスの感染者数が分かるチャートをChart.jsを使い実装',"https://covid19-app-bbc7f.web.app/"),
  createData('映画ランキングサイト','HTML、CSS、jQuery', 'Bootstrap','映画ランキングサイト',"http://hukurou82.html.xdomain.jp/test3/index.html"),
];



const Work: React.FC = () => {
    return (
        <PersistentDrawer title="ワーク">
          <p>作ってきたサイトです。ポートフォリオ名をクリックしてください。</p>
            <Grid container spacing={1} justify="center">
                {rows.map((row) => (
                    <Grid item xs={12} md={3} component={Card} className={styles.html} key={row.name}>
                        <CardContent>
                            <Typography color="textSecondary" variant="h5" gutterBottom>
                            <a href={row.url} target="_blank" className={styles.a} >
                              <BuildIcon />
                                {row.name}
                            </a>
                            </Typography>
                            <Typography variant="h6">
                                {row.description}
                            </Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </PersistentDrawer>
    )
}

export default Work;
