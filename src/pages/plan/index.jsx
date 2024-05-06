import { View } from '@tarojs/components';
import React, { useState } from 'react';
import TabBar from '../../TabBar';
import { Tabs } from '@nutui/nutui-react-taro';
import { Exercise1, Exercise2 } from '../../db';


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
  return (
    <View>
      <Tabs
        value={tab}
        onChange={(value) => {
          setTab(value)
        }}
      >
        <Tabs.TabPane title="home"> 
          
        </Tabs.TabPane>
        <Tabs.TabPane title="gym"> Tab 2 </Tabs.TabPane>
      </Tabs>
      <TabBar value={1} safeArea />
    </View>
  );
}

export default Plan;
