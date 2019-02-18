workflow "New workflow" {
  on = "push"
  resolves = [
    "Test",
    "Filter not github actions",
    "Commit back",
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

action "Commit back" {
  uses = "docker://alpine/git"
  needs = ["Filter non master", "Filter not github actions"]
  args = "git add -A && git commit -m \"Auto update\" && git push"
  secrets = ["GITHUB_TOKEN"]
}
