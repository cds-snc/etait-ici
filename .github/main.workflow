workflow "New workflow" {
  on = "push"
  resolves = ["Test"]
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
