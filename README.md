# Copilot Basics

A comprehensive learning repository for exploring GitHub Copilot features and best practices for AI-assisted coding across multiple programming languages and scenarios.

## Overview

This repository contains examples, exercises, and demonstrations of GitHub Copilot capabilities organized into focused learning modules. Each folder represents a specific aspect of AI-assisted development, from basic code completion to advanced debugging and documentation generation.

## Repository Structure

The repository is organized into the following folders (in alphabetical order):

### 0_Resources/
**Purpose**: Comprehensive collection of GitHub Copilot learning resources and documentation links.

**Contents**: Curated list of official documentation, tutorials, learning platforms, and community resources for mastering GitHub Copilot.


### 1_Code_Completion/
**Purpose**: Demonstrates basic code completion and auto-generation capabilities of GitHub Copilot.

**Contents**: Simple starter files including JavaScript calculator functions, Express server setup, and Python mathematical operations.

**Sample Prompt**: 

_// Create a calculator function that adds two numbers_


### 2_Explain/

**Purpose**: Showcases Copilot's ability to explain and document existing code across different programming languages.

**Contents**: Complex code examples in C# (API retry logic), COBOL (database operations), and TypeScript (Prisma service layer).

**Sample Prompt**: 

_Explain this C# async method that handles API retries with exponential backoff_ or 

_Document this COBOL program that inserts records into a database_

### 3_Refactor/

**Purpose**: Demonstrates code optimization and refactoring suggestions from Copilot.

**Contents**: Shell script examples that can be improved for better performance and readability.

**Sample Prompt**: 

_Refactor this shell script to be more efficient and handle edge cases better_" or 

_Optimize this bash script for better performance_ 

### 4_Security/

**Purpose**: Illustrates security vulnerability detection and secure coding practices with Copilot.

**Contents**: JavaScript code with potential security issues like XSS vulnerabilities in DOM manipulation.

**Sample Prompt**: 

_Review this JavaScript function for security vulnerabilities_ or 

_Fix the XSS vulnerability in this DOM manipulation code_

### 5_Debug/

**Purpose**: Shows debugging capabilities and error identification assistance.

**Contents**: Python Flask API with potential issues and malformed JSON response files.

**Sample Prompt**: 

_Find and fix the JSON syntax error in this response file_ or

_Help me debug this Flask weather API that's returning errors_ 

### 6_Documentation/

**Purpose**: Demonstrates automatic documentation generation and diagram creation capabilities.

**Contents**: Mermaid diagram examples showing project timelines and visual documentation.

**Sample Prompt**: 

_Create a Mermaid diagram showing the project phases and dependencies that covers the period August 1st 2025 until January 31st 2026. Include 5 Phases each taking 6 weeks, and overlapping equally spaced milestones._


### 7_Tests/

**Purpose**: Showcases test generation and validation logic creation with Copilot.

**Contents**: Python validation functions that demonstrate business logic testing scenarios.

**Sample Prompt**: 

_/tests Generate unit tests for this price validation function. Validate both success and failure, and include edge cases._

### 8_Code_Review/

**Purpose**: Illustrates code review assistance and improvement suggestions.

**Contents**: Python functions with potential inefficiencies and areas for optimization.

**Sample Prompt**: 

_Right Click and Choose Generate Code -> Review_

### 9_Vision/

**Purpose**: Demonstrates Copilot's visual analysis capabilities with images and diagrams.

**Contents**: Sample images and diagrams for testing vision-based code generation and analysis.

**Sample Prompt**: 

_Analyze this database schema diagram and generate the corresponding code for a microservice_ or 

_Explain this image_

### 10_Edit_Mode/

**Purpose**: Using Edit Mode, this shows inline editing and code modification capabilities for multiple files in an interactive development environment.

**Contents**: Simple Python modules demonstrating function calls and imports for testing edit suggestions.

**Sample Prompt**: 

_Change sum_numbers to add_numbers_


## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/venkat-sundaram/Copilot_Basics.git
   cd Copilot_Basics
   ```

2. **Explore the learning modules**:
   - Start with `0_Resources/` to understand available learning materials
   - Practice basic completion with files in `1_Code_Completion/`
   - Try explaining complex code in `2_Explain/`
   - Work through each numbered folder progressively

3. **Use GitHub Copilot**:
   - Enable GitHub Copilot in your IDE
   - Open any file and start typing prompts based on the sample suggestions
   - Experiment with different prompt styles and techniques

## Key Learning Areas

### Code Completion & Generation
Learn how to effectively prompt Copilot for:
- Function and class generation
- Algorithm implementations
- Boilerplate code creation
- Multi-language code patterns

### Code Analysis & Explanation
Practice using Copilot to:
- Understand complex legacy code
- Generate comprehensive documentation
- Explain algorithms and business logic
- Create API documentation

### Code Quality & Security
Explore Copilot's capabilities in:
- Identifying security vulnerabilities
- Suggesting performance optimizations
- Code refactoring recommendations
- Best practice implementations

### Testing & Debugging
Utilize Copilot for:
- Test case generation
- Bug identification and fixing
- Error handling improvements
- Validation logic creation

## Documentation Guidelines

This project follows specific documentation standards:

- Use present tense verbs
- Write factual statements and direct commands
- Use active voice where the subject performs the action
- Write in second person (you) to speak directly to readers
- Include code examples where applicable

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-example`)
3. Commit your changes (`git commit -am 'Add new coding example'`)
4. Push to the branch (`git push origin feature/new-example`)
5. Create a Pull Request

## Learning Objectives

- Master GitHub Copilot's diverse capabilities across different programming scenarios
- Develop effective prompt engineering skills for various coding tasks
- Understand how to leverage AI assistance for code quality and security
- Practice collaborative development with AI-powered tools
- Learn to critically evaluate and refine AI-generated code suggestions

## Technologies & Languages

- **Languages**: Python, JavaScript, TypeScript, C#, COBOL, Bash
- **Frameworks**: Flask, Express.js, Prisma
- **Tools**: GitHub Copilot, VS Code, Git, Mermaid
- **Topics**: API development, database operations, security analysis, testing, documentation

## Resources

- [GitHub Copilot Documentation](https://docs.github.com/copilot)
- [VS Code Copilot Extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [Copilot Best Practices](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please open an issue or reach out through GitHub.

---

*This repository is part of a learning journey with GitHub Copilot. Happy coding! 🚀*
