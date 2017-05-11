import React from 'react';

import styles from './Description.module.css';

const Description = (drama) => (
  <div className={styles.description}>
    <div className="container">
    <h2>{drama.title}</h2>
    <p>演員：阿部寬</p>
    <hr/>
    <h2>選擇集數</h2>
    <h2>1 2 3 4</h2>
    <hr/>
    <h2>劇情簡介</h2>
    <p>此作描寫日本中小企業與大型企業間的戰鬥。主角佃航平原是一位火箭開發研究者，在火箭升空以失敗告終之後，離開了科學開發機構，繼承父親兩百人的小型公司「佃製作所」。某日，因一封起訴書控訴佃製作所侵害專利，使佃製作所的訂單逐漸減少。而在此面臨危急存亡之秋，知名大企業「帝國重工」宇宙航空部長財前來訪，為了開發旗下新型引擎，向佃航平表示帝國重工可出價20億元高價買下佃製作所已登記的某個零件專利權。佃航平卻因此而陷入了苦惱......。</p>
    <hr/>
    <h2>根據您喜歡</h2>
    </div>
  </div>
);

export default Description;