import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DramaPage from '../../components/DramaPage';
import * as DramaAction from '../../actions/drama';

const mapStateToProps = (state) => ({
    drama: state.drama
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(DramaAction, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(DramaPage);