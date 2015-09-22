$(function(){

	MyApp.Router = Backbone.Router.extend({

		el: "#app",
		tmpl: MyApp.Templates.layout,

		// ビューコンテンツのキャッシュ
		viewCache: {},

		// ページ制御
		routes : {
			'' 				: 'sites',
		},

		initialize: function() {
			Backbone.emulateJSON = true;
			this.$el = $(this.el);

			MyApp.mediator = {};
			_.extend(MyApp.mediator, Backbone.Events);

			//moment setting
			// moment.locale('ja',{
			//     weekdaysShort:"日_月_火_水_木_金_土".split('_'),
			//     weekdays:"日_月_火_水_木_金_土".split('_'),
			// });

			this.$el.html(this.tmpl());

			this.header = new MyApp.Views.Header({
				el: this.$el.find('#header')
			});

			this.footer = new MyApp.Views.Footer({
				el: this.$el.find('#footer')
			});

			this.contents = new MyApp.Views.Container({el: $('#content')});

		},

		sites: function(){
			 MyApp.mediator.trigger('sheet:close');
			if ( this.viewCache.sites === undefined  ) {
				this.viewCache.sites = new MyApp.Views.SitesPage();
			}
			this.contents.inner = this.viewCache.sites.render();
			this.contents.render();
		},

	});

});