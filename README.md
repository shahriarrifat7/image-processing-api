# image-processing-api

Image processing API using :

- Node
- Express
- Sharp
- Typescript

# Running locally 
```
npm install
npm run tsc
```
# Resize an image
GET /api/image/:fileName/resize?width=x&height=x
```
http://localhost:3000/api/image/1.jpg/resize?width=400&height=200
```
# Running test
```
npm run test
```
