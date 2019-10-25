(this.webpackJsonptrailertracker=this.webpackJsonptrailertracker||[]).push([[0],{22:function(e,t,a){},35:function(e){e.exports=JSON.parse('[{"title":"Action","movies":[{"title":"V For Vendetta ","trailer":"https://www.youtube.com/watch?v=lSA7mAHolAw","genre":["Action","Drama","SciFi"],"poster":"https://images-na.ssl-images-amazon.com/images/I/51aOaDhv0GL._SX333_BO1,204,203,200_.jpg","releaseYear":2005},{"title":"American Sniper ","trailer":"https://www.youtube.com/watch?v=5bP1f_1o-zo","genre":["Action","Biography","Drama"],"poster":"https://images-na.ssl-images-amazon.com/images/I/41kcZZlsC2L._AC_.jpg","releaseYear":2015}]},{"title":"Drama","movies":[{"title":"V For Vendetta ","trailer":"https://www.youtube.com/watch?v=lSA7mAHolAw","genre":["Action","Drama","SciFi"],"poster":"https://images-na.ssl-images-amazon.com/images/I/51aOaDhv0GL._SX333_BO1,204,203,200_.jpg","releaseYear":2005},{"title":"American Sniper ","trailer":"https://www.youtube.com/watch?v=5bP1f_1o-zo","genre":["Action","Biography","Drama"],"poster":"https://images-na.ssl-images-amazon.com/images/I/41kcZZlsC2L._AC_.jpg","releaseYear":2015}]},{"title":"Biography","movies":[{"title":"American Sniper ","trailer":"https://www.youtube.com/watch?v=5bP1f_1o-zo","genre":["Action","Biography","Drama"],"poster":"https://images-na.ssl-images-amazon.com/images/I/41kcZZlsC2L._AC_.jpg","releaseYear":2015}]}]')},36:function(e,t,a){e.exports=a(68)},41:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),o=a.n(i),l=(a(41),a(4)),c=a(5),s=a(7),h=a(6),m=a(8),u=(a(22),a(9)),d=a(14),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"homeheader"},"Meet the developers:"),r.a.createElement("a",{href:"https://nathanielstack.dev/"},r.a.createElement("h3",null,"Nathaniel Stack")),r.a.createElement("p",null),r.a.createElement("a",{href:"https://www.linkedin.com/in/shamira-jones/"},r.a.createElement("h3",null,"Shamira Jones")),r.a.createElement("p",null,"Shamira is a Graphic/ Web Designer, Full Stack Web Developer and Guitar player. She loves to turn complex concepts into clean, functional, beautiful realities.Her passion to create is motivated by her belief that part of truly living is to create. "),r.a.createElement("a",{href:"https://www.spiano.dev/"},r.a.createElement("h3",null,"Sarah Panaligan")),r.a.createElement("p",null,"Sarah is a full stack software engineer with a relentless work ethic and an exceptional ability to adapt to new environments. She is a self-disciplined, resourceful, and efficient programmer who has an eye for design so the final look of the product is as good as the code within the page. "),r.a.createElement("a",{href:"https://www.linkedin.com/in/jopara94/"},r.a.createElement("h3",null,"James Opara")),r.a.createElement("p",null,"James is an energetic software engineer, foodie, music junkie, and self-proclaimed nerd of many disciplines. He's an outgoing, and detail-oriented person who thrives in a team environment, and is always excited to learn, grow and evolve."))}}]),t}(n.Component),v=a(3),f=a.n(v),g=(a(59),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={movieTitle:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://trailerstracker.herokuapp.com/Movie/".concat(this.props.match.params.title)).then((function(t){console.log(t.data),e.setState({title:t.data.title,trailer:t.data.trailer,releaseYear:t.data.releaseYear})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state;return console.log(this.state.title),r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement("h4",null,"Released in: ",e.releaseYear),r.a.createElement("iframe",{className:"movie",title:e.title,width:"627",height:"470",src:e.trailer,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}]),t}(n.Component)),b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={listOfCategories:[]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://trailerstracker.herokuapp.com/Category").then((function(t){console.log(t.data),e.setState({listOfCategories:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){console.log("hello");var e=this.state.listOfCategories.map((function(e){return r.a.createElement("div",{key:e.title},r.a.createElement("ul",null,r.a.createElement(u.b,{to:"/trailer-tracker-frontend/category/".concat(e.title)},e.title)))}));return r.a.createElement("div",null,r.a.createElement("h2",{className:"homeheader"},"Browse Our Massive List Of Box Office Classics!"),e)}}]),t}(n.Component),k=a(1),y=(a(65),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={movies:[],redirect:!1},e.deleteCategory=e.deleteCategory.bind(Object(k.a)(e)),e.setRedirect=e.setRedirect.bind(Object(k.a)(e)),e.renderRedirect=e.renderRedirect.bind(Object(k.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"deleteCategory",value:function(){var e=this;f.a.delete("https://trailerstracker.herokuapp.com/Category/".concat(this.props.match.params.title)).then((function(t){e.setRedirect()})).catch((function(e){console.log(e)}))}},{key:"setRedirect",value:function(){this.setState({redirect:!0})}},{key:"renderRedirect",value:function(){if(this.state.redirect)return r.a.createElement(d.a,{to:"/trailer-tracker-frontend"})}},{key:"componentDidMount",value:function(){var e=this;f.a.get("https://trailerstracker.herokuapp.com/Category/".concat(this.props.match.params.title)).then((function(t){console.log(t.data.movies),e.setState({movies:t.data.movies})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.movies.map((function(e){return r.a.createElement("div",{className:"onePoster"},r.a.createElement(u.b,{href:"/trailer-tracker-frontend/movie/".concat(e.title)},r.a.createElement("img",{className:"poster",src:e.poster}),r.a.createElement("h6",{className:"posterName"},e.title)))}));return console.log(this.state.redirect),r.a.createElement("div",null,this.renderRedirect(),r.a.createElement("h3",{className:"homeheader"},"The Chosen Category is ",this.props.match.params.title),r.a.createElement("div",{className:"oneCatposterHolder"},e),r.a.createElement("button",{onClick:this.deleteCategory,className:"deleteCategory"},"Delete This Category"),r.a.createElement(u.b,{to:"/trailer-tracker-frontend"},r.a.createElement("button",{className:"backtoHome"},"Back To Home")),r.a.createElement(u.b,{to:"/trailer-tracker-frontend/Category/update/".concat(this.props.match.params.title)},r.a.createElement("button",{className:"updatecat"},"Update this Category ")))}}]),t}(n.Component)),E=a(35),w=a(17),O=(a(66),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={redirect:!1,movies:[],updatedTitle:"",search:"",movieList:[],originalMovieList:[],searchedMovieList:[]},e.setRedirect=e.setRedirect.bind(Object(k.a)(e)),e.renderRedirect=e.renderRedirect.bind(Object(k.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(k.a)(e)),e.handleChange=e.handleChange.bind(Object(k.a)(e)),e.findMovie=e.findMovie.bind(Object(k.a)(e)),e.addMovie=e.addMovie.bind(Object(k.a)(e)),e.searchResults=e.searchResults.bind(Object(k.a)(e)),e.searchTitle=e.searchTitle.bind(Object(k.a)(e)),e.addSearchedMovie=e.addSearchedMovie.bind(Object(k.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://trailerstracker.herokuapp.com/Category/".concat(this.props.match.params.title)).then((function(t){e.setState({movies:Object(w.a)(t.data.movies)})})).then((function(){f.a.get("https://trailerstracker.herokuapp.com/Movie").then((function(t){e.setState({originalMovieList:Object(w.a)(t.data)})}))})).catch((function(e){console.log(e)}))}},{key:"setRedirect",value:function(){this.setState({redirect:!0})}},{key:"renderRedirect",value:function(){if(this.state.redirect)return r.a.createElement(d.a,{to:"/trailer-tracker-frontend"})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.updatedTitle||this.props.match.params.title;f.a.put("https://trailerstracker.herokuapp.com/Category//".concat(this.props.match.params.title),{title:a,movies:this.state.movies},{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),t.setRedirect()}))}},{key:"handleChange",value:function(e){e.preventDefault(),""!==e.target.value&&this.setState({updatedTitle:e.target.value})}},{key:"findMovie",value:function(e){this.setState({search:e.target.value});var t=this.state.originalMovieList.filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())}));this.setState({movieList:t}),console.log(t)}},{key:"addMovie",value:function(e){e.preventDefault(),console.log(e.target.innerText),e.target.style.color="#F25A38";var t=e.target.innerText,a=this.state.movieList.find((function(e){return e.title===t}));this.setState({movies:[].concat(Object(w.a)(this.state.movies),[a])}),console.log(a)}},{key:"searchResults",value:function(e){var t=this;e.preventDefault();var a=this.state.foundTitle;f.a.get("https://trailerstracker.herokuapp.com/Movie/search/".concat(a),{title:a},{headers:{"Content-Type":"application/json"}}).then((function(e){t.setState({searchedMovieList:e.data.Search})}))}},{key:"searchTitle",value:function(e){console.log(e.target.value),e.preventDefault(),this.setState({foundTitle:e.target.value}),console.log(this.state.foundTitle)}},{key:"addSearchedMovie",value:function(e){e.preventDefault(e),console.log(e.target.innerText),e.target.style.color="#F25A38";var t=e.target.innerText;t=t.split("");for(var a=0;a<5;a++)t.pop();t=t.join(""),console.log(t);var n=this.state.searchedMovieList;console.log(n),f.a.get("https://trailerstracker.herokuapp.com/Movie/new/".concat(t)).then((function(e){window.location.reload()}))}},{key:"render",value:function(){var e=this,t=this.state.movies.map((function(e){return r.a.createElement("div",{key:e.title},r.a.createElement("ul",null,e.title))}));return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement("section",{className:"currentMovies"},r.a.createElement("h2",{className:"homeheader "},this.props.match.params.title),r.a.createElement("h3",null,"Current Movie Titles in ",this.props.match.params.title),t,r.a.createElement("form",{className:"currentMovies"},r.a.createElement("label",null,"Change Category Name ",r.a.createElement("input",{onChange:this.handleChange,type:"text",placeholder:this.props.match.params.title,value:this.state.updatedTitle})," "),r.a.createElement("button",{onClick:this.handleSubmit,type:"submit"},"Submit"))),r.a.createElement("form",{className:"movieDBSearch"},r.a.createElement("h4",null,"Search through the movie selections and then click on the title you want to add."),r.a.createElement("label",null,"Movie Selections ",r.a.createElement("input",{onChange:this.findMovie,type:"text",placeholder:"type movie title",value:this.state.search})," "),r.a.createElement("div",null,r.a.createElement("ul",null,this.state.movieList.map((function(t){return r.a.createElement("li",{onClick:e.addMovie,className:"catmovie",key:t.title},t.title)}))))),r.a.createElement("form",{className:"OMBDSearch"},r.a.createElement("h4",null,"Didn't find the movie you were looking for? "),r.a.createElement("h4",null,"Type the complete title into the field below to search a larger database, select the movie, and it will be added to our database inside the orange box above."),r.a.createElement("label",null," Search Movies ",r.a.createElement("input",{onChange:this.searchTitle,type:"text",placeholder:"type movie title"})),r.a.createElement("button",{onClick:this.searchResults,type:"submit"},"Submit"),r.a.createElement("div",null,r.a.createElement("ul",null,this.state.searchedMovieList.map((function(t){return r.a.createElement("li",{onClick:e.addSearchedMovie,className:"catmovie",key:t.Title},t.Title," ",t.Year)}))))))}}]),t}(n.Component)),j=(a(67),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={title:""},e.handleChange=e.handleChange.bind(Object(k.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(k.a)(e)),e.setRedirect=e.setRedirect.bind(Object(k.a)(e)),e.renderRedirect=e.renderRedirect.bind(Object(k.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setRedirect",value:function(){this.setState({redirect:!0})}},{key:"renderRedirect",value:function(){if(this.state.redirect)return r.a.createElement(d.a,{to:"/trailer-tracker-frontend"})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.title;f.a.post("https://trailerstracker.herokuapp.com/Category/",{title:a},{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),t.setRedirect()}))}},{key:"handleChange",value:function(e){e.preventDefault(),this.setState({title:e.target.value}),console.log(this.state.title)}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement("form",null,r.a.createElement("label",null,"Category ",r.a.createElement("input",{onChange:this.handleChange,type:"text",placeholder:"type category name",value:this.state.title})," "),r.a.createElement("button",{onClick:this.handleSubmit,type:"submit"},"Submit")))}}]),t}(n.Component)),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={cats:E},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"showCategory",value:function(e){this.setState({title:e,trailer:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App container"},r.a.createElement("header",null,r.a.createElement("ul",{className:"nav"},r.a.createElement(u.b,{to:"/trailer-tracker-frontend"},r.a.createElement("li",{className:"nav-item"},"Home")),r.a.createElement(u.b,{to:"/trailer-tracker-frontend/about"},r.a.createElement("li",{className:"nav-item"},"About")),r.a.createElement(u.b,{to:"/trailer-tracker-frontend/new"},r.a.createElement("li",{className:"nav-item"}," New Category")))),r.a.createElement("main",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/trailer-tracker-frontend",exact:!0,component:b}),r.a.createElement(d.b,{path:"/trailer-tracker-frontend/new",exact:!0,component:j}),r.a.createElement(d.b,{path:"/trailer-tracker-frontend/about",exact:!0,component:p}),r.a.createElement(d.b,{path:"/trailer-tracker-frontend/movie/:title",exact:!0,render:function(t){return r.a.createElement(g,{film:e.showCategory,match:t.match})}}),r.a.createElement(d.b,{path:"/trailer-tracker-frontend/category/:title",exact:!0,render:function(e){return r.a.createElement(y,{match:e.match})}}),r.a.createElement(d.b,{path:"/trailer-tracker-frontend/category/update/:title",exact:!0,render:function(e){return r.a.createElement(O,{match:e.match})}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(u.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.e692e01c.chunk.js.map