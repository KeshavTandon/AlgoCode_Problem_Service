const SanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  } //doubt
  async createProblem(problemData) {
    try {
      //1.Sanitize the description
      problemData.description = SanitizeMarkdownContent(
        problemData.description
      );
      const problem = this.problemRepository.createProblem(problemData); //doubt
      return problem;
    } catch (error) {}
  }
}

module.exports = ProblemService;
