# Movie List App

Use any framework you want to create a movie list app! The levels get increasingly difficult and some refactoring may be necessary. Images accompany each level to give you a better idea of what that level should include. 

## Level 0
- Display a list of movies from hardcoded data.

## Level 1
- Add a search bar so that a user may see if a movie is in the list. (Bonus: Handle the case of no movie found gracefully.)

## Level 2
- Add an input field for users to add movies.
- Display only user added movies, not the hardcoded data.

## Level 3
- Add a button to each list item that allows the user to toggle a 'watched' property.
- Add two buttons to allow the users to toggle between a list of 'watched' movies and movies 'to watch'.

## Level 4
- Add a panel of movie information that appears when the title is clicked (consider starting with hardcoded information)
- Refactor the watch toggle to be part of the movie information panel
- Get movie information from the OMDb API (http://www.omdbapi.com/) 

## Other ideas (not pictured)
- Think about when it makes sense to request this information from the api - when the user clicks on the title? When the movie gets added? Refactor your code as necessary.
- Add a way for the user to add their own rating
- Add a sorting mechanism so the user can sort on rating or other properties
- Refactor search to allow users to search for movies with a specific director or actor/actress