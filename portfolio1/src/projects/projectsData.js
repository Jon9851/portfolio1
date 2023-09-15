import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";

const projects = {
  1: {
    title: "My First Project",
    image: projectOne,
    description: (
      <>
        <p>
        As a beginner, it's crucial to start with the basics HTML5 CSS3, laying a strong foundation in web development. By continually enhancing my coding abilities, I can create more intricate and visually captivating websites that captivate and engage visitors.<br></br> 
        <br></br>These newfound web development skills open doors to both personal and professional growth opportunities.<br></br> 
        <br></br>For further project details, check out the comprehensive README on GitHub by clicking the GitHub icon in the skills section.     
        </p>
  
      </>
    ),
    github: "https://github.com/Jon9851/You-Matter-",
    demo: "https://jon9851.github.io/You-Matter-/",
  },
  2: {
    title: "JavaScript Game",
    image: projectTwo,
    description: (
      <>
        <p>
        
The website is built using HTML5, CSS for styling, and Balsamiq for wireframes. Gitpod handles deployment, while GitHub hosts the code. Code Beautify aids in testing. HTML and CSS were tested on W3 Schools, and JavaScript (ES6) powers the quiz.<br></br> 
<br></br>Responsive design was tested thoroughly. The main aim was to improve JavaScript skills and create an engaging educational tool. For more details, check the GitHub README in the skills section
        </p>
      </>
    ),
    github: "https://github.com/Jon9851/History-Quiz",
    demo: "https://jon9851.github.io/History-Quiz/",
  },
  3: { 
    title: "Database App",
    image: projectThree,
    description: (
      <>
        <p>
        Project 3 is a web application with a complex database structure combining PostgreSQL and MongoDB. Python is used for robust routes, with PostgreSQL handling publisher data and MongoDB managing user authentication securely. Python 3 is used for models and routes, while HTML, CSS, and JavaScript.<br></br>
        <br></br> Materialize templates ensure a responsive design. The project's main goal was to keep HTML, JavaScript, and CSS simple while achieving full CRUD functionality, flash messages, and a robust registration and login system with logout capabilities.
        </p>
      </>
    ),
    github: "https://github.com/Jon9851/Game-Review",
    demo: "",
},

4: {
    title: "E-commerce Store",
    image: projectFour,
    description: (
      <>
        <p>
          
Project 4, is an e-commerce site using Django, PostgreSQL, and Stripe for secure payments. It features a user-friendly design, Bootstrap 4 components, and a user profile with order history. Python3 and JavaScript (ES6) power routes and functionality.<br></br>
<br></br> Databases include MongoDB and PostgreSQL. Django_Allauth ensures security, and AWS stores static files. Stripe manages card payments.<br></br>
<br></br> For details, check out the GitHub README by clicking the icon the github icon.
       
        </p>
      </>
    ),
    github: "https://github.com/Jon9851/eshop",
    demo: "https://eshopms4.herokuapp.com/",
  },
};
export default projects;