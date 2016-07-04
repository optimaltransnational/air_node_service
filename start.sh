echo "Starting Installing node_modules"
npm install
echo "node modules installation completed"
echo "Starting the server"
echo "To check ServerApi try http://localhost:3000/documentation after server start"
echo "or"
echo "to view the index page: http://localhost:3000 "
node server.js
echo "server started at http://localhost:3000"
