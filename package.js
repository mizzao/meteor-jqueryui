Package.describe({
  summary: "Simple lightweight pull-in for jQuery UI in Meteor",
  version: "1.11.0",
  git: "https://github.com/mizzao/meteor-jqueryui.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");

  api.use('jquery', 'client');

  api.use("mizzao:build-fetcher@0.2.0", 'client');

  api.add_files('jqueryui.fetch.json', 'client');
});
