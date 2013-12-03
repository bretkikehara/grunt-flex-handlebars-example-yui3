YUI.add("{{opts.module-name}}", function(Y) {

// START helpers
{{#each helpers}}
{{{.}}}
{{/each}}
// END helpers

// START templates
{{#each templates}}
{{{.}}}
{{/each}}
// END templates

// START partials
{{#each partials}}
{{{.}}}
{{/each}}
// END partials
}, "{{opts.version}}", {
	requires: [ "handlebars-base" ]
});