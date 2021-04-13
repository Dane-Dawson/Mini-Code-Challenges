# RocketLauncher

Dane is looking to expand his passive income opportunities and is investing in rockets! Help him build a station to track his rocket, upgrade and test it, and then see if it's ready for launch.

## Setup

Read through the `README.md` in it's ENTIRETY (at least twice) before working on your code!

This project uses an externally hosted api, located at `https://rocket-launcher-api.herokuapp.com/rocket/rocket_info`. This will be where you do you `GET` fetch() request to, and that constant has already been created in your `index.js` file.

Open `index.html` to see the page, and continue to the deliverables below!

## Deliverables

- A user should be able to, once the page loads, see all the information for the rocket (name, year, model, goForLaunch, tests, upgrades, and the image) in it's appropriate fields

- A user should be able to click the `TEST ROCKET` button and have the `Tests` readout incremement on the left

- A user should be able to click the `UPGRADE ROCKET` button to change the `Upgrades` readout increment on the left

- Clicking `LAUNCH READY?` should toggle the readout to "true" if there is at least 1 `Upgrade` and 3 `Tests`.


## Prep our rocket

There is already an HTML template set up for us with placeholders in the HTML file telling us where to put each value. We have our constant `URL` with the URL to get our information from. The div `launch-card` is where you will display all of your information (in the appropriate fields) except the image, which is located in the `rocket-wrapper` div

This should happen when the page loads, so make sure you remember to write code to let this data happen as soon as the DOM has loaded all the HTML for us to manipulate. All the elements have unique, custom classes, use those to target specific elements and alter their values where appropriate.

## Test and upgrade the rocket

Dane doesn't want the base model for his rocket, he wants something SNAZZY! Let's connect the `UPGRADE ROCKET` button to increment the upgrades this rocket has recieved.

With great upgrades come great responsibility, let's make sure there is a way for us to test this rocket too! Connec the `TEST ROCKET` button to increment our test counter.

## Are we ready for take-off?

After upgrading and testing the rocket, we need to make sure that it's flight ready! For now, let's just check and make sure we did at least 1 upgrade and 3 tests on our rocket before deeming it flight ready. Connect our `LAUNCH READY?` button to alter the `Go For Launch` value to true, ONLY IF we have tested and upgraded enough!

Bonus: Just 3 tests doesn't seem like enough if we do a lot of upgrades...maybe 3 tests PER upgrade might be! See if you can set up the conditional that we are only `Go For Launch` if we have AT LEAST 3 times as many tests as upgrades.