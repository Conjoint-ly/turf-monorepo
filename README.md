# TURF Monorepo

To commit changes recursively with packages

```bash
1. Commit changes in exact packages

cd ./packages/core
git commit -am "Changes"

2. Commit changes in root

git commit -am "Packages updated: core update"

3. Push with submodules

git push origin master --recurse-submodules=on-demand
```