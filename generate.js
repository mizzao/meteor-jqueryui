var path = require("path");
var url = require("url");

var output = [];

var urlPrefix = "http://code.jquery.com/ui/1.11.2/";
var themePrefix = "themes/smoothness/";

// Base file
output.push({
    file: "jquery-ui.min.js",
    url: url.resolve(urlPrefix, "jquery-ui.min.js"),
    bare: true
});

// CSS file
output.push({
    file: "jquery-ui.css",
    url: url.resolve(urlPrefix, path.join(themePrefix, "jquery-ui.min.css"))
});

// Images - https://github.com/jquery/jquery-ui/tree/master/themes/base/images
// Must have correct relative path to CSS to work properly.
[
    "ui-bg_flat_0_aaaaaa_40x100.png",
    "ui-bg_flat_75_ffffff_40x100.png",
    "ui-bg_glass_55_fbf9ee_1x400.png",
    "ui-bg_glass_65_ffffff_1x400.png",
    "ui-bg_glass_75_dadada_1x400.png",
    "ui-bg_glass_75_e6e6e6_1x400.png",
    "ui-bg_glass_95_fef1ec_1x400.png",
    "ui-bg_highlight-soft_75_cccccc_1x100.png",
    "ui-icons_222222_256x240.png",
    "ui-icons_2e83ff_256x240.png",
    "ui-icons_454545_256x240.png",
    "ui-icons_888888_256x240.png",
    "ui-icons_cd0a0a_256x240.png"
].forEach(function(img) {
    output.push({
	file: path.join("images/", img),
	url: url.resolve(urlPrefix, path.join(themePrefix, "images/", img))
    });
});

console.log(JSON.stringify(output, null, "    "));
