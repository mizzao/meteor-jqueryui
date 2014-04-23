meteor-jqueryui
===============

This package provides a simple lightweight way to pull in jQuery UI in Meteor.

It is a different approach than the one Tim Heckel takes at https://github.com/TimHeckel/meteor-jquery-ui, which uses an older version of jQuery UI in an attempt to maintain compatibility with the [jQuery UI Bootstrap](http://addyosmani.github.io/jquery-ui-bootstrap/) themes. However, the jQuery UI Bootstrap project moves rather slowly and carries a lot of baggage for someone wanting a quick way to add jQuery UI to their app.

You should be aware of potential incompatibilities between jQuery UI and the version of Bootstrap provided by Meteor, as mentioned in the jQuery UI Boostrap documentation, and use this at your own risk.

## Usage

1. Install [meteorite](https://github.com/oortcloud/meteorite)
2. `mrt add jqueryui`
