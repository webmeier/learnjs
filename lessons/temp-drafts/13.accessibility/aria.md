Notes on inclusive and aria
Voice over: command F5. Live region: aria-live + role
Aria live can be polite or assertive. Assertive means screen readers interrupt immediately when changed. Polite means it’ll wait till stuff has finished reading. When assertive, role should be alert. Useful links.
* Http://smashed.by/contentfeedback
* Http://smashed.by/a11ytesting
* smashed.by/apps4all
Infinite scroll pattern has inclusivity issues. Smashing book of 240.
Tabindex –1 to use Javascript focus method. Helpful because items not focusable by keyboard directly.
* Aria toolbar?
* Aria-label
* Aria-labelleby
* Aria-pressed
* Aria-collapsed
* aria-hidden = aural version of display none
* aria-required
* aria-invalid
Required attribute not implemented uniformly across browsers. So, need aria-require. (Caniuse.com/#feat=form-validation)
Double check input and label with voiceover.
Fieldset and legend for aria? Make sure legend is actually used. Pg 273 heydon rules for field sets.
Form submission (can put errors right before submit button)
Dig deeper into aria-role? Not often used I think.
Error handling for form fields 😭. 1) provide error message at bottom 2) provide error hints for each error. Add aria-labelled ya for this password hint (pg 284) 3) mark invalid with aria-invalid
Input event. Change event.