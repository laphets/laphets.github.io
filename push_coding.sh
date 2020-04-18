#!/bin/sh

setup_git() {
  git config --global user.email "wenqing4@illinois.edu"
  git config --global user.name "Laphets"
}

commit_website_files() {
  cd docs/.vuepress/dist
  ls
  echo "============== Init Git =============="
  git init
  echo "blog-cn.laphets.com" > CNAME
  # git checkout -b static-pages
  git add .
  git commit -m "Travis build: $TRAVIS_BUILD_NUMBER"
  # git checkout -b gh-pages
  # git add . *.html
  # git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add coding https://${CODING_USER}:${CODING_TOKEN}@e.coding.net/laphets/laphets.git > /dev/null 2>&1
  git push --set-upstream coding master -f
}

setup_git
commit_website_files
upload_files

#
