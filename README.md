# Styledown Skins

This project provides alternative presentation layers for style guides generated via [Styledown](https://github.com/styledown/styledown). If you are not familiar with Styledown, go read [how it works](https://github.com/styledown/styledown#how-it-works) before trying to use the skins here.

## Usage

Install via [Bower](http://bower.io/):

```shell
bower install styledown-skins
```

Copy the `config.md` file for the skin you would like to use to the directory that contains your style guide Markdown files:

```shell
cp bower_components/styledown-skins/dist/Default/config.md styleguide/
```

Update CSS and JavaScript paths within the copied `config.md` to reference your project's CSS and JavaScript files.

Finally, run Styledown to create your style guide:

```shell
styledown styleguide/*.md > styleguide/index.html
```

### Building Style Guides with Grunt

If you use [Grunt](http://gruntjs.com/), you can automatically build your custom style guides using the [grunt-styledown](https://github.com/drakeh/grunt-styledown) plugin. If using this approach, you can configure your style guide in your `Gruntfile.js` instead of the `config.md` file. The skins below each provide the necessary task configuration.

## The Skins

### Default

__[See Demo ▸](http://cdn.rawgit.com/drakeh/styledown-skins/master/examples/Default/index.html)__

This skin adds a fixed navigation sidebar with navigation items that are automatically generated from your style guide's H2 and H3 headings.

Markup for the component examples is hidden by default, but is made available via a "Show Markup" button in the bottom-right of each example block.

The component examples are displayed in a fluid container, making it possible to demo large full-width components as well as responsive components. The left navigation is hidden on screens narrower than 768px, making it possible to view the style guide on mobile devices and other small screens.

## Styledown Grunt Task Configuration

```javascript
styledown: {
  default: {
    files: {
      "styleguide/index.html": ["styleguide/*.md"]
    },
    options: {
      title: "Your Style Guide Title",
      css: "path/to/your-project.css",
      sg_css: "bower_components/styledown-skins/dist/Default/styleguide.min.css",
      sg_js: [
        "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",
        "bower_components/styledown-skins/dist/Default/styleguide.min.js"
      ],
      body:
        "<div class=sg-menu>" +
          "<div class=sg-title>Your Style Guide Title</div>" +
           "<nav class=sg-toc></nav>" +
         "</div>" +
         "<div class=sg-content>" +
           "<div sg-content></div>" +
           "<div class=sg-copyright>&copy; Your Copyright</div>" +
         "</div>"
    }
  }
}
```

## License
Copyright (c) 2015 Drake Hampton. Licensed under the MIT license.
