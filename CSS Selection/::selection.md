# ::selection
To customize the selection background color edit the CSS variable `--selection-color` and selection text color edit the CSS variable `--text-color`. 

## Example
![image](https://user-images.githubusercontent.com/83577130/189995934-f9cf8d0f-fef0-46a7-b009-ba89344f0af9.png)


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




