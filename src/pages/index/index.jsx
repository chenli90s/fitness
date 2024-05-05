import React, {useEffect, useState} from 'react'
import { View, ScrollView } from '@tarojs/components'
import { Image, Tag } from "@nutui/nutui-react-taro"
import './index.scss'
import { items, weight } from '../../db'
import TabBar from '../../TabBar'
import Taro from '@tarojs/taro'

function generateAlphanumericUID() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function Index() {
  const [filter, setFilter] = useState()
  const [list, setList] = useState(Object.keys(items))

  useEffect(()=>{
    if(filter){
      setList(Object.keys(weight[filter]))
    }else{
      setList(Object.keys(items))
    }
  }, [filter])
  console.log(list)
  return (
    <View className="home">
      <View className='filter'>
        {Object.keys(weight).map(name=>{
          return <Tag onClick={()=>{
            if(filter === name){
              setFilter('')
            }else{
              setFilter(name)
            }
          }} key={name} background={name === filter ? '#FA685D' : "#E9E9E9"} color={name === filter ? '' : "#999999"}>{name.replace('训练', '')}</Tag>
        })}
      </View>
      <ScrollView style={{height: '80vh'}} scrollY >
      {
        list.map(name=>{
          return <View className='item' key={name} onClick={()=>Taro.navigateTo({
            url:  `pages/exercise/index?name=${name}&uid=${generateAlphanumericUID()}`
          })}>
            <Image src={items[name]['url']}/>
            <View className='title'>{name}</View>
            <View className='desc'>{items[name]['func']}</View>
          </View>
        })
      }
      </ScrollView>
      <TabBar value={0} safeArea />
      
    </View>
  )
}

export default Index
