//Wait until the DOM is ready
$(function() {

  //First test suite contains tests about the allFeeds variable
  describe('RSS Feeds', function() {

    //test if allFeeds is defined and that it is not empty
    it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });

    //test if each feed has an url defined which is not empty
    it('should have a non-empty url', function() {
      for(let i in allFeeds){
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url.length).not.toBe(0);
        }
    });

    //test if each feed has a name defined which is not empty
    it('should have a non-empty name', function() {
      for(let i in allFeeds){
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name.length).not.toBe(0);
        }
    });
  });//end 'RSS Feeds'



  //Second test suite contains tests about the visibility of the menu
  describe('The menu', function() {

    //test is the menu is not visible by default
    it ('should be hidden by default', function(){
      expect($(document.body).hasClass("menu-hidden")).toBe(true);
    })

    //test if the menu dis-/appears when clicked
    it('should change visibility when clicked', function(){
      const menuIcon=document.querySelector('.menu-icon-link');
      //first "click" should show the menu
      $(menuIcon).trigger('click');
      expect($(document.body).hasClass("menu-hidden")).toBe(false);
      //second "click" should hide the menu
      $(menuIcon).trigger('click');
      expect($(document.body).hasClass("menu-hidden")).toBe(true);
    })
  })//end 'The menu'



  //Third test suite contains a test about loading the entries
  describe('Initial Entries', function() {
    //loads the feeds and waits until it's done
    beforeEach(function(done){
      loadFeed(0, function(){
      done();
      });
    })

    //test if at least 1 entry is loaded
    it('should have at least a single .entry within the .feed container',function(done){
      expect($('.feed .entry').length).toBeGreaterThan(0)
      done();
    })
  })//end Initial entries



  //fourth test suite contains a test about loading different feeds
  describe('New Feed Selection', function(){
    var content1;
    var content2;
    //Loads 2 feeds which  are stored in the 2 variables;
    beforeEach(function(done) {
      loadFeed(0, function() {
        content1 = $('.feed').html();
        loadFeed(1, function() {
          content2 = $('.feed').html();
          done();
        })
      })
    })//end beforeEach

    //test if loaded content is defined and differs from each other
    it('should load entries with different content', function(done){
      expect(content1).toBeDefined();
      expect(content2).toBeDefined();
      expect(content1!==content2).toBe(true);
      done();
    })
  })// end New Feed Selection

})//end test suite
