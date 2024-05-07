import { View } from '@tarojs/components';
import React, { useState } from 'react';
import TabBar from '../../TabBar';
import db, {weights, weight} from '../../db';
import { useDidShow } from '@tarojs/taro';
import { Collapse, Cell } from '@nutui/nutui-react-taro';
import { ArrowDown,  } from '@nutui/icons-react-taro'

const struct = {

}

Object.keys(weight).forEach(item=>{
  const ws = []
  Object.values(weight[item]).forEach(wgs=>{
    Object.keys(wgs).forEach(wg=>{
      if(ws.indexOf(wg)===-1){
        ws.push(wg)
      }
    })
  })
  struct[item] = ws
})

console.log(struct)

function Body() {

  const [list, setList] = useState({})

  const ans = ()=>{
    const hist = db.get(db.EXERCISE)
    const fits = {

    }
    hist.forEach(element => {
      const count = element.weight * parseInt(element.step)
      const tt = element.time.split(':')
      const time = parseInt(tt[0]) * 60 + parseInt(tt[1])
      const wgs = weights[element.name]
      Object.keys(wgs).forEach(wg => {
        if(fits[wg]){
          fits[wg] += count * time * wgs[wg]
        }else{
          fits[wg] = count * time * wgs[wg]
        }
      });
    })
    // console.log(fits)
    const items = {}
    Object.keys(struct).forEach(name=>{
      if(name!=='综合'){
        const part = {
          total: 0,
          parts: {}
        }
        items[name] = part
        struct[name].forEach(val=>{
          part.parts[val] = 0
        })

        Object.keys(fits).forEach(fit=>{
          if(struct[name].indexOf(fit)>-1){
            part.total += fits[fit]
            part.parts[fit] = fits[fit]
          }
        })
      }
    })
    console.log(items)
    setList(items)
  }

  useDidShow(()=>{
    ans()
  })

  return (
    <View className='body' style={{paddingTop: 20}}>
      <Collapse expandIcon={<ArrowDown />} >
        {
          Object.keys(list).map(key=>{
            return <Collapse.Item title={`${key}(${list[key].total.toFixed(2)})`} name={key}>
              {Object.keys(list[key].parts).map(name=>{
                return <Cell key={name} title={name} extra={list[key].parts[name].toFixed(2)}/>
              })}
            </Collapse.Item>
          })
        }
      </Collapse>
      <TabBar value={3} safeArea />
    </View>
  );
}

export default Body;
