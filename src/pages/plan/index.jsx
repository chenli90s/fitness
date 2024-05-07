import { View } from '@tarojs/components';
import React, { useState } from 'react';
import TabBar from '../../TabBar';
import { Tabs } from '@nutui/nutui-react-taro';
import { Exercise1, Exercise2 } from '../../db';
import Exercise from '../../components/exercise';
import './index.scss'

const Days = [
  '周日',
  '周一',
  '周二',
  '周三',
  '周四',
  '周五',
  '周六',
]

function Plan() {
  const [tab, setTab] = useState('0')
  const now = new Date()
  const day = now.getDay()
  const DAY = Days[day]
  return (
    <View className='plan'>
      <Tabs
        value={tab}
        onChange={(value) => {
          setTab(value)
        }}
      >
        <Tabs.TabPane title="home"> 
          {
            Object.keys(Exercise1[DAY]).map(key=>{
              return <View className='plan-container' key={key} >
                <View className='plan-container-title'>{key}</View>
                {
                  Exercise1[DAY][key].map((name, index)=>{
                    return <View className='exercise-plan' key={index}>
                      <View className='item-name'>- {name}</View>
                      <Exercise name={name} uid={`${now.toDateString()}_${name}`} />
                    </View>
                  })
                }
              </View>
            })
          }
        </Tabs.TabPane>
        <Tabs.TabPane title="gym"> 
          {
            Object.keys(Exercise2[DAY]).map(key=>{
              return <View className='plan-container' key={key} >
                <View className='plan-container-title'>{key}</View>
                {
                  Exercise2[DAY][key].map((name, index)=>{
                    return <View className='exercise-plan' key={index}>
                      <View className='item-name'>- {name}</View>
                      <Exercise name={name} uid={`${now.toDateString()}_${name}`} />
                    </View>
                  })
                }
              </View>
            })
          }
        </Tabs.TabPane>
      </Tabs>
      <TabBar value={1} safeArea />
    </View>
  );
}

export default Plan;
