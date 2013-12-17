Package.describe({
    summary: "Simple lightweight pull-in for jQuery UI in Meteor"
});

Package.on_use(function (api) {
    api.use('jquery', 'client'); // Of course the client needs to have this first
    api.use('templating', 'client');

    api.use('build-fetcher', 'client');

    api.add_files('jqueryui.fetch.json', 'client');
});
