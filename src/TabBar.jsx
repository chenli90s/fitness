import Taro from '@tarojs/taro'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Home, Board, Alarm, People } from '@nutui/icons-react-taro'


export default props => {
    return <Tabbar fixed value={props.value}>
        <Tabbar.Item title="首页" icon={<Home size={18} />} onClick={()=>Taro.navigateTo({url: 'pages/index/index'})} />
        <Tabbar.Item title="计划" icon={<Alarm size={18} />} onClick={()=>Taro.navigateTo({url: 'pages/plan/index'})} />
        <Tabbar.Item title="清单" icon={<Board size={18} />} onClick={()=>Taro.navigateTo({url: 'pages/fitness/index'})} />
        <Tabbar.Item title="我的" icon={<People size={18} />} onClick={()=>Taro.navigateTo({url: 'pages/body/index'})} />
    </Tabbar>
}