import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from 'prop-types';





export default class Accordion extends Component{
    // Specifies the default values for props:
    static propTypes = {
        colorRow: PropTypes.string,
        colorChild: PropTypes.string
      };
    static defaultProps = {
        colorRow: '#A9A9A9',
        colorChild: '#DCDCDC'
    };
    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }
  render() {

    return (
       <View>
            <TouchableOpacity style={[styles.row, {backgroundColor: this.props.colorRow}]} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'#ffff'} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={[styles.child, {backgroundColor: this.props.colorChild}]}>
                    <Text>{this.props.data}</Text>    
                </View>
            }
       </View>
    )
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight:'bold',
        color: '#ffff',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: '#7ED551',
    },
    parentHr:{
        height:1,
        color: '#7645',
        width:'100%'
    },
    child:{
        backgroundColor: '#bcf2a0',
        padding:16,
    }
    
});