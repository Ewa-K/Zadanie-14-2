var MoviesList = React.createClass({

    propTypes: {
        movies: React.PropTypes.object.isRequired,
    },

    render: function() {
        var list = this.props.movies.map(function(movie) {
            return React.createElement(Movie, { key: movie.id, movie: movie })
        })
        return (React.createElement('ul', {}, list))
    }
});

var Movie = React.createClass({

    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (React.createElement('li', {},
            React.createElement(MovieTitle, { text: this.props.movie.title }),
            React.createElement(MovieDescription, { text: this.props.movie.desc }),
            React.createElement(MovieImage, { source: this.props.movie.foto })
        ))
    }
});

var MovieTitle = React.createClass({

    propTypes: {
        text: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.createElement('h2', {}, this.props.text)
    }
});

var MovieDescription = React.createClass({

    propTypes: {
        text: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.createElement('p', {}, this.props.text)
    }
});

var MovieImage = React.createClass({

    propTypes: {
        source: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.createElement('img', { src: this.props.source })
    }
});

var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju.',
        foto: 'harry.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny.',
        foto: 'lew.jpeg'
    },
    {
        id: 3,
        title: 'Dzwonnik z Notre Dame.',
        desc: 'Film o Quasimodo.',
        foto: 'dzwonnik.jpeg'
    },
    {
        id: 4,
        title: 'Księżniczka i żaba',
        desc: 'Film o o dziewczynie z Nowego Orleanu i księciu zamienionym w żabę, desperacko pragnącym być znów człowiekiem.',
        foto: 'ksiezniczka.png'
    }
];

var element = React.createElement(MoviesList, { movies: movies });

ReactDOM.render(element, document.getElementById('app'));
