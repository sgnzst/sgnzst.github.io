#!/bin/bash

echo -e "\n\033[0;32m> Generating site...\033[0m"

yarn run build

echo -e "\n\033[0;32m> Deploying..\033[0m"

git add .

git commit -m "auto committing changes in `date`"

yarn run deploy

echo -e "\n\033[0;32m> Site Deployed!\033[0m\n"
