import React from 'react'
import PersistentDrawer from '../../templates/PersistentDrawer'
import styles from './styles/Skil.module.css';
import {Grid} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CodeIcon from '@material-ui/icons/Code';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const createData = (
    name: string,
    description: string,
) => {
    return {name, description}
};

const rows = [
    createData("HTML5/CSS3","HTML5、CSS3は業務で使用"),
    createData("Javascript","jQuery、React、Reduxを用いて開発を行う"),
    createData("Typescript","型宣言することにより、読みやすいコードがかけるのではないかと実装。React、Chart.jsと共にグラフの作成"),
    createData("Java","ログイン機能や小規模な掲示板を開発。フレームワークはSpringBootを使用"),
    createData("PHP","スクラッチ開発でCRUDを作成。またログイン機能なども実装。フレームワークではLaravelを使用"),
];


const Skil:React.FC = () => {
    return (
        <PersistentDrawer title="スキル">
            <Grid container spacing={1} justify="center">
                {rows.map((row) => (
                    <Grid item xs={12} md={3} component={Card} className={styles.html} key={row.name}>
                        <CardContent>
                            <Typography color="textSecondary" variant="h5" gutterBottom>
                                <CodeIcon />
                                {row.name}
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

export default Skil;
