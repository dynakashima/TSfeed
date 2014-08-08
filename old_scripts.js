<script type="text/template" id="comment-template">
  <div class="row">
    <div class="col-sm-2">
      <img height="50" width="50" src=<%= createdBy.icon %> />
    </div>
    <div class="col-sm-10">
      <div class="row">
        <div class="col-xs-2"><a><%= createdBy.name %></a></div>
        <div class="col-xs-7 feed-date"><%= createdAt %></div>
        <div class="col-xs-3"><!-- emptyspace --></div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <%= content %>
        </div>
      </div>
    </div>
  </div>
</script>

<script type="text/template" id="activity-template">
    <div class="row comment-view">
      <div class="col-sm-2 thumbnail">
        <img height="75" width="75" src= <%= createdBy.imgSrc %> />
      </div>
      <div class="col-sm-10">

        <!-- USER INFO -->
        <div class="row">
          <div class="col-xs-2"><a><%= createdBy.name %></a></div>
          <div class="col-xs-7 feed-date"><%= createdAt %></div>
          <div class="col-xs-3"><!-- emptyspace --></div>
        </div>

        <!-- BODY -->
        <div class="row">
          <div class="col-xs-12">
            <p><%= content %></p>
          </div>
        </div>

        <!-- OPTIONAL COMMENTS -->
        <div class="activity-comments-container"></div>

        <!-- LINKS -->
        <div class="row">
          <div class="col-xs-2"><a href="/#like">Like</a></div>
          <div class="col-xs-2" ><a class="edit-comment"  href="#">Comment</a></div>
          <div class="col-xs-2"><a href="/#delete">Delete</a></div>
          <div class="col-xs-6"><!-- emptyspace --></div>
        </div>

        <!-- CREATE COMMENT -->
        <div class="row edit-comment-view">
          <textarea id="textarea"></textarea> <br />
          <button type="button" class="btn btn-info btn-xs" id="submit-comment">Submit</button>
        </div>
      </div>
    </div>
</script>