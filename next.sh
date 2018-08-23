#!/usr/bin/env bash
echo "Updating code for user $1"
git remote add $1 https://github.com/$1/hrext-underbar-part-one
echo "Git remote added"
git fetch $1 master
echo "Master fetched"
git reset --hard $1/master
cp spec/part1.orig.js spec.js