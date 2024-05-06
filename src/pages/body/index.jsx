import { View } from '@tarojs/components';
import React from 'react';
import TabBar from '../../TabBar';

function Body() {
  return (
    <View>
      Body
      <TabBar value={3} safeArea />
    </View>
  );
}

export default Body;
