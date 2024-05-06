import Taro, { useDidShow } from '@tarojs/taro'
import  { View } from '@tarojs/components'
import { Cell } from '@nutui/nutui-react-taro'
import TabBar from '../../TabBar'
import { useState } from 'react'
import db from '../../db'
import { Clock } from '@nutui/icons-react-taro'
import './index.scss'

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
            if(kHis[element.name]){
                kHis[element.name].push(element)
            }else{
                kHis[element.name] = [element]
            }
        });
        const alls = []
        Object.values(kHis).forEach(val=>{
            let wg = 0
            let time = 0
            let date = ''
            val.forEach(item=>{
                wg += item.weight * parseInt(item.step)
                const tt = item.time.split(':')
                time += parseInt(tt[0])* 60 + parseInt(tt[1])
                if(item.date >date){
                    date = item.date
                }
            })
            alls.push({
                ...val[0],
                wg,
                time,
                date
            })
            // total.push(wg)
            // totalTime.push(time)
            // total += wg
            // totalTime += time
        })
        // console.log()
        alls.sort((a, b)=>new Date(b.date)-new Date(a.date))
        setList(alls)
        // const count = Object.keys(kHis).length
        // setHis(count ? (total / count) : 1)
        // setHisT(count ? totalTime / count : 1 )
        // console.log('ks', ls)
        // console.log(kHis)
        // setList(Object.values(kHis))
    }

    useDidShow(()=>{
        findList()
    })
    // console.log(list)
    return (<View className='fitness' >
        {
            list.map((val, index)=>{
                return <Cell key={index} align="center" title={val.name} description={`🏋️ ${val.wg}   ${new Date(val.date).toLocaleString()}`} extra={<View className='time'><Clock />&nbsp;&nbsp;{val.time}</View>} />
            })
        }
        <TabBar value={2} safeArea />
    </View>)
}

export default Fitness