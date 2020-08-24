import * as uiActions from './uiActions';

describe('uiActions', () => {
    it('should create an action updates isScreenSmall', () => {
        const isScreenSmall = true;
        const expectedAction = {
            type: uiActions.UPDATE_IS_SCREEN_SMALL,
            payload: isScreenSmall
        }
        expect(uiActions.updateIsScreenSmall(isScreenSmall)).toEqual(expectedAction);
    });

    it('should create an action that updates the theme', () => {
        const theme = 'dark';
        const expectedAction = {
            type: uiActions.UPDATE_THEME,
            payload: theme
        }
        expect(uiActions.updateTheme(theme)).toEqual(expectedAction);
    });
});