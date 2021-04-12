# GoatTracker

Dane has been a happy goat owner for over a year now, and is thinking about expanding his collection...but first he needs a way to track the ones he already has! Can you help him create a simple dashboard to show some information about his goats? He's layed out a basic idea, he just needs help filling it out and making it responsive!

## Setup

After cloning (NOT FORKING!!) this repo down, make sure you have switched into your own branch with 
```
git checkout -b your-name
```

Read through the `README.md` in it's ENTIRETY (at least twice) before working on your code!

Open `index.html` to see the page, and continue to the deliverables below!

## Deliverables

- A user should be able to see the page load with all the information (name, age, picture, brushes, and good goat status) filled out in the correct elements.

- A user should be able to click the `brush goat` button and have the counter increment with each click

- A user should be able to click the `toggle goat` button to change the `good goat status` display of the goat

When we are done we should be able to get your page to look like this:

<img src="./DemoGif.gif" width="300px" />


## Show that goat!

There is already an HTML template set up for us with placeholders in the HTML file telling us where to put each value. `toph` is a constant stored on the top of our `index.js` file, our first task is to replace the placeholder values on the page with the values from our `toph` object, using ONLY JavaScript! 

This should happen when the page loads, so make sure you remember to write code to let this data happen as soon as the DOM has loaded all the HTML for us to manipulate. All the elements have unique, custom classes, use those to target specific elements and alter their values where appropriate.

## Brush our goats

Goats love attention...let's connect our `Brush goat` button with an event listener to track when we've brushed her! Every click should make the counter go up by one.

## BAAAAAAD GOAT!

Oh no! Toph climbed onto a play kitchen on Dane's back porch and started eating his weather stripping off his window (true story)! We need to get that `Toggle goat` button connected to another event listener that lets Dane know she has been a `BAD GOAT`!

Bonus: After some time to cool down Dane realized that he may have over-reacted and wants to make ammends...can you make it so the `Toggle goat` button can switch back and forth between `Good goat` and `BAD GOAT` easily?