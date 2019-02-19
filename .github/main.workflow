workflow "New workflow" {
  on = "push"
  resolves = [
    "Test",
    "Auto-commit",
  ]
}

action "Build" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  runs = "npm install"
}

action "Test" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  needs = ["Build"]
  runs = "npm test"
  env = {
    CI = "true"
  }
}

action "Filter master" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  args = "not branch master"
}

action "Auto-commit" {
  uses = "docker://cdssnc/auto-commit-github-action"
  needs = ["Filter master"]
  args = "Test commit"
  secrets = ["GITHUB_TOKEN"]
}
