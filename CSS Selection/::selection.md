# ::selection
To customize the selection background color edit the CSS variable `--selection-color` and selection text color edit the CSS variable `--text-color`

## Inside <head> tag
```CSS
<style>
    /* Color Variables (Edit)*/
    :root {
        --selection-color: #f7f33a;
        --text-color: #cba6d6;
    }

    /* Mouse Selection */
    ::selection {
        background: var(--selection-color);
        color: var(--text-color);
    }

    ::-moz-selection {
        /* Code for Firefox */
        background: var(--selection-color);
        color: var(--text-color);
    }
</style>
```




