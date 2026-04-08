git add .
git commit -m "Updated"
git push origin main
npm run build
cd build
git init
git add .
git commit -m "Deploy"
git push --force "https://github.com/MugundhanG/Heeswar-photography.git" HEAD:gh-pages
cd ..
echo Deployed successfully!