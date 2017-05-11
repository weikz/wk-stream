import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LandingPage from '../../components/LandingPage';
import * as DramasActions from '../../actions/dramas';

const mapStateToProps = (state) => ({
    dramas: state.dramas
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(DramasActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
