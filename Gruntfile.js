'use script';

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
				src: ['./src/js/*/*.ts'],
				dest: './build/js/_output'
			}
		}


	});

	grunt.loadNpmTasks('grunt-typescript');

};
