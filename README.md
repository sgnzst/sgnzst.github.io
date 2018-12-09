## My Site Notes

#### Initpost command
- `./initpost -h` output instructions
- `./initpost -c {POST_TITLE}` create post
- `./initpost -d {POST_TITLE}` create draft post
- `./initpost -p {POST_TITLE}` publish/promote a draft to a post

#### How to deploy site in Github Pages
1. `export JEKYLL_ENV=production` = set jekyll to production mode

2. `npm run gulp build` = Compile sass, js and build site files

3. `npm run gulp deploy` = Deploy to other branch which on github pages >

4. Commit files and push to development branch.


#### How to run server in local
run `jekyll server --watch baseurl "" --host=[IP ADDR]`
