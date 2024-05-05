import Taro from '@tarojs/taro'
import  { View } from '@tarojs/components'
import TabBar from '../../TabBar'
import { useState } from 'react'
import db from '../../db'

function Fitness (){
    const [list, setList] = useState([])
    const findList = ()=>{
        // const now = new Date()
        const res = db.get(db.EXERCISE)
        const ls = []
        const kHis = {}
        // console.log('cache', res)
        let cTotal = 0
        let cTotalT = 0
        res.forEach(element => {
            if(kHis[element.uid]){
                kHis[element.uid].push(element)
            }else{
                kHis[element.uid] = [element]
            }
        });
        setCto(cTotal)
        setCtoT(cTotalT)
        const total = []
        const totalTime = []
        Object.values(kHis).forEach(val=>{
            let wg = 0
            let time = 0
            val.forEach(item=>{
                wg += item.weight * parseInt(item.step)
                const tt = item.time.split(':')
                time += parseInt(tt[0])* 60 + parseInt(tt[1])
            })
            total.push(wg)
            totalTime.push(time)
            // total += wg
            // totalTime += time
        })
        // const count = Object.keys(kHis).length
        // setHis(count ? (total / count) : 1)
        // setHisT(count ? totalTime / count : 1 )
        // console.log('ks', ls)
        setList(Object.values(kHis))
    }
    return (<View className='fitness' >
        <TabBar value={1} safeArea />
    </View>)
}

export default Fitness