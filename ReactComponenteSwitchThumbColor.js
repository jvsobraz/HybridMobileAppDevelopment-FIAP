import React from 'react';
import { StatusBar, Switch, Text, View, } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: false,
        };
    }

    render() {
        return (
            <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center' }}>
                <Text>Ativar Opção?</Text>
                <Switch
                    value={this.state.isEnabled}
                    onValueChange={(_) => this.setState({ isEnabled: !this.state.isEnabled })}
                    trackColor={{ false: '#333', true: '#f00' }} />
                <StatusBar style='auto' />
            </View>
        );
    }
}
