# Addis_Software_test_ProjectAddis Software Test Project
This is my submission for the Addis Software Test Project, where I have developed a Full Stack Application to manage a list of songs. The application integrates a frontend and a backend (API) using the following technologies:

Technologies Used
ReactJS: I used ReactJS to build the user interface of the application. React's component-based architecture allowed me to create reusable and modular UI components.
Redux Toolkit: I utilized Redux Toolkit to manage the state of the application. By using Redux Toolkit, I was able to efficiently handle the application's state and implement features such as managing the list of songs and their CRUD operations.
Redux-Saga: I used Redux-Saga to handle asynchronous calls to the REST API. With Redux-Saga, I was able to manage side effects such as making API requests and handling the responses in a structured and efficient manner.
Emotion and Styled System: For styling the application, I leveraged Emotion and Styled System. These tools provided me with a powerful and flexible way to style my components, allowing me to create a visually appealing user interface.
Functionality
The frontend part of the application primarily displays a list of songs. Users can perform the following operations:

Create: Users can create new songs by providing the necessary information through a form.
Update: Users can update the details of existing songs, such as the title, artist, or genre.
Delete: Users can delete songs from the list.
To fulfill these functionalities, I integrated the frontend with a REST API. The application communicates with the API to retrieve the initial list of songs, send requests to create, update, and delete songs, and update the UI accordingly