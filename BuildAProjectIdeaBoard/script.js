const projectStatus = {
  PENDING: {
    description: "Pending Execution",
  },
  SUCCESS: {
    description: "Executed Successfully",
  },
  FAILURE: {
    description: "Execution Failed",
  },
};

class ProjectIdea {
  constructor(title, description) {
    this.description = description;
    this.title = title;
  }
  status = projectStatus.PENDING;
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }
  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }
  unpin(projectIdea) {
    let index = this.ideas.indexOf(projectIdea);
    this.ideas.splice(index, 1);
  }
  count() {
    return this.ideas.length;
  }
  formatToString() {
    if (this.ideas.length === 0)
      return `${this.title} has ${this.count()} idea(s)\n`;
    if (this.ideas.length !== 0) {
      return `${this.title} has ${this.count()} idea(s)\n${this.ideas.map(
        (idea) =>
          `${idea.title} (${idea.status.description}) - ${idea.description}\n`
      )}`;
    }
  }
}

/*let emptyBoard = new ProjectIdeaBoard("Empty Board")
console.log(emptyBoard.formatToString())
*/
let techProjects = new ProjectIdeaBoard("Tech Projects Board");
techProjects.pin(
  new ProjectIdea(
    "Smart Home System",
    "An integrated system to control lighting, temperature, and security devices remotely."
  )
);

console.log(techProjects.formatToString());
