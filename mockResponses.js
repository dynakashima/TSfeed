var getMeResponse = {
  "@cls": "person",
  "metadata": [
    {
      "key": "url",
      "value": "\/xapi\/v2\/resources\/@me?method=get"
    },
    {
      "key": "query",
      "value": "{\"@cls\":\"query\",\"fields\":[\"icons\"]}"
    },
    {
      "key": "user",
      "value": "social.user.1.109.301"
    },
    {
      "key": "version",
      "value": "2.0.0"
    }
  ],
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
  "display_name": "nullN\/A",
  "last_name": "N\/A"
};

var createStatusResponse = {
  "@cls": "item",
  "metadata": [
    {
      "key": "url",
      "value": "\/xapi\/v2\/resources\/"
    },
    {
      "key": "user",
      "value": "social.user.1.109.301"
    },
    {
      "key": "version",
      "value": "2.0.0"
    }
  ],
  "id": "social.status.1.110.202"
};

var createCommentResponse = {
  "@cls": "item",
  "metadata": [
    {
      "key": "url",
      "value": "\/xapi\/v2\/resources\/social.status.1.110.101\/comments"
    },
    {
      "key": "user",
      "value": "social.user.1.109.301"
    },
    {
      "key": "version",
      "value": "2.0.0"
    }
  ],
  "id": "social.comment.1.13.301"
};

var deleteCommentResponse = {
  "@cls": "response",
  "metadata": [
    {
      "key": "url",
      "value": "\/xapi\/v2\/resources\/social.comment.1.13.301"
    },
    {
      "key": "user",
      "value": "social.user.1.109.301"
    },
    {
      "key": "version",
      "value": "2.0.0"
    }
  ]
}
