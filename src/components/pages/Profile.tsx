import React from 'react'
import PersistentDrawer from '../../templates/PersistentDrawer'
import Slider from './Slider';

import styles from './styles/Profile.module.css';

const Profile:React.FC = () => {
    return (
        <PersistentDrawer title="プロフィール">
            <Slider />
            <h2 className={styles.h2}>元精密機器設計エンジニアのアクティブなフロントエンジニアです。</h2>
           <p>主にTypescriptやJavascriptで開発をしています。</p>
           <p>新しい技術や気になる事があればどんどん突っ込んでいき体験したいという考えです。<br />
           より良い暮らしの為様々なサービスを作り出していけたらいいなと考えています。
           </p>
        </PersistentDrawer>
    )
}

export default Profile;