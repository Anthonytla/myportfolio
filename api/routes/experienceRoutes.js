const experienceBuiler = require('../controllers/experienceController');
const taskBuiler = require('../controllers/taskController');
const projectBuiler = require('../controllers/projectController');
const educationBuiler = require('../controllers/educationController');
const { verifySignUp } = require("../middlewares");
const authcontroller = require("../controllers/authController");
const contactBuiler = require("../controllers/contactController");
const { authJwt } = require("../middlewares");
const { get } = require('mongoose');


module.exports = app => {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
        ],
        authcontroller.signup
    );

    app.post("/auth/signin", authcontroller.signin);

    app
        .route('/experiences')
        .get(experienceBuiler.list_all_experience)
        .post(experienceBuiler.create_experience);

    app
        .route('/experience/:experienceId')
        .get(experienceBuiler.read_a_experience)
        .put(experienceBuiler.update_a_experience)
        .delete(experienceBuiler.delete_a_experience);

    app
        .route('/tasks')
        .get(taskBuiler.list_all_task)

    app
        .route('/tasks/:experienceId')
        .post(taskBuiler.create_task);

    app
        .route('/projects')
        .get(projectBuiler.list_all_projects)
        .post(projectBuiler.create_project);

    app
        .route('/project/:projectId')
        .get(projectBuiler.read_a_project)
        .put(projectBuiler.update_a_project)
        .delete(projectBuiler.delete_a_project);

    app
        .route('/educations')
        .get(educationBuiler.list_all_education)
        .post(educationBuiler.create_education);

    app
        .route('/education/:educationId')
        .get(educationBuiler.read_a_education)
        .put(educationBuiler.update_a_education);

    app
        .route('/contacts')
        .get(contactBuiler.list_all_contacts)
        .post(contactBuiler.create_contact);
};