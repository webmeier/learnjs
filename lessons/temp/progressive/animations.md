## What if your user doesn't have JavaScript enabled?

If your user doesn't have JavaScript enabled, they won't be able to see your JavaScript animations.

If they don't have JavaScript enabled, they won't be able to see the animations you've created with CSS transitions too!

Don't understand why?

Think about it this way.

The animations you create with CSS transitions require users to interact with your website (like clicking a button). Right?

Recall that events happen when users interact with your site. Without JavaScript, events don't happen. You can't add event listeners. You can't change classes with JavaScript. You can't animate things for them (except when you trigger the transition or animation through pseudo classes like `:hover`).

This means you need to create a baseline experience where the site looks alright and functions well without JavaScript. This can be impossible when you're creating web applications that require user interaction, but it's totally doable if you're serving up a website that mainly contains information.

This baseline-experience mindset without JavaScript is part of a mindset called **Progressive Enhancement**. You'll learn about progressive enhancement in a later module.

For now, focus on learning to make components that work for most people. Ignore the outliers. You'll learn to deal with them later.