import React from 'react';

import { Alert, Panel } from 'react-bootstrap'; 

const Player = () =>(
  <div>
    <Alert bsStyle="warning">
      <strong> 警告! </strong> 本站正在建置中，任何出錯的狀況請回報管理員。 
    </Alert>
    <Alert bsStyle="info">
      <strong> 歡迎! </strong> 本站僅為測試 AWS Cloudfront / React-Redux / Node.js 串流技術之用途，串流影音皆為網路免費素材。
    </Alert>
    <Panel>
      <p>This is HTML5 embeded player</p>
    </Panel>
  </div>
);

export default Player;
