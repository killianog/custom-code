# ::selection
To customize the selection background color edit the CSS variable `--selection-color` and selection text color edit the CSS variable `--text-color`. 

## Example
### Values In the example
`--selection-color: #f7f33a`
`--text-color: #cba6d6`

![Example GIF](https://user-images.githubusercontent.com/83577130/189996561-4e541c42-f857-4a28-82ab-42b818972cc1.gif)


## Inside `<head>` tag
```CSS
<style>
    /* Color Variables (Edit)*/
    :root {
        --selection-color: #000;
        --text-color: #fff;
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




