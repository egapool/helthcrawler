$(function(){

	MyApp.Router = Backbone.Router.extend({

		el: "#app",
		tmpl: MyApp.Templates.layout,

		// ビューコンテンツのキャッシュ
		viewCache: {},

		// ページ制御
		routes : {
			'' 				: 'index',
		},

		initialize: function() {
			Backbone.emulateJSON = true;
			this.$el = $(this.el);
			// viewを乗り越えて通信するためにグローバルにメディエイターを生成
			MyApp.mediator = {};
			_.extend(MyApp.mediator, Backbone.Events);

			//moment setting
			moment.locale('ja',{
			    weekdaysShort:"日_月_火_水_木_金_土".split('_'),
			    weekdays:"日_月_火_水_木_金_土".split('_'),
			});

			this.$el.html(this.tmpl());

			this.header = new MyApp.Views.Header({
				el: this.$el.find('#header')
			});

			this.footer = new MyApp.Views.Footer({
				el: this.$el.find('#footer')
			});

			this.contents = new MyApp.Views.Container({el: $('#content')});

		},

		index: function(){
			 MyApp.mediator.trigger('sheet:close');
			if ( this.viewCache.index === undefined  ) {
				this.viewCache.index = new MyApp.Views.IndexPage();
			}
			this.contents.inner = this.viewCache.index.render();
			this.contents.render();
		},

	});


});