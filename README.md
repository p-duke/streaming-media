**Approach**: 

In the layout of the project I tried to mimick the design of the pdf mockup as closely as possible. In each video section under the main carousel included a video menu overlay
(vertical dot icon) that will drop down when clicked. This will show a 'Share', 'Add to playlist', and 'Not interested' menu items because I felt these were features that
offered additional value to the user. These options aren't currently functional but merely a product development exercise.

I used Grunt, Less, and Embedded JS templates to build the webpage. I created a responsive grid with LESS and focused on using two partial views for the carousels. 
Grunt tasks are configured to fetch the json data, and build the LESS and EJS files. I also included a simple Grunt server to serve the assets. The final webpage can 
be viewed by simply running 'grunt' (see instructions below). All of my development code is stored in the "src/" directory and compiled to the "public/" directory. 
I made the webpage responsive to smartphone, tablet, and desktop screens. For the carousel functionality I used a jQuery library called 'slick' because it provided all
the neccessary functionality.

**Running the application**:

`git clone https://github.com/p-duke/streaming-media.git`

`cd streaming-media`

`npm install && grunt`

The page should automatically open to http://localhost:8080/

![alt text](https://github.com/p-duke/streaming-media/blob/master/src/images/mockup.png)
