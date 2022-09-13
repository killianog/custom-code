# ::selection
To customize the selection background color edit the CSS variable `--selection-color` and selection text color edit the CSS variable `--text-color`. 

## Example
[CSS ::selection Example](https://user-images.githubusercontent.com/83577130/189996314-9f0a1ad5-c639-42a2-8482-399bca164d78.webm)
![ezgif-5-0db9bcd1f9](https://user-images.githubusercontent.com/83577130/189996561-4e541c42-f857-4a28-82ab-42b818972cc1.gif)


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




