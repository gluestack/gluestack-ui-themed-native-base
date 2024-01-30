# Contributing to `gluestack/gluestack-ui`

We'd love for you to contribute to our source code and to make `gluestack-style` even better than it is
today! Here are some guidelines we'd like you to follow:

- [Contributing to `gluestack/gluestack-ui`](#contributing-to-gluestack-ui)
  - [ Code of Conduct](#-code-of-conduct)
  - [ Ways to Contribute](#-ways-to-contribute)
  - [ Questions, Bugs, Features](#-questions-bugs-features)
    - [ Got a Question or Problem?](#-got-a-question-or-problem)
    - [ Found an Issue or Bug?](#-found-an-issue-or-bug)
    - [ Missing a Feature?](#-missing-a-feature)
  - [ Issue Submission Guidelines](#-issue-submission-guidelines)
  - [ Setting Up your Development Environment](#-setting-up-your-development-environment)
  - [ Contributing Code](#-contributing-code)
  - [ Helping with Documentation](#-helping-with-documentation)

## <a name="coc"></a> Code of Conduct

Help us keep `gluestack/gluestack-ui` open and inclusive. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## <a name="wtc"></a> Ways to Contribute

If you are eager to start contributing code right away, you can go through [`gluestack/gluestack-ui-themed-native-base` Bugs](https://github.com/gluestack/gluestack-ui-themed-native-base/issues?q=is%3Aopen+is%3Aissue) that contain bugs.

There are other ways you can contribute without writing a single line of code. Here are a few things you can do to help out:

1. **Replying and handling open issues.** We get a lot of issues every day, and some of them may lack necessary information. You can help out by guiding people through the process of filling out the issue template, asking for clarifying information, or pointing them to existing issues that match their description of the problem.

Each of these tasks is highly impactful, and maintainers will greatly appreciate your help.

## <a name="requests"></a> Questions, Bugs, Features

### <a name="issue"></a> Found an Issue or Bug?

If you find a bug in the source code, you can help us by submitting an issue to our
[GitHub Repository](https://github.com/gluestack/gluestack-ui-themed-native-base/issues). Even better, you can submit a Pull Request with a fix.

**Please see the [Submission Guidelines](#submit) below.**

### <a name="feature"></a> Missing a Feature?

You can request a new feature by submitting an idea to our issues under [Feature Request](https://github.com/gluestack/gluestack-ui-themed-native-base/issues/new?assignees=&labels=feature+request%2Ctriage&projects=&template=feature_request.yml) category.

If you would like to implement a new feature then consider what kind of change it is:

- **Major Changes** that you wish to contribute to the project should be discussed first in an
  [GitHub issue](https://github.com/gluestack/gluestack-ui-themed-native-base/issues) that clearly outlines the changes and benefits of the feature.
- **Small Changes** can directly be crafted and submitted to the [GitHub Repository](https://github.com/gluestack/gluestack-ui-themed-native-base)
  as a Pull Request. See the section about [Contributing Code](#submit-pr).

## <a name="submit"></a> Issue Submission Guidelines

Before you submit your issue search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize
the effort we can spend fixing issues and adding new features, by not reporting duplicate issues.

The "[new issue](https://github.com/gluestack/gluestack-ui-themed-native-base/issues/new)" form contains a number of prompts that you should fill out to
make it easier to understand and categorize the issue.

In general, providing the following information will increase the chances of your issue being dealt
with quickly:

- **Issue Description** - if an error is being thrown a non-minified stack trace helps
- **Motivation for or Use Case** - explain why this is a bug for you
- **`gluestack-ui/themed-antive-base` Version(s)** - is it a regression?
- **Browsers and Operating System** - is this a problem with all browsers or only specific ones?
- **Reproduce the Error** - provide a live example (using [expo snack template](https://snack.expo.dev/) or an unambiguous set of steps.
- **Related Issues** - has a similar issue been reported before?
- **Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might be
  causing the problem (line of code or commit)

## <a name="dev-env"></a> Setting Up your Development Environment

- Fork this repository.

- Clone your fork of `gluestack/gluestack-ui-themed-native-base`:

  ```git
  git clone git@github.com:${YOUR_USERNAME}/gluestack/gluestack-ui-themed-native-base.git
  ```

- Navigate to gluestack-style

  ```
  cd gluestack-ui
  ```

- Add main repo remote:

  ```git
  git remote add origin git@github.com:gluestack/gluestack-ui-themed-native-base.git
  ```

- Install dependencies:

  ```bash
  yarn
  ```

- Move over to the storybook :

  ```bash
  cd example/storybook
  ```

- Start the storybook, local aliasing of packages has been created.

```bash
yarn storybook
```

- To start app directly on IOS
  ```bash
  yarn ios
  ```
- To start app directly on Android
  ```bash
  yarn android
  ```

and start making the changes in packages that gluestack-ui-themed-native-base provides and check the changes in storybook.

## <a name="submit-pr"></a> Contributing Code

Code-level contributions to `gluestack/gluestack-ui-themed-native-base` come in the form of [pull requests](https://help.github.com/en/articles/about-pull-requests). These are done by forking the repo and making changes locally.

The process of proposing a change to `gluestack/gluestack-ui-themed-native-base` can be summarized as follows:

1. Fork the gluestack-ui repository and create your branch from `main`.
2. Make the desired changes to gluestack-ui source. Use the `storybook` app to test them out.
3. If you've added code that should be tested, add tests.
4. If you've changed APIs, update the documentation, which is also available in the storybook.
5. Ensure the test suite passes, either locally or on CI once you opened a pull request.
6. Make sure your code lints. To keep project away from disputes we make use of **ESLint**, which is really a handy linting tool that enforces strict coding styles and makes sure your files are free from dead code. Each module of `gluestack/gluestack-ui-themed-native-base` has bundled ESLint as a dev dependency and checks your code everytime you commit.
7. Push the changes to your fork.
8. Create a pull request to the `gluestack/gluestack-ui-themed-native-base` repository.
9. Review and address comments on your pull request.

If all goes well, your pull request will be merged. If it is not merged, maintainers will do their best to explain the reason why.
