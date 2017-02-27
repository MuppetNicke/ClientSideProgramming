class World extends React.Component {    

    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            isLoading: true
        };

    }

    componentDidMount() {
        setTimeout(() => {
            this.getCountries()
        }, 1000
        );
    }

    getCountries() {
        fetch('http://forverkliga.se/JavaScript/api/simple.php?world=cool')
            .then(response => response.json())
            .then(json => {
                const countries = Country.convertJsonArray(json);
                this.setState({
                    countries: countries,
                    isLoading: false
                });
            });
    }

    handleRemoveCountry(name) {
        const countries = this.state.countries.filter(c => c.name !== name);

        this.setState({
            countries: countries,
        });
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? (
                    <h1 className="textttttttttttttttt">
                        Loading world stats...
                    </h1>
                ) :
                    (<div>
                        <CountryList countries={this.state.countries}
                                     onRemove={this.handleRemoveCountry.bind(this)} />
                        <hr />
                        <h4 className="textttttttttttttttt">
                            Antal Länder: {this.state.countries.length}
							<br />
							David, jag satt uppe tills typ 4 på natten på denna, cut me some slack.
                        </h4>
                    </div>
                    )}
            </div>
        )
    }
}

class CountryList extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedCountry: null
        }
    }

    handleRemoveCountry(name) {
        this.props.onRemove(name);
    }

    render() {
        let countries = this.props.countries.map((country, index) => {
            return <CountryListItem key={index}
                                    country={country} 
                                    onRemove={this.handleRemoveCountry.bind(this)} />
        });

        return (
            <div>
                {countries}
            </div>
        )
    }
}

class CountryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            isSelected: false
        }
    }

    handleClick(name, event) {
        event.stopPropagation();
        if (event.target.id === 'country-name') {
            this.setState({
                isEdit: true,
                isSelected: false
            });
        } else if (event.target.id === 'country-remove' || event.target.id === 'remove-span') {
            this.props.onRemove(name);
        } else {
            this.setState({
                isSelected: !this.state.isSelected,
            });
        }
    }

    render() {
        if (this.state.isEdit) {
            return (
                <CountryListItemEdit country={this.props.country} />
            )
        } else {
            return (
                <div onClick={this.handleClick.bind(this, null)}
                     className="thumbnail list-item">                    
                    <div>
                        <div>
							<p>Country {this.props.country.name}</p>
                            <p>Continent: {this.props.country.continent}</p>
                            <p>Population: {this.props.country.population}</p>
                        </div>
                    </div>
                    <div onClick={this.handleClick.bind(this, this.props.country.name)}
                         className={'country-remove-container ' + (this.state.isSelected ? '' : 'container-hidden')}
                         id="country-remove">
                        <span id="remove-span" className="removeShitNigga">&nbsp; remove</span>
                    </div>
                </div>
            )
        }
    }    
}

class CountryListItemEdit extends React.Component {

    constructor(props) {
        super(props);
    }    

    render() {

        return (
            <div className="thumbnail list-item">
                <div>
                    <p>Country {this.props.country.name}</p>
                    <p>{this.props.country.continent}</p>
                    <p>{this.props.country.population}</p>
                </div>
            </div>
        )
    }
}


class Country {
    continent;
    name;
    population;

    constructor(continent, name, population) {
        this.continent = continent;
        this.name = name;
        this.population = population;
    }

    static convertObjFromJsonArray(json) {
        return new Country(json.continent, json.name, json.population);
    }

    static convertJsonArray(jsonArray) {
        return jsonArray.map(this.convertObjFromJsonArray);
    }
}

ReactDOM.render(
    <World />,
    document.getElementById('root')
);