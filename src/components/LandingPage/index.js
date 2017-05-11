import React, { PropTypes } from 'react';

import Header from './Header';
import DramaList from './DramaList';
import Footer from './Footer';

import {Button} from 'react-bootstrap';

const LandingPage = ({loadDramas}) => (
      <div>
        <Header />
        <DramaList />
        <Footer />
        <Button onClick={loadDramas} />
      </div>

);

/*class LandingPage extends React.component{

  render(){
    return(
      <div>
        <Header />
        <DramaList />
        <Footer />
      </div>
    )
  }
}*/

// LandingPage.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default LandingPage;
