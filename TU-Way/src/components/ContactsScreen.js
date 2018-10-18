import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Right, Body, Left, Icon, Title } from 'native-base';
import contactList from '../lists.json';

export default class ContactsScreen extends Component {
	static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="contacts" style={{ fontSize: 24, color: tintColor }} />
        )
	};

	render() {
		return (
			<Container>
				<Header androidStatusBarColor={"#723130"} style={{backgroundColor: "#723130"}}>
					<Left>
						<Icon
							name="menu" 
							onPress={() => this.props.navigation.openDrawer()}
						/>
					</Left>
					<Body>
						<Title>{contactList.ContactsView.title}</Title>
					</Body>
					<Right />
				</Header>
				<FlatList
					data={contactList.ContactsView.data}
					keyExtractor={(item, index) => item.name}
					renderItem={({item}) => (
						<View style={styles.listItem}>
							<Text style={styles.name}>{item.name}</Text>
						</View>
					)}
				/>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	listItem: {
		flex: 1,
		borderWidth: 1,
		borderColor: 'lightgrey',
		backgroundColor: '#FFFFFF',
	},
	name: {
		marginTop: 10,
		marginBottom: 10,
		textAlign: 'left',
		color: 'black',
		fontSize: 20,
		paddingLeft: 10,
		fontWeight: 'bold',
	},
	phone: {
		marginTop: 5,
		marginBottom: 10,
		textAlign: 'left',
		color: 'black',
		fontSize: 15,
		paddingLeft: 10,
	},
});
