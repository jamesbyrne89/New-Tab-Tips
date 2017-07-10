// List of CSS tips
var tipsList = [
	{
		selector: '*',
		example: '<pre class="prettyprint linenums">* {<br>margin: 0;<br>padding: 0;<br>}</pre>',
		description: "The star symbol will target every single element on the page. Many developers will use this trick to zero out the margins and padding. While this is certainly fine for quick tests, I'd advise you to never use this in production code. It adds too much weight on the browser, and is unnecessary."
	},
	{
		selector: '#id',
		example: '<pre class="prettyprint linenums">#container {<br>width: 960px;<br>margin: auto;<br>}</pre>',
		description: "Prefixing the hash symbol to a selector allows us to target by id. This is easily the most common usage, however be cautious when using id selectors.<br>Ask yourself: do I absolutely need to apply an id to this element in order to target it?<br>id selectors are rigid and don't allow for reuse. If possible, first try to use a tag name, one of the new HTML5 elements, or even a pseudo-class."
	},
	{
		selector: '.class',
		example: '<pre class="prettyprint linenums">.error {<br>color: red;<br>}</pre>',
		description: "This is a <strong>class selector</strong>. The difference between ids and classes is that, with the latter, you can target multiple elements. Use classes when you want your styling to apply to a group of elements. Alternatively, use ids to find a needle-in-a-haystack, and style only that specific element."
	},
	{
		selector: 'x y',
		example: '<pre class="prettyprint linenums">li a {<br>text-decoration: none;<br>}</pre>',
		description: "This is the <strong>descendant selector</strong>. When you need to be more specific with your selectors, you use these. For example, what if, rather than targeting all anchor tags, you only need to target the anchors which are within an unordered list? This is specifically when you'd use a descendant selector."
	},
	{
		selector: 'x',
		example: '<pre class="prettyprint linenums">a { color: red; }<br>ul { margin-left: 0; }</pre>',
		description: "What if you want to target all elements on a page, according to their type, rather than an id or classname? Keep it simple, and use a <strong>type selector</strong>. E.g. if you need to target all unordered lists, use ul {}."
	},
	{
		selector: 'x:visited and x:link',
		example: '<pre class="prettyprint linenums">a:link { color: red; }<br>a:visited { color: purple; }</pre>',
		description: "We use the :link pseudo-class to target all anchors tags which have yet to be clicked on.<br>Alternatively, we also have the :visited pseudo class, which, as you'd expected, allows us to apply specific styling to only the anchor tags on the page which have been clicked on, or visited."
	},
	{
		selector: 'x + y',
		example: '<pre class="prettyprint linenums">ul + p {<br>color: red;<br>}</pre>',
		description: "This is referred to as an adjacent selector. It will select only the element that is immediately preceded by the former element. In this case, only the first paragraph after each ul will have red text."
	},
	{
		selector: 'x > y',
		example: '<pre class="prettyprint linenums">div#container > ul {<br>border: 1px solid black;<br>}</pre>',
		description: "The difference between the standard <span class='code'>X Y</span> and <span class='code'>X > Y</span> is that the latter will only select direct children.<br>A selector of <span class='code'>#container > ul</span> will only target the uls which are direct children of the div with an id of container. It will not target, for instance, the ul that is a child of the first li.<br>For this reason, there are performance benefits in using the child combinator. In fact, it's recommended particularly when working with JavaScript-based CSS selector engines."
	},
	{
		selector: 'x ~ y',
		example: '<pre class="prettyprint linenums">ul ~ p {<br>color: red;<br>}</pre>',
		description: "This sibling combinator is similar to <span class='code'>X + Y</span>, however, it's less strict. While an adjacent selector <span class='code'>(ul + p)</span> will only select the first element that is immediately preceded by the former selector, this one is more generalized. It will select, referring to our example above, any p elements, as long as they follow a ul."
	},
	{
		selector: 'x[title]',
		example: '<pre class="prettyprint linenums">a[title] {<br>color: green;<br>}</pre>',
		description: "Referred to as an <strong>attributes selector</strong>, in our example above, this will only select the anchor tags that have a <span class='code'>title</span>attribute. Anchor tags which do not will not receive this particular styling."
	}														
];

const backgroundColours = 
[
'#ECDEDA',
'#FFF4E9',
'#DCE7E9',
'#D1C7B2'
]





	/**
 * Gets a random number within a range
 * @param  {number} min The lower end of the range
 * @param  {number} max The upper end of the range
 * @return {number}     A random number between the two given parameters
 */
const generateNumber = function generateNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};


const selector = document.getElementById('js-selector');
const example = document.getElementById('js-example');
const description = document.getElementById('js-description');


const randomTip = generateNumber(0, tipsList.length)

selector.innerHTML = tipsList[randomTip].selector;
example.innerHTML = tipsList[randomTip].example;
description.innerHTML = tipsList[randomTip].description;


// const randomColour = generateNumber(0, backgroundColours.length)
// document.body.style.background = backgroundColours[randomColour];

