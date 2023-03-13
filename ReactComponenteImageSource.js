import React from 'react';
import { StatusBar, Image, View, Button } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resizeMode: 'cover',
        };
    }

    render() {
        return (
            <View style={{ padding: 16 }}>
                <Image
                    resizeMode={this.state.resizeMode}
                    source={{ uri: 'https://picsum.photos/id/10/300/200.jpg' }}
                    style={{ alignSelf: 'center', width: 200, height: 200 }}
                />
                <View style={{ padding: 16, alignContent: 'space-around' }}>
                    <Button
                        title={'Cover'}
                        onPress={(_) => this.setState({ resizeMode: 'cover' })}
                    />
                    <View style={{ marginBottom: 20 }} />
                    <Button
                        title={'Contain'}
                        onPress={(_) => this.setState({ resizeMode: 'contain' })}
                    />
                    <View style={{ marginBottom: 20 }} />
                    <Button
                        title={'Stretch'}
                        onPress={(_) => this.setState({ resizeMode: 'stretch' })}
                    />
                    <View style={{ marginBottom: 20 }} />
                    <Button
                        title={'Repeat'}
                        onPress={(_) => this.setState({ resizeMode: 'repeat' })}
                    />
                    <View style={{ marginBottom: 20 }} />
                    <Button
                        title={'Center'}
                        onPress={(_) => this.setState({ resizeMode: 'center' })}
                    />
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}
