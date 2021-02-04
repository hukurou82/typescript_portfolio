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

import styles from './styles/Work.module.css';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



const Work: React.FC = () => {

    const classes = useStyles();


    return (
        <PersistentDrawer title="ワーク">
            <p>作ってきたサイトです。ポートフォリオ名をクリックしてください。</p>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ポートフォリオ</StyledTableCell>
                            <StyledTableCell>スキル</StyledTableCell>
                            <StyledTableCell>フレームワーク</StyledTableCell>
                            <StyledTableCell>説明</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    <a href={row.url} target="_blank" className={styles.a} >{row.name}</a>
                                </StyledTableCell>
                                <StyledTableCell>{row.skil}</StyledTableCell>
                                <StyledTableCell>{row.fw}</StyledTableCell>
                                <StyledTableCell>{row.description}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </PersistentDrawer>
    )
}

export default Work;
