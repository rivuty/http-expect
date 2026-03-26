# Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Discussing the current state of the code
- Reporting a bug
- Submitting a fix
- Proposing new features

## We Develop with GitHub

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same
[MIT License](http://choosealicense.com/licenses/mit/)
that covers the project. Feel free to contact the maintainers if that's a concern.

## Issues

Issues are very valuable to this project.

- Ideas are a valuable source of contributions others can make
- Problems show where this project is lacking
- With a question you show where contributors can improve the user experience

Thank you for creating them. People _love_ thorough bug reports. I'm not even kidding.

### Great Bug Reports tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Development Setup

After cloning the repository, install git hooks by running:

```sh
pnpm exec lefthook install
```

## Pull Request Checklist

1. Fork the repo and create your branch from `main` and, if needed, rebase to the current main
   branch before submitting your pull request. If it doesn't merge cleanly with
   main you may be asked to rebase your changes.
2. Commits should be as small as possible, while ensuring that each commit is
   correct independently (i.e., each commit should compile and pass tests).
3. Add tests relevant to the fixed bug or new feature.
4. Ensure the tests passes.
5. Make sure code lints.

## Code of Conduct

This project and everyone participating in it are governed by the [Code of Conduct](CODE_OF_CONDUCT.md).
