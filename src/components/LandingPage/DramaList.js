import React from 'react';
import { Link } from 'react-router';

import styles from './DramaList.module.css';
import { Grid, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import cover from '../images/cover.jpeg';


const DramaList = () => {
    const drama = {
        name: 'FatRatBoy',
        description: 'DJ',
        viewd: 244,
    }
    
    return(
        <div>
            <Grid>
            <h2>Drama List</h2>
            <ButtonGroup bsSize="xsmall">
                <Button>依據發行時間排列</Button>
                <Button>依據觀看人數排列</Button>
            </ButtonGroup>
            <Row className="show-grid">
                <Col md={3}><Link to='/drama'><img className={styles.cover} src={cover }/> <p>{drama.name}</p></Link></Col>
                <Col md={3}><Link to='/drama'><img className={styles.cover} src={cover }/> <p>{drama.name}</p></Link></Col>
                <Col md={3}><Link to='/drama'><img className={styles.cover} src={cover }/> <p>{drama.name}</p></Link></Col>
                <Col md={3}><Link to='/drama'><img className={styles.cover} src={cover }/> <p>{drama.name}</p></Link></Col>
                <Col md={3}><Link to='/drama'><img className={styles.cover} src={cover }/> <p>{drama.name}</p></Link></Col>
                <Col md={3}><Link to='/drama'><img className={styles.cover} src={cover }/> <p>{drama.name}</p></Link></Col>
            </Row>
            <h2>自出品</h2>
            <Row className="show-grid">
                <Col md={3}><p>video2</p></Col>
                <Col md={3}><p>video2</p></Col>
                <Col md={3}><p>video2</p></Col>
                <Col md={3}><p>video2</p></Col>
            </Row>
            </Grid>
        </div>
    );
};


export default DramaList;