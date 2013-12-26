module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /assets\/javascripts\/templates\//
        },
        files: {
          'assets/javascripts/templates.js': 'assets/javascripts/templates/**/*.hbs'
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.registerTask('default', ['emberTemplates']);
};
