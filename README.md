# CS465-Full-Stack-Development

Architecture

One section of the website utilized Express, HTML, and JavaScript to present the pages. Through Express and JavaScript, routes and controllers were established to manage requests received from the browser. Express would then either fetch the static HTML page or create the requested page using handlebars templates populated with data from the database. These various tools collaborated to handle server requests and deliver the outcome to the frontend client. The Angular part of the project operated differently. Upon the first webpage visit, the entire single page application (SPA) gets transmitted to the client. From that point, all page rendering and code execution occur on the client's browser. Backend communications are solely required for retrieving data from the database. With Express, multiple server calls are made each time the page is loaded or refreshed. However, with a SPA, the initial load requires more time to obtain all the code from the backend. Nonetheless, once the initial load is complete, no additional server calls are necessary for navigating between pages within the SPA.

MongoDB is known for its excellent scalability and quick querying capabilities. The way documents are stored in MongoDB aligns seamlessly with JSON formatting, making it an ideal choice for integration with frontend applications.

Functionality

One instance of code refactoring to enhance functionality and efficiency involved replacing static HTML pages with templates using Handlebars. This allowed for reusability of the page structure while enabling dynamic content display. Another refactoring effort involved migrating content data used for populating templates from static JSON files in the codebase to MongoDB. This adjustment allows for easy content updates or additions without requiring website deployment or code changes.

Testing

In a full-stack application, HTTP methods are used to define different types of interactions between a client and a server. These methods include GET, POST, PUT, DELETE, and more. Each method has a specific purpose and determines the type of action the client wants to perform on the server.

API endpoints, on the other hand, are the specific URLs or routes through which the client can access different functionalities or resources on the server. Endpoints are associated with specific HTTP methods and can be used to request data, submit data, update data, or delete data.

Reflection

In this course, you have acquired several valuable skills that can enhance your marketability as a full stack developer. These skills include:

1. Improved JavaScript Skills: Through hands-on practice and application of JavaScript in both frontend and backend development, you have honed your JavaScript skills. Strong JavaScript proficiency is highly sought after in the industry, as it is the foundation for web development.

2. Backend Development with Node.js and Express: You have gained experience in using Node.js and Express for server-side development. Knowing these technologies is valuable since Node.js allows you to build scalable and high-performance applications, while Express provides a robust framework for building APIs and handling server logic.

3. Full Stack Development Knowledge: The course has provided you with a comprehensive understanding of how all the different components of a full stack application fit together. This knowledge makes you a more well-rounded developer who can effectively work on both frontend and backend aspects of an application.

4. Reusable UI Components: Developing a reusable UI component library not only improves functionality but also promotes maintainability and scalability. You have learned the importance of creating and utilizing reusable UI components, which can be a valuable skill for collaborating with front-end teams and making the development process more efficient.

5. API Testing and Security: You have gained familiarity with testing API endpoints and understanding security considerations in a full stack application. This expertise in API testing and knowledge of security measures can make you an asset in ensuring the reliability and security of applications.

By acquiring and developing these skills, you have positioned yourself as a more marketable candidate in the full stack development field. Your improved JavaScript abilities, proficiency in backend development with Node.js and Express, understanding of full stack development, knowledge of reusable UI components, and expertise in API testing and security can set you apart from other candidates and make you highly sought after by employers in the industry.
