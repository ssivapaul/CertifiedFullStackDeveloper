let showLatestPosts = (posterObject) => {
  let { users, topic_list } = posterObject;
  let { topics } = topic_list;
  let postsContainer = document.getElementById("posts-container");
  let rows = topics
    .map((topic) => {
      let {
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      } = topic;
      return `<tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
          ${forumCategory(category_id)}
        </td>
        <td>
          <div class="avatar-container">${avatars(posters, users)}</div>
        </td>
        <td>${posts_count - 1}</td>
        <td>${viewCount(views)}</td>
        <td>${timeAgo(bumped_at)}</td>
      </tr>`;
    })
    .join("");
  postsContainer.innerHTML = rows;
};
