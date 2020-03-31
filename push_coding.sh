#!/bin/sh

setup_git() {
  git config --global user.email "wenqing4@illinois.edu"
  git config --global user.name "Laphets"
}

commit_website_files() {
  pwd
  # git checkout -b gh-pages
  # git add . *.html
  # git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin-pages https://${CODING_TOKEN}@e.coding.net/laphets/laphets.github.io/laphets.github.io.git > /dev/null 2>&1
  git push --quiet --set-upstream origin-pages master
}

setup_git
commit_website_files
upload_files