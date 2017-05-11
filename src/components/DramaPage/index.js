import React from 'react';

import Player from './Player';
import Description from './Description';
import Footer from '../LandingPage/Footer';

import { Button } from 'react-bootstrap';


const DramaPage = ({fetchDrama}) => (
  <div>
    <h1>Ha:{}</h1>
    <Player/>
    <Description/>
    <Button onClick={fetchDrama}/>
  </div>
);


export default DramaPage; 