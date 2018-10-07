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
        expect(allFeeds.length).not.toBe(0
    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('should have a non-empty url', function() {
      for(let i in allFeeds){
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url.length).not.toBe(0);
        }
    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('should have a non-empty name', function() {
      for(let i in allFeeds){
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].url.name).not.toBe(0);
        }
    });
  });//end 'RSS Feeds'


  /* TODO: Write a new test suite named "The menu" */
  describe('The menu', function() {
    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it ('should be hidden by default', function(){
      expect(document.body.className).toBe('menu-hidden');
    })
    /* TODO: Write a test that ensures the menu changes
    * visibility when the menu icon is clicked. This test
    * should have two expectations: does the menu display when
    * clicked and does it hide when clicked again.
    */
    it('should change visibility when clicked', function(){
      const menuIcon=document.querySelector('.menu-icon-link');
      //triggerFunction clicks the menuIcon(x)times
      const triggerFunction=function(x){
        for(let i=0; i<x; i++){
          $(menuIcon).trigger('click');
        }
      }
      //menuIcon is clicked twice(even)
      triggerFunction(2);
      expect(document.body.className).toBe('menu-hidden');
      //menuIcon is clicked three times more(odd)
      triggerFunction(3);
      expect(document.body.className).not.toBe('menu-hidden');
    })
  })//end 'The menu'

  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {
    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    beforeEach(function(done){
      loadFeed(0, function(){
      done();
      });
    })

    it('should have at least a single .entry within the .feed container',function(done){
      expect(document.querySelector('.entry')).not.toBe(0);
      done();
    })
  })//end Initial entries


  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function(){
    /* TODO: Write a test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    * Remember, loadFeed() is asynchronous.
    */
    var content1;
    var content2;
    beforeEach(function(done){
      loadFeed(0,  function (){
        content1=document.querySelector('.entry-link').innerHTML;
      })
      loadFeed(1,  function (){
        content2=document.querySelector('.entry-link').innerHTML;
      done()
      })
    })//end BeforeEach

    it('should load entries with different content', function(done){
      expect(content1).toBeDefined();
      expect(content2).toBeDefined();
      expect(content1!==content2).toBe(true);
      done();
    })
  })// end New Feed Selection

})//end test suite
