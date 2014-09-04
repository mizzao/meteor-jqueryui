meteor-jqueryui
===============

This package provides a simple lightweight way to pull in jQuery UI in Meteor. 

You should be aware that there are potential incompatibilities between jQuery UI
and Bootstrap 2. In general, it is safer to use [Bootstrap
3](https://github.com/mizzao/meteor-bootstrap-3) in conjunction with jQuery UI
as many of the conflicts have been resolved.

## Usage

Install with Meteor 0.9.0 and above:

```
$ meteor add mizzao:jquery-ui
```

The default smoothness theme and images are included. If you want to change the
theme for an app, follow these steps:

1. Install the package locally by checking it out into `packages/mizzao:jquery-ui`.
2. Edit the file `generate.js` as necessary to point at the URLs for the theme you want.
3. Run `node generate.js > jqueryui.fetch.json`.
4. Start or bundle your app.
