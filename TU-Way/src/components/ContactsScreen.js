import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { Container, Header, Right, Body, Left, Icon, Title } from 'native-base';
import contactList from '../lists.json';

export default class ContactsScreen extends Component {
	static navigationOptions = {
//		title: contactList.ContactsView.title,
        drawerIcon: ({ tintColor }) => (
            <Icon name="contacts" style={{ fontSize: 24, color: tintColor }} />
        )
//		headerLeft: <Button />
	};

	render() {
		return (
//			<FlatList style={styles.container}>
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
					/>
//					</Body>
					<Right />
				</Header>
				<FlatList
					style={styles.container}
					data={contactList.ContactsView.data}
					keyExtractor={(item, index) => item.name}
					renderItem={({item}) =>
	//					<TouchableOpacity>

	//					</TouchableOpacity>
						<Text>{item.name}</Text>
					}
				/>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
//		paddingTop: 15,
		backgroundColor: '#fff',
	},
	item: {

	},
	nav: {

	},
});
