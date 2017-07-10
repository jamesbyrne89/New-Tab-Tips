// List of JavaScript tips
var tipsList = [
	{
		selector: '*',
		example: '<span class="code-block">* {<br>margin: 0;<br>padding: 0;<br>}</span>',
		description: "The star symbol will target every single element on the page. Many developers will use this trick to zero out the margins and padding. While this is certainly fine for quick tests, I'd advise you to never use this in production code. It adds too much weight on the browser, and is unnecessary."
	},
	{
		selector: '#id',
		example: '<span class="code-block">#container {<br>width: 960px;<br>margin: auto;<br>}</span>',
		description: "Prefixing the hash symbol to a selector allows us to target by id. This is easily the most common usage, however be cautious when using id selectors.<br>Ask yourself: do I absolutely need to apply an id to this element in order to target it?<br>id selectors are rigid and don't allow for reuse. If possible, first try to use a tag name, one of the new HTML5 elements, or even a pseudo-class."
	},
	{
		selector: '.class',
		example: '<span class="code-block">.error {<br>color: red;<br>}</span>',
		description: "This is a class selector. The difference between ids and classes is that, with the latter, you can target multiple elements. Use classes when you want your styling to apply to a group of elements. Alternatively, use ids to find a needle-in-a-haystack, and style only that specific element."
	}			
];

// Tip Limit counter


const backgroundColours = 
[
'#ECDEDA',
'#FFF4E9',
'#DCE7E9',
'#D1C7B2'
]



// Generate a number


// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip

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

// Tip button click
// 1. Select the tip button
// 2. Add a click event listener
// 3. When the button is clicked:
// 3a. Subtract 1 from the tipLimit
// 3b. If the tipLimit is still above or equal to 0, generate a new tip
// 3c. If not, change the button text and look


// Get the first tip
// 
// 
// 
