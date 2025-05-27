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
