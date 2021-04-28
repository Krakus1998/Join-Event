import { StyleSheet } from 'react-native';
export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  buttons: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#EEE",
    height: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsText: {
    fontFamily: 'Audiowide-Regular',
    color: "#ffa200",
    fontSize: 24,
  },
  input: {
    padding: 5,
    fontSize: 20,
    marginTop: 0,
    width: '70%',
  },
  headerInput: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: 'Audiowide-Regular',
  },
  InputView: {
    flexDirection: 'row',
    backgroundColor: '#EEE',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
    padding:5,
  }

});