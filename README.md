# SimpleFormat

SimpleFormat is a WYSIWYG web editor.
It allows you to let the users of your website to add some formatting to the content they write.

## Features

SimpleFormat includes:
1. An intuitive WYSIWYG responsive interface. (The user can still write in html)
2. A simple website implementation.
3. Out of the box CSS and Icons based on [Bulma](https://bulma.io) & [FontAwesome](https://fontawesome.com/).
4. [Soon] Out of the box securities: the tags that can affect your website are automaticaly deleted (`<iframe>`, `<script>`, `<style>`).

## Usage

SimpleFormat uses [HTML5](https://fr.wikipedia.org/wiki/HTML5). Just download it and include it in your website !

Include the editor in a div. You can give it any size you want, it's fully responsive.

```html
<div style="width: 700px; height: 400px;">
  <!-- include the editor here -->
</div>
```
```php
<?php
  require 'editor.html';
?>
```

To get the html code of the editor juste do :

```javascript
var urcode = document.getElementById('editor').innerHTML
```

You are free to use SimpleFormat in all of your websites as long as you let the logo and the link in the editor !

## WYSIWYG editor

When you write with something with SimpleFormat WYSIWYG interface, it's generating [HTML5](https://fr.wikipedia.org/wiki/HTML5) code.

With the SimpleFormat editor, you can have :

* Headings
* Font sizes / types
* Text attributes :
  _italic_, **bold**, `monospace`, [underline]()
* Horizontal dividers
* Lists
* Links
* Images

## CSS & Icons

SimpleFormat uses [Bulma](https://bulma.io) for the CSS, in addition to some custom classes. You can found and customize all of them in the `main.css` file. You will also find a list of the colors used in the CSS file, so you will be able to change them easily.

SimpleFormat is using the free icons of [FontAwesome](https://fontawesome.com/). You're free to change them as well.
