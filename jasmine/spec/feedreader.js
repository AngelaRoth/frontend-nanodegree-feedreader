/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Step 8: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all have defined URLs', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
            });
        });

        it('all have URL values', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
        });

        /* Step 9: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all have defined names', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
            });
        });

        it('all have name values', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
            });
        });
    });


    /* Step 10: Write a new test suite named "The menu" */
    describe('The menu', function() {
        var menuHidden;
        /* Step 11: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default',  function() {
            menuHidden = $('body').hasClass('menu-hidden');
            expect(menuHidden).toBe(true);
        });

         /* Step 12: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            menuHidden = $('body').hasClass('menu-hidden');
            expect(menuHidden).toBe(false);
            $('.menu-icon-link').trigger('click');
            menuHidden = $('body').hasClass('menu-hidden');
            expect(menuHidden).toBe(true);
        });
    });


    /* Step 13: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Step 14: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        var numFeedListItems = $('.feed-list').children().length;
        console.log('numFeedListItems = ' + numFeedListItems);

        function test_if_exist(feedNum) {
            beforeEach(function(done) {
                console.log('feedNum = ' + feedNum);
                loadFeed(feedNum, function() {
                    done();
                });
            });

            it('for feed ' + feedNum + ' exist on load', function(done) {
                var numFeedChildren = $('.feed').children().length;
                expect(numFeedChildren).toBeTruthy();
                done();
            });

        }

        for (var i = 0; i < numFeedListItems; i++) {
            test_if_exist(i);
        }
    });


    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
