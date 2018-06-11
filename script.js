var MoviesList = React.createClass({

    render: function() {
        return (React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmów:'),
            React.createElement('ul', {}, Movie)
        ))
    }
});

var Movie = React.createClass({

    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (React.createElement('li', { key: this.props.movie.id },
            React.createElement(MovieTitle, {}),
            React.createElement(MovieDescription, {}),
            React.createElement(MovieImage, {})
        ))
    }
});

var MovieTitle = React.createClass({

    propTypes: {
        movies: React.PropTypes.object.isRequired,
    },

    render: function() {
        return React.createElement('h2', { key: this.props.movies.id }, this.props.movies.title)
    }
});

var MovieDescription = React.createClass({

    propTypes: {
        movies: React.PropTypes.object.isRequired,
    },

    render: function() {
        return React.createElement('p', { key: this.props.movies.id }, this.props.movies.desc)
    }
});

var MovieImage = React.createClass({

    propTypes: {
        movies: React.PropTypes.object.isRequired,
    },

    render: function() {
        return React.createElement('img', { key: this.props.movies.id }, this.props.movies.foto)
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
        desc: 'Film o  o dziewczynie z Nowego Orleanu i księciu zamienionym w żabę, desperacko pragnącym być znów człowiekiem.',
        foto: 'ksiezniczka.png'
    }
];

var element = React.createElement(MoviesList);

ReactDOM.render(element, document.getElementById('app'));