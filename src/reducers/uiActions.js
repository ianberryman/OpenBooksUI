
export const UPDATE_IS_SCREEN_SMALL = "UPDATE_IS_SCREEN_SMALL";
export const updateIsScreenSmall = (isScreenSmall) => {
    return {type: UPDATE_IS_SCREEN_SMALL, payload: isScreenSmall}
};

export const UPDATE_THEME = "UPDATE_THEME";
export const updateTheme = (theme) => {
    return {type: UPDATE_THEME, payload: theme}
};

// returns an object containing all of the action creators
export default function() {
    return {
        updateIsScreenSmall,
        updateTheme
    }
}