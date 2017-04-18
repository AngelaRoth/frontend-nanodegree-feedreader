# Frontend Nanodegree Feedreader Project

An assignment for the Udacity Frontend Nanodegree designed to test knowledge of the [Jasmine](http://jasmine.github.io/) testing library.

For this project we were given a web-based application that reads RSS feeds, including the beginnings of the Jasmine code needed to create test suites. We then had to write suites to test various code functionality (see [Steps Required for Completion](#steps)).

## Loading and Running the Application

All Jasmine functionality runs on load. To load the application, simply load `index.html` into your local browser

### Passing and Failing

To check which Jasmine tests passed and which (if any) failed, scroll to the bottom of the page. Ideally, you will see a **green** banner which states the number of specs run and 0 failures. If one or more tests failed, the banner will be **red** and the details of the failed specs will be listed.

## One Additional Test

[Step 14](#step-fourteen) checks that at least a single `.entry` element exists within the `.feed` container ON LOAD. I wanted to make sure that all our feeds produce at least one entry, not just the feed which displays on load.

I wrote a function called `test_for_entries` which takes a feed ID as an parameter and then checks that the feed with that ID produces entries. I then call this function for each feed in `allFeeds`.

## <a id="steps">Steps Required for Completion</a>

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
<a id="step-fourteen">14.</a> Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass.
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.
