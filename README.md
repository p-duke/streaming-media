Hi Team!

Thanks for giving me the opportunity to take the challenge. I had a lot of fun building this project. Below are the details regarding my approach plus instructions for running the solution.

**Approach**:
In the layout of the project I tried to mimick the design of the pdf mockup as closely as possible. I decided to use the HTML5 video controls, which I realize isn't
in the provided mockup, but from a UX perspective couldn't have a slideshow of embedded videos without including full functionality. In the video menu overlay I 
included a 'Share', 'Add to playlist', and 'Not interested' menu items because I felt these were features that offered additional value to the user.

I used Grunt, Less, and Embedded JS templates to build the webpage. I created a responsive grid with LESS and focused on using two partial views for the carousels. 
Grunt tasks are configured to fetch the json data, and build the LESS and EJS files. I also included a simple Grunt server to serve the assets. The final webpage can 
be viewed by simply running 'grunt' (see instructions below). All of my development code is stored in the "src/" directory and compiled to the "public/" directory. 
I made the webpage responsive to smartphone, tablet, and desktop screens. For the carousel functionality I used a jQuery library called 'slick' because I believe it's
important not to "reinvent the wheel" and it provided all the neccessary functionality.

**Running the application**:
`git clone https://github.com/p-duke/jwplayer-code-challenge.git`
`cd jwplayer-code-challenge'`
`npm install && grunt`

- The page should automatically open to http://localhost:8080/

Please let me know if you have any questions or feedback.

Thanks,
Peter
