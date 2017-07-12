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
		selector: 'x:visited<br>x:link',
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
		example: '<pre class="prettyprint linenums">a[title] {<br>color: #1f6053;<br>}</pre>',
		description: "Referred to as an <strong>attributes selector</strong>, in our example above, this will only select the anchor tags that have a <span class='code'>title</span> attribute. Anchor tags which do not will not receive this particular styling."
	},
	{
		selector: 'x[href="foo"]',
		example: '<pre class="prettyprint linenums">a[href="http://net.tutsplus.com"] {<br>color: green;<br>}</pre>',
		description: "The snippet above will style all anchor tags which link to http://net.tutsplus.com; they'll receive our branded green color. All other anchor tags will remain unaffected. in our example above, this will only select the anchor tags that have a <span class='code'>title</span> attribute. Anchor tags which do not will not receive this particular styling."
	},
	{
		selector: 'x[href^="http"]',
		example: '<pre class="prettyprint linenums">a[href^="http"] {<br>background: url(path/to/external/icon.png) no-repeat;<br>padding-left: 10px;<br>}</pre>',
		description: "Ever wonder how some websites are able to display a little icon next to the links which are external? I'm sure you've seen these before; they're nice reminders that the link will direct you to an entirely different website.<br>This is a cinch with the carat symbol. It's most commonly used in regular expressions to designate the beginning of a string. If we want to target all anchor tags that have a href which begins with http, we could use a selector similar to the snippet shown above."
	},
	{
		selector: 'x[href$=".jpg"]',
		example: '<pre class="prettyprint linenums">a[href$=".jpg"] {<br>color: red;<br>}</pre>',
		description: "Again, we use a regular expressions symbol, $, to refer to the end of a string. In this case, we're searching for all anchors which link to an image - or at least a url that ends with .jpg. Keep in mind that this certainly won't work for gifs and pngs."
	},
	{
		selector: 'x[data-*="foo"]',
		example: '<pre class="prettyprint linenums">a[data-filetype="image"] {<br>color: red;<br>}</pre>',
		description: "How do we compensate for all of the various image types: png, jpeg,jpg, gif? If we added our own <span class='code'>data-filetype</span> attribute to each anchor that links to an image, we can use a standard attributes selector to target only those anchors."
	},
	{
		selector: 'x[foo~="bar"]',
		example: '<pre class="prettyprint linenums">a[data-info~="external"] {<br>color: red;<br>}<br><br>a[data-info~="image"] {<br>border: 1px solid black;<br>}</pre>',
		description: "Here's a special one that'll impress your friends. Not too many people know about this trick. The tilda (~) symbol allows us to target an attribute which has a spaced-separated list of values."
	},
	{
		selector: 'x:checked',
		example: '<pre class="prettyprint linenums">input[type=radio]:checked {<br>border: 1px solid black;<br>}</pre>',
		description: "This pseudo class will only target a user interface element that has been checked - like a radio button, or checkbox. It's as simple as that."
	},
	{
		selector: 'x:after',
		example: '<pre class="prettyprint linenums">.clearfix:after {<br>content: "";<br>display: block;<br>clear: both;<br>visibility: hidden;<br>font-size: 0;<br>height: 0;<br>}<br><br>.clearfix {<br>content: "";<br>*display: inline-block;<br>_height: 1%;<br>}</pre>',
		description: "The before and after pseudo classes kick butt. Every day, it seems, people are finding new and creative ways to use them effectively. They simply generate content around the selected element.<br>Many were first introduced to these classes when they encountered the clearfix hack.<br>This hack uses the <span class='code'>:after</span> pseudo class to append a space after the element, and then clear it. It's an excellent trick to have in your tool bag, particularly in the cases when the <span class='code'>overflow: hidden;</span> method isn't possible."
	},
	{
		selector: 'x:hover',
		example: '<pre class="prettyprint linenums">div:hover {<br>background: #e3e3e3;<br>}</pre>',
		description: "The official term for this is <strong>user action pseudo class</strong>. It sounds confusing, but it really isn't. Want to apply specific styling when a user hovers over an element? This will get the job done!"
	},
	{
		selector: 'x:not(selector)',
		example: '<pre class="prettyprint linenums">div:not(#container) {<br>color: blue;<br>font-size: 1.2em;<br>}</pre>',
		description: "The <strong>negation</strong> pseudo class is particularly helpful. Let's say I want to select all divs, except for the one which has an id of container. The snippet above will handle that task perfectly."
	},
	{
		selector: 'x::first-letter',
		example: '<pre class="prettyprint linenums">p::first-line {<br>font-weight: bold;<br>}</pre>',
		description: "We can use pseudo elements (designated by <span class='code'>::</span>) to style fragments of an element, such as the first line, or the first letter. Keep in mind that these must be applied to block level elements in order to take effect."
	},
	{
		selector: 'x:nth-child(n)',
		example: '<pre class="prettyprint linenums">li:nth-child(3) {<br>color: red;<br>}</pre>',
		description: "Targets specific elements in a stack.<br>nth-child accepts an integer as a parameter, however, this is not zero-based. If you wish to target the second list item, use li:nth-child(2).<br>We can even use this to select a variable set of children. For example, we could do li:nth-child(4n) to select every fourth list item."
	},
	{
		selector: 'x:nth-last-child(n)',
		example: '<pre class="prettyprint linenums">li:nth-last-child(2) {<br>color: red;<br>}</pre>',
		description: "What if you had a huge list of items in a <span class='code'>ul</span>, and only needed to access, say, the third to the last item? Rather than doing li:nth-child(397), you could instead use the nth-last-child pseudo class.<br>This technique works almost identically from number sixteen above, however, the difference is that it begins at the end of the collection, and works its way back."
	},
	{
		selector: 'x:nth-of-type(n)',
		example: '<pre class="prettyprint linenums">ul:nth-of-type(3) {<br>border: 1px solid black;<br>}</pre>',
		description: "There will be times when, rather than selecting a child, you instead need to select according to the type of element.<br>Imagine mark-up that contains five unordered lists. If you wanted to style only the third ul, and didn't have a unique id to hook into, you could use the nth-of-type(n) pseudo class."
	},
	{
		selector: 'x:nth-last-of-type(n)',
		example: '<pre class="prettyprint linenums">ul:nth-last-of-type(3) {<br>border: 1px solid black;<br>}</pre>',
		description: "We can also use nth-last-of-type to begin at the end of the selectors list, and work our way back to target the desired element."
	},
	{
		selector: 'x:first-child',
		example: '<pre class="prettyprint linenums">ul li:first-child {<br>border-top: none;<br>}</pre>',
		description: "This structural pseudo class allows us to target only the first child of the element's parent. You'll often use this to remove borders from the first and last list items."
	},
	{
		selector: 'x:last-child',
		example: '<pre class="prettyprint linenums">ul > li:last-child {<br>color: green;<br>}</pre>',
		description: "The opposite of <span class='code'>first-child</span>, <span class='code'>last-child</span> will target the last item of the element's parent."
	},
	{
		selector: 'x:only-child',
		example: '<pre class="prettyprint linenums">div p:only-child {<br>color: red;<br>}</pre>',
		description: "This allows you to target elements which are the <i>only</i> child of its parent."
	},
	{
		selector: 'x:only-of-type',
		example: '<pre class="prettyprint linenums">li:only-of-type {<br>font-weight: bold;<br>}</pre>',
		description: "This structural pseudo class can be used in some clever ways. It will target elements that do not have any siblings within its parent container."
	},
	{
		selector: 'x:first-of-type',
		example: '<pre class="prettyprint linenums">p:first-of-type {<br>font-size: 1.25em;<br>}</pre>',
		description: "The <span class='code'>:first-of-type</span> selector in CSS allows you to target the first occurence of an element within its container."
	}						
];





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

