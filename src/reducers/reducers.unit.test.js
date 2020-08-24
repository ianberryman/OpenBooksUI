
import * as uiActions from './uiActions';
import { uiReducer } from './reducers';

describe('reducers', () => {
    it('uiReducer should return the inital state', () => {
        expect(uiReducer(undefined, {})).toEqual({
            isScreenSmall: false,
            theme: ''
        });
    });

    it('uiReducer should handle UPDATE_IS_SCREEN_SMALL', () => {
        expect(
            uiReducer(undefined, {
                type: uiActions.UPDATE_IS_SCREEN_SMALL,
                payload: true
            })).toEqual({
                isScreenSmall: true,
                theme: ''
            });

        expect(
            uiReducer({isScreenSmall: true, theme: 'dark'}, {
                type: uiActions.UPDATE_IS_SCREEN_SMALL,
                payload: false
            })).toEqual({
                isScreenSmall: false,
                theme: 'dark'
            });
    });



});