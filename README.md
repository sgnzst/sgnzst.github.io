## My Site Notes

#### Jekyll Mode
- `export JEKYLL_ENV=development` for mode development
- `export JEKYLL_ENV=production` for mode production

#### Initpost command
- `./initpost -h` output instructions
- `./initpost -c {POST_TITLE}` create post
- `./initpost -d {POST_TITLE}` create draft post
- `./initpost -p {POST_TITLE}` publish/promote a draft to a post

#### How to deploy site in Github Pages
1. `npm run build` for Compile sass, js and build site files

2. `npm run deploy` for Deploy to other branch which on github pages

3. Commit files and push to development branch.


#### How to run server in local for development
run `npm start` or `jekyll server --host=[IP ADDR]`
