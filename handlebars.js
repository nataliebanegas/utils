/*
* Handlebars starter template
*/

<script id="source" type="text/x-handlebars-template">
	<p>{{person.name}}</p>
</script>

<div id='target'></div>

var context = {
	person: {
		name: 'Bill'
	}
}

var source = $('#source').html();
var target = $('#target');
var template = Handlebars.compile(source);
target.html(template(context));