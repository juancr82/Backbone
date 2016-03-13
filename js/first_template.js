var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

var data = {
    title: "Handlebars JS Example", 
    body: "This is my first post!",
    story: {
        intro: "Before the jump",
        body: "After the jump"
    },
    people: [
        {firstName: "Yehuda", lastName: "Katz"},
        {firstName: "Carl", lastName: "Lerche"},
        {firstName: "Alan", lastName: "Johnson"}
    ],
    comments: [
        {subject: "First Comment", body: "First Body"},
        {subject: "Second Comment", body: "Second Body"},
        {subject: "Third Comment", body: "Third Body"}
    ],
    nav: [
        { url: "http://www.yehudakatz.com", title: "Katz Got Your Tongue" },
        { url: "http://www.sproutcore.com/block", title: "SproutCore Blog" },
    ],
    isActive: false
};

Handlebars.registerHelper('with', function(context, options) {
  return options.fn(context);
});

Handlebars.registerHelper('link', function(text, url) {
    text = Handlebars.Utils.escapeExpression(text);
    url = Handlebars.Utils.escapeExpression(url);
    var result = '<a href="' + url + '">' + text + '</a>';
    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('list', function(items, options) {
    var out = "<ul>";

    for(var i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
    }

    return out + "</ul>";
});

Handlebars.registerHelper('each', function(context, options) {
    var ret = "";

    for(var i=0, j=context.length; i<j; i++) {
        ret = ret + options.fn(context[i]);
    }

    return ret;
});

Handlebars.registerHelper('list', function(context, options) {
    return "<ul>" + context.map(function(item) {
        return "<li>" + options.fn(item) + "</li>";
    }).join("\n") + "</ul>";
});

$('body').append(template(data));