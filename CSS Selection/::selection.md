# ::selection
To customize the selection background color edit the CSS variable `--selection-color` and selection text color edit the CSS variable `--text-color`. 

## Example
[0864d3b8-5dc0-409a-aebc-8e6f7a8c5816.webm](https://user-images.githubusercontent.com/83577130/189996314-9f0a1ad5-c639-42a2-8482-399bca164d78.webm)


## Inside `<head>` tag
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




