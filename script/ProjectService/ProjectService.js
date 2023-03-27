
class ProjectService {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  deleteProject(id) {
    this.projects = this.projects.filter(project => project.Id !== id);
  }

  updateProject(project) {
    const index = this.projects.findIndex(p => p.Id === project.id);
    if (index !== -1) {
      this.projects[index] = project;
    }
  }

  getProjectById(id) {
    return this.projects.find(project => project.Id === id);
  }

  getAllProjects() {
    return this.projects;
  }
}