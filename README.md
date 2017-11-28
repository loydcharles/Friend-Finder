# Friend-Finder

FriendFinder
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js




This app is to demonstrate the use of express, body-parser and path with Node.
htmlRoutes.js file should include two routes:
  A GET Route to /survey which should display the survey page.
  A default, catch-all route that leads to home.html which displays the home page.
apiRoutes.js file should contain two routes:
  A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
save application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
