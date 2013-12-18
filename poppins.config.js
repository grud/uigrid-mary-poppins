module.exports = function (poppins) {
  poppins.config = {
    // Github repo to watch
    // https://github.com/myname/myrepo
    target: {
      user: 'angular-ui',
      repo: 'ui-grid.info'
    },

    // Credentials for user who leaves comments, etc.
    // You may want to load these from a seperate file like `config-credentials.js`, and
    // add this file to your `.gitignore` list
    login: {
      username: 'c0bra',
      password: 'p1mpal0t'
    },

    // port for poppins to listen on and URL for Github to ping
    hook: {
      url: 'http://intense-stream-3530.herokuapp.com/',
      port: 80
      // url: 'http://localhost',
      // port: 1234
    }
  };

  // load plugins from the cwd
  // poppins.theUsualPlease();

  poppins.couldYouPlease('poppins-pr-checklist');

  // pr checklist
  poppins.plugins.prChecklist.greeting = "Howdy ya'll";
  poppins.plugins.prChecklist.closing = 'Godspeed, traveler!';
  poppins.plugins.prChecklist.checks = [
    { message: 'Provides unit tests', condition: function (data) { return false; } }
  ];

  poppins.couldYouPlease('poppins-check-commit');
};
