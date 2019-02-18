workflow "New workflow" {
  on = "push"
  resolves = [
    "Test",
    "Filter not github actions",
    "Push",
    "Name",
    "Email",
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

action "Filter non master" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  args = "not branch master"
}

action "Filter not github actions" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  args = "not actor github-actions"
}

action "Add" {
  uses = "docker://alpine/git"
  needs = ["Filter non master", "Filter not github actions"]
  args = "add -A"
}

action "Commit" {
  uses = "docker://alpine/git"
  needs = [
    "Add",
    "Name",
    "Email",
  ]
  runs = "git commit -m 'auto'"
}

action "Push" {
  uses = "docker://alpine/git"
  args = "push"
  needs = ["Commit"]
  secrets = ["GITHUB_TOKEN"]
}

action "Email" {
  uses = "docker://alpine/git"
  needs = ["Filter non master", "Filter not github actions"]
  args = "config --global user.email \"max@neuvians.net\""
}

action "Name" {
  uses = "docker://alpine/git"
  needs = ["Filter non master", "Filter not github actions"]
  args = "config --global user.name \"Max Neuvians\""
}
