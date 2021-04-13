import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {connect} from 'react-redux';
import {toggleIsAdding} from '../redux/actionCreators'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text></Text>
        <Text>My WORDS</Text>
        <TouchableOpacity onPress={()=>this.props.toggleIsAdding()}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
});





export default connect(null, { toggleIsAdding })(Header);
