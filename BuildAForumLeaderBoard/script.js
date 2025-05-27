const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

let timeAgo = (pasTime) => {
  const past = new Date(pasTime);
  const now = new Date();
  let diffMs = now - past; // Difference in milliseconds
  let diffmin = Math.floor(diffMs / (1000 * 60));
  let diffhr = Math.floor(diffmin / 60);
  let diffDay = Math.floor(diffhr / 24);

  if (diffDay > 0) return `${diffDay}d ago`;
  if (diffhr > 0) return `${diffhr}h ago`;
  return `${diffmin}m ago`;
};

/*
let timeAgo = (pastTime) => {
  const past = new Date(pastTime);
  const now = new Date();
  const diffMs = now - past; // in ms
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffDay > 0) return `${diffDay}d ago`;
  if (diffHr > 0) return `${diffHr}h ago`;
  return `${diffMin}m ago`;
};
*/

let viewCount = (viewsCount) => {
  if (viewsCount >= 1000) {
    return `${Math.floor(viewsCount / 1000)}k`;
  } else {
    return viewsCount;
  }
};

let forumCategory = (catId) => {
  if (catId in allCategories) {
    return `<a href="https://forum.freecodecamp.org/c/${allCategories[catId]["className"]}/${catId}" class="category ${allCategories[catId]["className"]}">${allCategories[catId]["category"]}</a>`;
  } else {
    return `<a href="https://forum.freecodecamp.org/c/general/${catId}" class="category general">General</a>`;
  }
};

let avatars = (posters, users) => {
  let image = "";
  posters.forEach((poster) => {
    let user = users.find((u) => u.id === poster.user_id);
    if (user) {
      let avatarSrc = user.avatar_template.replace("{size}", "30");
      if (avatarSrc.startsWith("/")) {
        avatarSrc = `${avatarUrl}${avatarSrc}`;
      }
      image += `<img src="${avatarSrc}" alt="${user.name}"/>`;
    }
  });
  return image;
};

/*-------------------------------------------------------------
let avatars = (posters, users) => {
  return posters
    .map((poster) => {
      let user = users.find((u) => u.id === poster.user_id);
      if (user) {
        let avatarSrc = user.avatar_template.replace("{size}", "30");
        if (avatarSrc.startsWith("/")) {
          avatarSrc = `${avatarUrl}${avatarSrc}`;
        }
        return `<img src="${avatarSrc}" alt="${user.name}" />`;
      }
      return "";
    })
    .join("");
};

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

-------------------------------------------------------------------*/
let showLatestPosts = (posterObject) => {
  let { users, topic_list } = posterObject;
  let { topics } = topic_list;
  let postsContainer = document.getElementById("posts-container");
  let rows = "";
  for (let topic of topics) {
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
    rows += `<tr>
                <td>
                  <a class = "post-title" href ="${forumTopicUrl}${slug}/${id}">${title}</a>${forumCategory(
      category_id
    )}
                </td>
                <td><div class="avatar-container">${avatars(
                  posters,
                  users
                )}</div></td>
                <td>${posts_count - 1}</td>
                <td>${viewCount(views)}</td>
                <td>${timeAgo(bumped_at)}</td>
              </tr>`;
  }
  postsContainer.innerHTML = rows;
};

let fetchData = async () => {
  try {
    let response = await fetch(forumLatest);
    let data = await response.json();
    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
