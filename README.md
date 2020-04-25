# FriendFinder
UTA-VIRT-FSF-PT-01-2020-U-LOL Homework #13

[Heroku live URL](https://friendfinder-codingbootcamp-13.herokuapp.com/)


### Overview

This "FriendFinder" is a friend matching app. This full-stack site takes in results from users' survey answers and compares their answers with those from other users. The app will then display the name and picture of the friend with the best overall match.


### File Structure

  ```
  FriendFinder
    - .gitignore
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
  ```


### App

1. Users evaluate themselves on ten statements, on a scale of 1 to 5.

2. `server.js` file requires basic npm packages: `express` and `path`.

3. `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which displays the survey page.
   * A default, catch-all route that leads to `home.html`, which displays the home page.

4. `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST route `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

5. Data is located inside of `app/data/friends.js` as an array of objects. Each of these objects follows the format below.

```json
{
  "name":"Friend Name",
  "photo":"photo URL",
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
```

6. How user's best match is determined:

   * Each user's results is converted into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * Compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * The closest match will be the user with the least amount of difference.

7. The user's most compatible friend is revealed in a modal.
   * The modal displays both the name and picture of the closest match.


8. The user's data is pushed to the API as a new available friend.



- - -


## Technologies Used
* HTML, CSS, Bootstrap
* Express Node Package
* Body-Parser Node Package
* API routes
* Compare JS plugin
