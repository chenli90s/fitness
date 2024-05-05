import Taro from '@tarojs/taro'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Home, Board } from '@nutui/icons-react-taro'


export default props => {
    return <Tabbar fixed value={props.value}>
        <Tabbar.Item title="首页" icon={<Home size={18} />} onClick={()=>Taro.navigateTo({url: 'pages/index/index'})} />
        <Tabbar.Item title="统计" icon={<Board size={18} />} onClick={()=>Taro.navigateTo({url: 'pages/fitness/index'})} />
    </Tabbar>
}