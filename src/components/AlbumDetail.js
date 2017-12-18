import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MainStyles from '../styles/MainStyles'

const AlbumDetail = (props) =>{
  return(
    <Text>{props.albums.title}</Text>
  )
}
