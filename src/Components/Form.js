import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {connect} from 'react-redux';
import {addWord} from '../redux/actionCreators';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en: '',
      vn: '',
    };
  }
  onAdd() {
    const {en, vn} = this.state;
    this.props.addWord(en, vn);
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          value={this.state.en}
          onChangeText={text => this.setState({en: text})}
          placeholder="English Word"
        />
        <TextInput
          style={styles.textInput}
          value={this.state.vn}
          onChangeText={text => this.setState({vn: text})}
          placeholder="Meaning"
        />
        <TouchableOpacity onPress={() => this.onAdd()}>
          <Text style={styles.textAdd}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    backgroundColor: '#E4F6D4',
    width: 300,
    margin: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  textAdd: {
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default connect(null, {addWord})(Form);
