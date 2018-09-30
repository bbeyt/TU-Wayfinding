import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class SwitchButton extends React.Component {
	state = {
		active: false
	}

	handleSwitchToggle = () => {
		this.setState({
			active: !this.state.active
		})
	}

	render() {

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#C7C1C1',
		borderRadius: 50,
		width: 250,
		flexDirection: 'row',
		justifyContent: !this.state.active ? 'flex-start':'flex-end'
	},
	toggle: {
		height: 60,
		width: 125,
		backgroundColor: this.state.active ? '#55acee' : '#CB6161',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	label: {
		fontSize: 20,
		color: 'white'
	}
})
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.toggle}
				   onPress={this.handleSwitchToggle}
				>
					<Text style={styles.label}>
					   {this.state.active ? 'On' : 'Off'}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default SwitchButton;
