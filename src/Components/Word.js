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
import {toggleMemorized} from '../redux/actionCreators'


class Word extends Component {
  
  render() {
    const {en, vn, memorized, id} = this.props.myWord;
    const textDecorationLine = memorized ? 'line-through' : 'none';
    const memorizedButtonText = memorized ? 'forget' : 'memorized';
    return (
      <View style={styles.container}>
        <Text style={{textDecorationLine}}>{en}</Text>
        <Text>{vn}</Text>
        <View style={styles.controller}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>this.props.toggleMemorized(id)}>
            <Text>{memorizedButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>show</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2DEF6',
    padding: 10,
    margin: 10,
  },
  controller: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
  },
});

export default connect(null, {toggleMemorized})(Word);
