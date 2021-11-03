# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./design/desktop-design.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Github repositories](https://github.com/mochkholil/coming-soon-page)
- Live Site URL: [Moch Kholil](https://mochkholil.github.io/coming-soon-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

```js
email.addEventListener('keyup', function () {
  if (this.value.match(regExp)) {
    inputBx.style.borderColor = 'hsl(0, 36%, 70%)';
    error_icon.style.display = 'none';
    error_text.style.display = 'none';
  } else {
    inputBx.style.border = '2px solid hsl(0, 93%, 68%)';
    error_icon.style.display = 'block';
    error_text.style.display = 'block';
  }
  if (email.value === '') {
    inputBx.style.borderColor = 'hsl(0, 36%, 70%)';
    error_icon.style.display = 'none';
    error_text.style.display = 'none';
  }
});
```

```css
.proud-of-this-css {
  outline: none;
}
```

```html
<form action="#" id="form" class="form">
  <div class="inputBx">
    <input type="text" id="email" class="email" placeholder="Email Address" />
    <div class="error icon">
      <img src="images/icon-error.svg" alt="icon error" />
    </div>
  </div>
  <div class="error-text">Please enter a valid email</div>
  <button id="btn-email" class="icon"><img src="images/icon-arrow.svg" alt="" /></button>
</form>
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I think for next development I will use sass for styling

### Useful resources

- [Google fonts | Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans?query=josefin+sa) - I use this letter to beautify my custom coming soon page

## Author

- Website - [My Webpage](https://mochkholil.github.io)
- Instagram - [@sur_ya_kale_ngan](https://www.instagram.com/sur_ya_kale_ngan/)

## Acknowledgments

I hope you guys tell me everything you know about programming, cause I newbie. perhaps for next month or years, I'll become better for writing a code.
