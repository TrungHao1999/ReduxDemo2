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

import getTemp from '../api/getTemp';
import {connect} from 'react-redux';
import {
  startFetchData,
  fetchSuccess,
  fetchError,
  fetchDataThunk,
} from '../redux/actionCreators';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
    };
  }
  getTempByCityName() {
    // this.props.startFetchData();
    // getTemp(this.state.cityName)
    //   .then(temp => this.props.fetchSuccess(this.state.cityName, temp))
    //   .catch(() => this.props.fetchError());
    this.props.fetchDataThunk(this.state.cityName);
  }

  getWeatherMessage() {
    const {cityName, error, isLoading, temp} = this.props;
    if (isLoading) return '...Loading...';
    if (error) return 'Vui long thu lai';
    if (!cityName) return 'Nhap ten thanh pho';
    return `${cityName} hien tai ${temp} do C`;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{this.getWeatherMessage()}</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.cityName}
          onChangeText={text => this.setState({cityName: text})}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.getTempByCityName()}>
          <Text style={styles.buttonText}>Lay nhiet do</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: 'white',
    fontSize: 30,
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    margin: 50,
  },
  buttonText: {
    color: 'red',
    fontSize: 17,
  },
  textInput: {
    margin: 10,
    backgroundColor: 'black',
    width: 200,
    height: 40,
    fontSize: 20,
    color: 'white',
  },
});

function mapStateProps(state) {
  return {
    cityName: state.cityName,
    temp: state.temp,
    error: state.error,
    isLoading: state.isLoading,
  };
}

export default connect(mapStateProps, {
  startFetchData,
  fetchSuccess,
  fetchError,
  fetchDataThunk,
})(Main);
