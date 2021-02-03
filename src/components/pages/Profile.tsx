import React from 'react'
import GenericTemplate  from '../templates/GenericTemplate';
import Slider from './Slider';

import styles from './styles/Profile.module.css';

const Profile: React.FC = () => {
    return (
        <GenericTemplate title="プロフィール">
           <Slider />
           <h2 className={styles.h2}>元精密機器設計エンジニアのアクティブなフロントエンジニアです。</h2>
           <p>主にTypescriptやJavascriptで開発をしています。</p>
           <p>新しい技術や気になる事があればどんどん突っ込んでいき体験したいという考えです。<br />
           より良い暮らしの為様々なサービスを作り出していけたらいいなと考えています。
           </p>
        </GenericTemplate>
    )
}

export default Profile;
