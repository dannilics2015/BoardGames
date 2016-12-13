<h1>How to Use SeattleBoardGameCorner?</h1>

<p>SeattleBoardGameCorner is a single-page, mobile-friendly web application that has following features: </p>

<li>Allow user to register; user can either register as an Admin role or default to non-Admin role. User can also use their Google account to login. </li>
	
<ul>Compare to non-Admin role, an Admin user has an extra session which is called the “Administrator Session”, in where the Admin user can see detailed information about all the registered users. Moreover, the Admin can also delete registered users.</ul>

<li>2. Each user can manage their own profile, update their information except their username.</li> 

Three. After log in, user can see the homepage. In their homepage, they can navigate to all other available pages and access different features.

3.1 First part in the Homepage will display a photo slider, showing a few interesting pictures about board games.

3.2 Second part where it says “Home”, “Hot and New”, “Trade”, they includes links that will bring users to different pages and render different views. (Continue below to read for more details)

3.3 Third part in the Homepage will call the BoardGameGeek API and display top 30 hotness board games. Each thumbnail represents a board game image, which links to a detailed page about the game. The details is also using the data from a different API call from BoardGameGeek. 

3.4 Fourth part is a simple information session that tells user the features that SeattleBoardGameGroup app has.

4. In the Homepage navigation bar at the top, there contains a several drop down menu where includes several other links that allows user to navigate to other pages and use other features. It includes: 

4.1 Profile drop down: 

4.1.1 Account - bring users to their profile page;

4.1.2 Mailbox - displays a list of message that the users received from other users. From there user can also reply back to other users. 

4.1.3 Collections - bring users to their collections page, in where they can add, edit, or delete their collections. The collections they added will be accessed by other users by searching. 

4.1.4 Sign out - allows users to sign out

4.2 Search drop down:

4.2.1 Hot - allows user to check out the latest top 50 hot board games and user can click into the game name and see details about the game, including ranking, description, image, minimum/maximum players, play time, published year, designed, publisher and artists etc.

4.3 Trades

4.3.1 See My Collections - will display a list of collections that users added(if any). From there, user can click “Add a New Collection” to add a new collection; user can click on “View Collection”(if has any) to manage the collection they added. User can update the game name, description, brought price, condition(if it is used, new) and image. 

4.3.2 See All Collections - will retrieve a list all collections that are available for trading. The displaying data will include a username(which indicates the username of the game owner), name of the board game, condition, image and description. User can click on “Username”, it will brings user to the game owner’s contact page. The Contact page will show basic information about the game owner; also, user can type in their message in the message box and send it to the game owner. 

4.3.3 Search a Collection - If users have a board game in mind, they can search by the name of the board game and if there is any users have the game, the result will be displayed. Again, user can click on the name of the game owner and leave them message. 
 
How SeattleBoardGameCorner is Built? 

HTML, CSS, Bootstrap, FontAwesome, JavaScript and AngularJS is used to build the front end to interact directly with users. Ng-routing from Angular is used to render a dynamic single-page web app. Bootstrap and CSS are used to make the pages responsive for mobile users. 
As users interact with the app, they will be generating a sequence of HTTP requests directed at a server built on Node.js and Express(a popular Node.js library). The server uses Mongoose to store and retrieve data model from MongoDB.

An third-party API (BoardGameGeek) is used to retrieve latest hot game and game info in the app. 

This app supports different roles of users and they are granted different access levels.

This app also supports Google authenticated log in. 
 
	