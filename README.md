# Copilot Basics

A learning repository for exploring GitHub Copilot features and best practices for AI-assisted coding.

## Overview

This repository contains examples, exercises, and demonstrations of GitHub Copilot capabilities across different programming scenarios. It serves as a hands-on learning environment for understanding how to effectively collaborate with AI coding assistants.

## Repository Structure

```
├── .github/
│   └── copilot-instructions.md    # Copilot configuration and guidelines
├── Refactor/
│   └── Example_Optimize.sh        # Shell script optimization examples
├── Vision/
│   ├── Picture1.png              # Sample images for vision-based exercises
│   └── Courses.png               # ERD diagram examples
├── .gitignore                    # Git ignore patterns
└── README.md                     # This file
```

## Features

### Code Generation Examples
- **Shell Scripting**: File processing and optimization techniques
- **Palindrome Detection**: Algorithm implementations in multiple languages
- **Data Structure Visualization**: Entity-relationship diagrams and analysis

### Copilot Integration
- Custom instructions for consistent code generation
- Documentation guidelines for clear communication
- Best practices for AI-assisted development

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/venkat-sundaram/Copilot_Basics.git
   cd Copilot_Basics
   ```

2. **Explore the examples**:
   - Review shell scripts in the `Refactor/` directory
   - Examine vision-based exercises in the `Vision/` directory
   - Read Copilot configuration in `.github/copilot-instructions.md`

3. **Try the code**:
   ```bash
   # Run shell script examples
   chmod +x Refactor/Example_Optimize.sh
   ./Refactor/Example_Optimize.sh
   ```

## Code Samples

### Palindrome Detection (Python)
```python
def is_palindrome(s):
    """Check if a string is a palindrome, ignoring case and punctuation."""
    cleaned = ''.join(char.lower() for char in s if char.isalnum())
    return cleaned == cleaned[::-1]

# Example usage
print(is_palindrome("A man a plan a canal Panama"))  # True
```

### File Processing (Bash)
```bash
#!/bin/bash
# Count lines in all .txt files
for file in $(find . -type f -name "*.txt"); do
    wc -l "$file"
done
```

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

- Understand GitHub Copilot's capabilities and limitations
- Practice effective prompt engineering for code generation
- Explore different programming paradigms with AI assistance
- Learn best practices for AI-assisted development workflows

## Technologies

- **Languages**: Python, Bash, JavaScript
- **Tools**: GitHub Copilot, VS Code, Git
- **Topics**: Algorithm design, data structures, code optimization

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
