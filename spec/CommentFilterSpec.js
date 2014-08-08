describe("Comment objects :: ", function() {

  var commentFilter;
  var mockData;

  beforeEach(function() {
    commentFilter = BackboneApp.Filters.filterComment;
    // grab the comments
    // mockData = _.find(EXAMPLE_FEED.site_feed, function(activity) {
    //   return activity.object.comments && activity.object.comments.length !== 0;
    // });
    mockData = {
      "@cls": "comment",
      "id": "social.comment.1.13.102",
      "name": "comment_002",
      "icons": [
        {
          "type": "icon",
          "value": "\/images\/Comment.gif"
        },
        {
          "type": "photo",
          "value": "\/images\/Comment-large.gif"
        }
      ],
      "content": "comment_002",
      "target": {
        "@cls": "status",
        "id": "social.status.1.110.1",
        "name": "status post",
        "icons": [
          {
            "type": "icon",
            "value": "\/images\/Status.gif"
          },
          {
            "type": "photo",
            "value": "\/images\/Status-large.gif"
          }
        ],
        "content": "Welcome to TempoSocial 8.5!",
        "subject": "status post",
        "created_date": 1392073361390,
        "modified_date": 1406927736400,
        "write_activity": {
          "daily_count": 0,
          "weekly_count": 2,
          "monthly_count": 2,
          "total_count": 2,
          "reset_date": 1406927820467
        },
        "is_owner": false,
        "is_under_moderation": false,
        "is_subscribed": false
      },
      "context": {
        "@cls": "status",
        "id": "social.status.1.110.1",
        "name": "status post",
        "icons": [
          {
            "type": "icon",
            "value": "\/images\/Status.gif"
          },
          {
            "type": "photo",
            "value": "\/images\/Status-large.gif"
          }
        ],
        "content": "Welcome to TempoSocial 8.5!"
      },
      "created_date": 1406927736398,
      "created_by": {
        "@cls": "person",
        "id": "social.user.1.109.301",
        "name": "otag",
        "icons": [
          {
            "type": "icon",
            "value": "\/images\/UserProfile.gif"
          },
          {
            "type": "photo",
            "value": "\/images\/UserProfile-large.gif"
          }
        ],
        "emails": [
          {
            "type": "main",
            "value": "otag@otag",
            "primary": true
          }
        ],
        "display_name": "nullN\/A",
        "last_name": "N\/A"
      }
    };

  });

  // possibly redundant
  it("filterComment helper should be defined", function() {
    expect(BackboneApp.Filters).toBeDefined();
    expect(BackboneApp.Filters.filterComment).toBeDefined();
  });
  describe("COMMENT attributes :: ", function() {
    var comment;
    beforeEach(function() {
      comment = commentFilter(mockData);
    });
    it("should have an id field", function() {
      expect(comment.id).toBeDefined();
      expect(comment.id).toEqual("social.comment.1.13.102");
    });

    it("should have a content field", function() {
      expect(comment.content).toBeDefined();
      expect(comment.content).toEqual("comment_002")
    });
    it("should have a createdAt field", function() {
      expect(comment.createdAt).toBeDefined();
      expect(typeof comment.createdAt).toEqual("string");
      expect(comment.createdAt).toEqual("Jul 1, 2014 at 4:15 PM");
    });
    describe("USER (createdBy) :: ", function() {
      var createdBy;
      beforeEach(function() {
        createdBy = comment.createdBy;
      });
      it("should exist", function() {
        expect(createdBy).toBeDefined();
        expect(typeof createdBy).toEqual("object");
      });
      it('should have an id field', function() {
        expect(createdBy.id).toBeDefined();
        expect(createdBy.id).toEqual('social.user.1.109.301');
      });
      it('should have a name field', function() {
        expect(createdBy.name).toBeDefined();
        expect(createdBy.name).toEqual('otag');
      });
      it('should have and imgSrc field', function() {
        expect(createdBy.imgSrc).toBeDefined();
        expect(createdBy.imgSrc).toEqual("\/otts\/images\/UserProfile.gif");
      })
    });


  });

});
