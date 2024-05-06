import React, {  } from 'react'
import Taro, {  } from '@tarojs/taro'
import {
    NavBar, 
} from '@nutui/nutui-react-taro'
import { ArrowDown, ArrowLeft } from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import Exercise from '../../components/exercise'

// import './index.scss'

export default () => {
    const name = decodeURIComponent(Taro.getCurrentInstance().router.params.name)
    const uid = decodeURIComponent(Taro.getCurrentInstance().router.params.uid)
    
    return <View className='exercise'>
        <NavBar
            back={
                <>
                    <ArrowLeft size={14} />
                    返回
                </>
            }
            onBackClick={(e) => Taro.navigateBack()}
        >
            {name}
        </NavBar>
        <Exercise name={name} uid={uid} />
        
    </View>
}