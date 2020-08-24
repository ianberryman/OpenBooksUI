
import { bindActionCreators } from 'redux';
import store from '../store/store';
import uiActionCreators from '../reducers/uiActions';

/**
 * Automatically wraps action creators in store.dispatch()
 *
 * This export should be used to dispatch actions elsewhere in the app
 * rather than using mapDispatchToProps or calling store.dispatch() manually
 */
export default bindActionCreators({
    ...uiActionCreators()
}, store.dispatch);

