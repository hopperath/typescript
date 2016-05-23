'use strict';

module.exports = function(grunt)
{
	grunt.initConfig(
	{
		pkg: grunt.file.readJSON('package.json'),
		typescript:
		{
			options:
			{
				module: 'commonjs'
			},
			all:
			{
				src: ['./src/*/*.ts'],
				dest: './build/js/_output'
			}
		},
        jshint :
        {
            options: {
                '-W069': false,
                '-W004': false
            },
            files: ['./build/js/_output/*.js']
        },
        uglify:
        {
            development:
            {
                files: [{
                    expand: true,
                    cwd: './build/js/_output/',
                    src: '**/*.js',
                    dest: './build/js/_output/'
                }]

            },
            options:
            {
                mangle: false
            }
        },
        clean:
        {
            options:
            { },
            files: ['./build/js/_output/*']
        }
	});

	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('default',['clean','typescript','jshint','uglify']);

};
