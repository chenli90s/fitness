import { View } from '@tarojs/components';
import React, { useState, useEffect } from 'react';
import Taro, { useDidShow } from '@tarojs/taro'
import {
  Collapse, Image, NavBar, AnimatingNumbers, Range, Progress,
  Cell, ConfigProvider, Button, InputNumber, NumberKeyboard
} from '@nutui/nutui-react-taro'
import db, { items, weights } from '../db'
import { ArrowDown, Clock } from '@nutui/icons-react-taro'
import '../pages/exercise/index.scss'

function Exercise(props) {
  const { name, uid } = props
  const customTheme = {
    nutuiCountupWidth: '24px',
    nutuiCountupBgColor: `#00bc14`,
    nutuiCountupColor: `#fff`,
    nutuiCountupLrMargin: `1px`,
  }
  const marginStyle = { margin: 8 }
  const [start, setStart] = useState()
  const [time, setTime] = useState('')
  const [step, setStep] = useState(1)
  const [weight, setWeight] = useState(1)
  const [visible, setVisible] = useState(false)
  const [list, setList] = useState([])
  const [his, setHis] = useState(0)
  const [hisT, setHisT] = useState(0)
  const [cTo, setCto] = useState(0)
  const [cToT, setCtoT] = useState(0)


  const findList = () => {
    // const now = new Date()
    const res = db.get(db.EXERCISE)
    const ls = []
    const kHis = {}
    // console.log('cache', res)
    let cTotal = 0
    let cTotalT = 0
    res.forEach(element => {
      if (element.name === name && element.uid === uid) {
        ls.push(element)
        cTotal += element.weight * parseInt(element.step)
        const tt = element.time.split(':')
        cTotalT += parseInt(tt[0]) * 60 + parseInt(tt[1])
      }
      if (element.name === name && element.uid !== uid) {
        if (kHis[element.uid]) {
          kHis[element.uid].push(element)
        } else {
          kHis[element.uid] = [element]
        }
      }
    });
    setCto(cTotal)
    setCtoT(cTotalT)
    let total = 0
    let totalTime = 0
    Object.values(kHis).forEach(val => {
      let wg = 0
      let time = 0
      val.forEach(item => {
        wg += item.weight * parseInt(item.step)
        const tt = item.time.split(':')
        time += parseInt(tt[0]) * 60 + parseInt(tt[1])
      })
      total += wg
      totalTime += time
    })
    const count = Object.keys(kHis).length
    setHis(count ? (total / count) : 1)
    setHisT(count ? totalTime / count : 1)
    // console.log('ks', ls)
    setList(ls)
  }

  useDidShow(() => {
    findList()
  })

  useEffect(() => {
    // console.log(start)
    if (start) {
      const inter = setInterval(() => {
        const t = (new Date(new Date() - start).toLocaleTimeString()).slice(3,)
        // console.log(t)
        setTime(t)
      }, 1000);
      return () => clearInterval(inter)
    } else {
      // setTime('00:00')
    }
  }, [start])

  const onChange = e => {
    console.log(typeof (e), e, typeof (step))
    if (typeof (step) === 'string') {
      setStep(step + e)
    } else {
      setStep(e)
    }
  }

  const onDelete = e => {
    console.log('<-', e)
    if (typeof (step) === 'string') {
      const res = step.slice(0, -1)
      setStep(res ? res : 1)
    }
  }

  const save = () => {
    db.add(db.EXERCISE, {
      name,
      step,
      time,
      weight,
      uid,
      date: new Date()
    })
    setStep(1)
    setTime('')
    findList()
    setVisible(false)
  }

  const clear = () => {
    setStart(null)
    setTime('')
  }
  // console.log(cTo, hisT)
  return (
    <View className='exercise'>
      <Collapse defaultActiveName={['2', '3']} expandIcon={<ArrowDown />}>
        <Collapse.Item title="预览" name="1">
          <Image src={items[name].url} />
        </Collapse.Item>
        <Collapse.Item title="统计" name="2">
          <View className='view-data'>
            🏋️：{cTo} / {his}(kg)
          </View>
          <Progress
            percent={cTo / his * 100}
            color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
            animated
          />
          <View className='view-data'>
            <Clock size={20} />：{cToT} / {hisT}(S)
          </View>
          <Progress
            percent={cToT / hisT * 100}
            color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
            animated
          />
        </Collapse.Item>
        <Collapse.Item title="计时" name="3">
          <ConfigProvider theme={customTheme}>
            {
              list.map((res, index) => {
                return <Cell key={index} title={res.time} description={res.weight + 'kg'} extra={res.step} />
              })
            }
            <View className='weight-range'>
              <Range value={weight} onChange={(val) => setWeight(val)} marks={[
                { value: 100, label: 'kg' },
              ]} />
            </View>
            <Cell
              title={
                <ConfigProvider theme={customTheme}>
                  <AnimatingNumbers.CountUp value={time} duration={1} length={5} />
                </ConfigProvider>
              }
              extra={<InputNumber value={step} onChange={e => {
                // console.log('step:', step)
                if (!time) return
                setStep(e)
                // console.log(e)
              }} onFocus={() => {
                if (!time) return
                setVisible(true)
              }} />}
            />
            <View style={{ display: 'flex', justifyContent: 'space-between' }}>
              <View>
                <Button type={start ? 'default' : 'success'}
                  onClick={() => {
                    // setStart(start ? null : new Date())
                    // console.log('-----', start)
                    if (start) {
                      setStart(null)
                      setVisible(true)
                    } else {
                      setStart(new Date())
                    }
                  }}
                  style={marginStyle}
                >
                  {start ? '结束' : '开始'}
                </Button>
              </View>
              <View>
                {time ? <Button type='danger' style={marginStyle} onClick={clear} >重置</Button> : null}
                {!start && time ? <Button type='success' style={marginStyle} onClick={save} >保存</Button> : null}
              </View>
            </View>
          </ConfigProvider>
        </Collapse.Item>
      </Collapse>
      <NumberKeyboard
        type='rightColumn'
        confirmText='保存'
        // custom={['', '清空']}
        visible={visible}
        onChange={onChange}
        onDelete={onDelete}
        onConfirm={save}
        onClose={() => setVisible(false)}
      />
    </View>
  );
}

export default Exercise;
