# reactive-button
A reactive button made with litElement

## Properties

- **conected**: Boolean property to make the button conected

## Styles
You can customize it using CSS Custom Properties.

Custom property | Description	| Default
--dile-rounded-button-border-radius |	Button border radius |	30px
--dile-rounded-button-background-color |	Button background color |	#e74c3c
--dile-rounded-button-height |	Height of the button |	30px
--dile-rounded-button-text-color |	Button text  color |	#fff
--dile-rounded-button-hover-background-color |	Button hover background color |	#303030
--dile-rounded-button-hover-text-color |	Button hover text color |	#fff
--dile-rounded-button-animation-time |	Hover button color animation |	0.3s
--dile-rounded-button-padding-x	Horizontal | padding |	20px
--dile-rounded-button-padding-y	Vertical | padding |	5px
--dile-rounded-button-text-transform |	Text transform |	uppercase
--dile-rounded-button-font-size |	Button text size |	1em
--dile-rounded-button-font-weight |	Button font weight |	normal

## Events
This component dispatch a custom event when the user clicks the button

- **dile-rounded-button-click**: there was a click in the button. If the button is in disabled state, the component do not dispatch the event.