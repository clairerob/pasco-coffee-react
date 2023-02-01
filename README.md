Pasco Coffee Bar Website

My goal was to create an informative, attractive website for a local speciality coffee shop, using React.

The website needed to:
let customers know about the shop
connect them to pre-established online ordering on Square
communicate the value of specialty coffee
provide online ordering for their workshops
be highly flexible for frequently-changing menu offerings

I chose Sanity for the back-end as it is relatively accessible to a non-programmer to be able to update data ongoingly. This was a big challenge for me as I have never worked with anything other than the json-server we used during the React courses, but after reading the documentation and following a basic tutorial  I succeeded in building out a very basic structure and connecting it to the front end.

I learned a lot more about git during this project as I started using branches as I started adding bigger features to the project, and learned the hard way to be sure to add any secondary node module folders to my gitignore file!

I used Redux for state management as I wanted more practice with it and saw it relatively straightforward to adapt to data fetching from Sanity.

For styling I primarily used reactstrap, a bootstrap-for-react library a bit different from the one we used in the course. I primarily chose it for the carousel provision but ended up preferring the modularity it provided. I also created a playful svg background - as the coffee bar and website provide coffee education and an emphasis on quality that is new to the area, I hoped to communicate an openness and friendliness, rather than coffee-snobbery!

Several prominent links to online ordering are placed throughout the site, most notably in the header and footer, to make it easy for customers to make that step in minimal clicks.

I also used Formik to create and validate the contact form.

The coffee map page provides information about the different varieties of coffee available, and also provokes customers to consider the origins of their coffee - its quality, its character, its flavor - and to take the time to appreciate the individuality of each cup. It will hopefully encourage them to come back - or come for the first time - to try something new, or even to attend one of the workshops offered.
I worked with react-simple-maps, creating a topojson file on mapshaper.org that put emphasis on the southern hemisphere’s coffee-producing countries, adjusting the detail level to my preference. The individual country styles are set conditionally based on the coffees marked as currently available, and tooltip content is triggered by the onMouseEnter event to display any relevant single origin coffee’s information, resetting it to an empty string onMouseLeave. The entire map is memoized to prevent re-rendering on every event.

The coffee class page contains a set of filters which control the display of informational cards about each workshop. The button group labels and filter-setting is created based on the data received from Sanity, meaning the page will remain up to date with whatever data is on the backend, including conditional styling for any classes which do not have any remaining availability. For all class cards with availability, clicking will open a modal which will eventually lead to a form and payment page, to actually book the class through either square or stripe - that’s my next challenge!


This site is still a test version, completed as the honors project for Nucamp's Front End Web&Mobile Development Bootcamp, and will be adapted to a final version following further decisions on the part of the business.
second round color thoughts:
https://coolors.co/palette/001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226
