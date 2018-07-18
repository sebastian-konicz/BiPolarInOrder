import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            mood: "",
            anxiety: "",
            irritability: "",
            weight: "",
            sleep: "",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (typeof this.props.formData === 'function'){
            this.props.formData(
                this.state.date,
                this.state.mood,
                this.state.anxiety,
                this.state.irritability,
                this.state.weight,
                this.state.sleep);
        }
    }
    handleDate = (event) => {
        this.setState({
            date: event.target.value
        });
    };
    handleMood = (event) => {
        this.setState({
            mood: event.target.value
        });
    };
    handleAnxiety = (event) => {
        this.setState({
            anxiety: event.target.value
        });
    };
    handleIrritability = (event) => {
        this.setState({
            irritability: event.target.value
        });
    };
    handleWeight = (event) => {
        this.setState({
            weight: event.target.value
        });
    };
    handleSleep = (event) => {
        this.setState({
            sleep: event.target.value
        });
    };

    render() {
        return (
            <section className="container form">
                <form>
                    <label className="form-label">
                        Data:
                    </label><br/>
                    <input className="form-control col-12"
                        type="date"
                        value={this.state.date}
                        onChange={this.handleDate}
                        />
                    <label className="form-label">
                        Nastrój:
                    </label><br/>
                    <select className="form-control col-12"
                        value={this.state.mood}
                        onChange={this.handleMood}>
                        <option value="4">Podwyższonny - nasilony</option>
                        <option value="3">Podwyższonny - podwyższony</option>
                        <option value="2">Podwyższonny - umiarkowany</option>
                        <option value="1">Podwyższonny - łagodny</option>
                        <option value="0">Normalny</option>
                        <option value="-1">Obniżony - łagodny</option>
                        <option value="-2">Obniżony - umiarkowany</option>
                        <option value="-3">Obniżony - podwyższony</option>
                        <option value="-4">Obniżony - nasilony</option>
                    </select>
                    <label className="form-label">
                        Niepokój:
                    </label><br/>
                    <select className="form-control col-12"
                            value={this.state.mood}
                            onChange={this.handleAnxiety}>
                        <option value="0">0 - brak</option>
                        <option value="1">1 - łagodny</option>
                        <option value="2">2 - umiarkowany</option>
                        <option value="3">3 - podwyższony</option>
                        <option value="4">4 - nasilony</option>
                    </select>
                    <label className="form-label">
                        Drażliwość:
                    </label><br/>
                    <select className="form-control col-12"
                            value={this.state.mood}
                            onChange={this.handleIrritability}>
                        <option value="0">0 - brak</option>
                        <option value="1">1 - łagodny</option>
                        <option value="2">2 - umiarkowany</option>
                        <option value="3">3 - podwyższony</option>
                        <option value="4">4 - nasilony</option>
                    </select>
                    <label className="form-label">
                        Waga w kg (np. 80.5):
                    </label><br/>
                    <input className="form-control col-12"
                           type="text"
                           value={this.state.weight}
                           onChange={this.handleWeight}
                    />
                    <label className="form-label">
                        Godziny snu (np. 8.5):
                    </label><br/>
                    <input className="form-control col-12"
                           type="text"
                           value={this.state.sleep}
                           onChange={this.handleCountry}
                    />
                    <button className="form-button col-12" value="Submit" onClick={this.handleSubmit}>Zapisz</button>
                </form>
            </section>
        )
    }
}

export {Form}

