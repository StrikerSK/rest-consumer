import * as React from "react";

class CheckBox extends React.Component {

    render() {
        return (
            <input type="checkbox" id={this.props.id} value={this.props.value} onChange={this.props.onChange}/>
        )
    }
}

class CheckboxComponents extends React.Component{

    render(){
        const languages = this.props.languages;

        return(
            languages.map(item => <label><CheckBox id={item} value={item} onChange={this.props.onChange}/>{item}</label>)
        )
    }

} export default CheckboxComponents