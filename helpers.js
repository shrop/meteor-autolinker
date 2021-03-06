if (Package.templating) {
    var Template = Package.templating.Template;
    var Blaze = Package.blaze.Blaze; // implied by `templating`
    var HTML = Package.htmljs.HTML; // implied by `blaze`

    Blaze.Template.registerHelper("markdown", new Template('markdown', function () {
        var view = this;
        var content = '';
        var linkerOptions = {};
        var linker;

        if(this.outputMarkdown){
            linkerOptions.outputMarkdown = true;
        }

        if (view.templateContentBlock) {
          content = Blaze.toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
        }

        linker = new Autolinker(linkerOptions);
        return HTML.Raw(linker.link(content));
    }));
}
