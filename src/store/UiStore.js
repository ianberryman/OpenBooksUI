import { computed, makeObservable, observable, action } from "mobx";
import { graphql } from '@apollo/client/react/hoc';
import { toggleThemeClass } from '../styles/themeSelector';

export default class UiStore {
    @observable theme = "";

    constructor(rootStore) {
        makeObservable(this);

        this.rootStore = rootStore;
    }

    @action.bound setTheme(theme) {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        const localTheme = localStorage.getItem("theme");
    
        if (theme) this.theme = theme;
        else if (localTheme) this.theme = localTheme;
        else if (prefersDarkScheme) this.theme = "dark";
        else this.theme = "light";

        toggleThemeClass(this.theme);
        localStorage.setItem("theme", theme);
    }
}
