import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class LegacyClock extends React.Component {
state = { time: new Date() };
componentDidMount() {
this._interval = setInterval(() => this.setState({ time: new Date() }),
1000);
}
componentWillUnmount() {
clearInterval(this._interval);
}
render() {
const { time } = this.state;
return (
<View style={styles.container}>
<Text style={styles.time}>{time.toLocaleTimeString()}</Text>
</View>
);
}
}
const styles = StyleSheet.create({
container: { padding: 8, backgroundColor: '#FFF6E5', borderRadius: 8 },
time: { fontSize: 14, fontWeight: '600' }
});