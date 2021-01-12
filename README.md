# image-processing-api

Node image processing API using :
Express, Sharp, Typescript

# Running locally 

npm install
&& npm run tsc

# Resize an image
GET /api/image/:fileName/resize?width=x&height=x
 Example : http://localhost:3000/api/image/1.jpg/resize?width=400&height=200

# Running test
npm run test
