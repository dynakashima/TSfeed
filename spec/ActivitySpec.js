describe("An Activity", function() {

  var activity;
  var mockActivity;

  beforeEach(function() {
    mockActivity = {
      "@cls": "activity",
      "id": "social.activity.1392073361568_100891910_1901708246",
      "actor": {
        "@cls": "person",
        "id": "social.user.1.109.3",
        "name": "janet",
        "icons": [
          {
            "type": "icon",
            "value": "\/gm\/document-1.9.106\/janet_activityfeed_40x47.jpg"
          },
          {
            "type": "photo",
            "value": "\/gm\/document-1.9.104\/janet_fullprofile_135x180.jpg"
          },
          {
            "type": "thumbnail",
            "value": "\/gm\/document-1.9.105\/janet_mini-profile_79x105.jpg"
          }
        ],
        "display_name": "Janet JANET",
        "first_name": "Janet",
        "last_name": "JANET"
      },
      "verb": "post",
      "object": {
        "@cls": "status",
        "id": "social.status.1.110.1",
        "name": "status post",
        "owner": {
          "@cls": "person",
          "id": "social.user.1.109.3",
          "name": "janet",
          "display_name": "Janet JANET",
          "first_name": "Janet",
          "last_name": "JANET"
        },
        "comments": [
          {
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
          },
          {
            "@cls": "comment",
            "id": "social.comment.1.13.101",
            "name": "comment_001",
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
            "content": "comment_001",
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
            "created_date": 1406927719920,
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
          }
        ],
        "content": "Welcome to TempoSocial 8.5!",
        "created_by": {
          "@cls": "person",
          "id": "social.user.1.109.3",
          "name": "janet",
          "display_name": "Janet JANET",
          "first_name": "Janet",
          "last_name": "JANET"
        }
      },
      "record": "actId=1392073361568_100891910_1901708246;actType=post.Status;actDate=1392073361568;userId=janet;domainId=default_domain;authRealm=otag;scopeId=1.104.105;groupId=null;objId=1.110.1;contextId=janet;weight=5",
      "target": {
        "@cls": "person",
        "id": "social.user.1.109.3",
        "name": "janet",
        "owner": {
          "@cls": "person",
          "id": "social.user.1.109.3",
          "name": "janet",
          "display_name": "Janet JANET",
          "first_name": "Janet",
          "last_name": "JANET"
        },
        "display_name": "Janet JANET",
        "created_by": {
          "@cls": "person",
          "id": "social.user.1.109.3",
          "name": "janet",
          "display_name": "Janet JANET",
          "first_name": "Janet",
          "last_name": "JANET"
        },
        "first_name": "Janet",
        "last_name": "JANET"
      },
      "priority": 5,
      "published": 1392073361568,
      "site": {
        "@cls": "site",
        "id": "social.site.1.104.105",
        "name": "temposocial"
      }
    };
    activity = new BackboneApp.Models.Activity(
    	BackboneApp.Filters.filterPost(mockActivity)
    );
  });
	it("should have an id field", function() {
		expect(activity.id).toBeDefined();
		expect(activity.id).toEqual("social.status.1.110.1");
	});
	it("should have a content field", function() {
		expect(activity.get('content')).toBeDefined();
		expect(activity.get('content')).toEqual("Welcome to TempoSocial 8.5!");
	});
	it("should have a createdAt field", function() {
		expect(activity.get('createdAt')).toBeDefined();
	});

  describe("COMMENTS", function() {
    var comments;
    beforeEach(function() {
      comments = activity.get('comments');
    });
    it("should exist", function() {
      expect(comments).toBeDefined();
		});
    it("should contain the correct amount of comments", function() {
      expect(comments.length).toBeDefined();
      expect(comments.length).toEqual(2);
      console.log(activity);
    });

  });

  describe("USER (createdBy) ", function() {
    var createdBy;
    beforeEach(function() {
      createdBy = activity.get('createdBy');
    });
    it("should exist", function() {
      expect(createdBy).toBeDefined();
      expect(_.isObject(createdBy)).toBeTruthy();
    });
    it('should have an id field', function() {
      expect(createdBy.id).toBeDefined();
      expect(createdBy.id).toEqual('social.user.1.109.3');
    });
    it('should have a name field', function() {
      expect(createdBy.name).toBeDefined();
      expect(createdBy.name).toEqual('Janet JANET');
    });
    it('should have and icon field', function() {
      expect(createdBy.icon).toBeDefined();
      expect(createdBy.icon).toEqual("\/otts\/gm\/document-1.9.106\/janet_activityfeed_40x47.jpg");
    });
  });

});
