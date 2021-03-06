import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {showAll, showMemorized, showNeedPractice } from '../redux/actionCreators'

class Filter extends Component {
  getTextStyle(statusName) {
    const {myFilterStatus} = this.props;
    if (statusName === myFilterStatus)
      return {color: 'yellow', fontWeight: 'bold'};
    return styles.buttonText;
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.props.showAll()}>
          <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.showMemorized()}>
          <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.showNeedPractice()}>
          <Text style={this.getTextStyle('NEED_PRACTICE')}>NEED PRACTICE</Text>
        </TouchableOpacity>
      </View>
    );
  } 
}

function mapStateToProps(state) {
  return {myFilterStatus: state.filterStatus};
}

export default connect(mapStateToProps,{showAll, showMemorized, showNeedPractice })(Filter);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#583C3C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonText: {color: 'white'},
});
