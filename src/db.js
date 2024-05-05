import Taro from "@tarojs/taro";

const item = {
    name: '',
    tp: '',
    url: ''
}

export const items = {
    杠铃平板卧推: {
        func: '胸部肌群、三角肌',
        url: 'https://hiphotos.baidu.com/feed/pic/item/377adab44aed2e733b16e7eb8b01a18b86d6fa7e.jpg',
        url2: 'https://mmbiz.qpic.cn/mmbiz/ib5Z1VpGKq6QfEiaA3ChEco8vYfqt1djic5q76c2jnzYlsWQ8s4H2X2jAibWujjKFGbicGDqAqWGzaxUVc9vpLynUwg/640?wx_fmt=gif'
    },
    上斜哑铃飞鸟夹胸: {
        func: '上胸部, 肱三头肌, ',
        url: 'https://hiphotos.baidu.com/feed/pic/item/f9198618367adab4e4737a8487d4b31c8601e452.jpg'
    },
    俯卧撑: {
        func: '肩袖肌群、胸大肌',
        // url: 'https://img-blog.csdnimg.cn/img_convert/34c4a07d0229f08f240b9b467b7d3219.gif'
        url: 'https://hiphotos.baidu.com/feed/pic/item/0823dd54564e925895f9e7299082d158cdbf4e23.jpg'
    },
    滚轮支点俯卧撑: {
        func: '胸肌,上肢肌肉群、腰腹等核心部位',
        // url: 'https://hiphotos.baidu.com/feed/pic/item/0823dd54564e925895f9e7299082d158cdbf4e23.jpg'
        url: 'http://p8.itc.cn/q_70/images03/20200812/903c15ec744042b7abe4c3bdbdea7a9c.gif'
    },
    上斜杠铃卧推: {
        func: '上胸部',
        url: 'https://hiphotos.baidu.com/feed/pic/item/8d5494eef01f3a291b40b4099525bc315d607c68.jpg'
    },
    双杠臂屈伸: {
        func: '胸部',
        url: 'https://hiphotos.baidu.com/feed/pic/item/3b292df5e0fe99258584089738a85edf8cb17168.jpg'
    },
    哑铃侧平提肩: {
        func: '三角肌',
        url: 'https://hiphotos.baidu.com/feed/pic/item/c995d143ad4bd113fe32d6f556afa40f4afb057d.jpg'
    },
    站姿哑铃飞鸟: {
        func: '三角肌、斜方肌、冈上肌',
        url: 'https://hiphotos.baidu.com/feed/pic/item/42a98226cffc1e172b1cedf64690f603728de952.jpg'
    },
    俯身哑铃划船: {
        func: '背阔肌',
        url: 'https://hiphotos.baidu.com/feed/pic/item/a686c9177f3e670994cd243837c79f3df9dc5523.jpg'
    },
    山羊挺身: {
        func: '竖脊肌',
        url: 'https://hiphotos.baidu.com/feed/pic/item/728da9773912b31b1993acee8a18367adbb4e17e.jpg'
    },
    高位下拉: {
        func: '背阔肌',
        url: 'https://hiphotos.baidu.com/feed/pic/item/f9198618367adab4e42f7a8487d4b31c8601e47e.jpg',
        url2: 'https://mmbiz.qpic.cn/mmbiz/ib5Z1VpGKq6QfEiaA3ChEco8vYfqt1djic5uwjdPT3hgh2sFNSwgiaqKIXkVSjGQ4y5Gpb3iacxcff0uSkk6bMfH6sg/640?wx_fmt=gif'
    },
    俯身杠铃划船: {
        func: '背部',
        url: 'https://hiphotos.baidu.com/feed/pic/item/bba1cd11728b4710dea79c0bcfcec3fdfd032368.jpg',
        url2: 'https://mmbiz.qpic.cn/mmbiz/ib5Z1VpGKq6QfEiaA3ChEco8vYfqt1djic50gicNXDqkMPlrUpWPGBicgPzouDsUI1g1denAkPNKkCphLAoWAPxf3SA/640?wx_fmt=gif'
    },
    哑铃坐姿推肩: {
        func: '三角肌前束和中束',
        url: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3031884368,3953325729&fm=173&app=25&f=GIF?w=332&h=513&s=F2087023E22062A052B82DE70100E022'
    },
    俯身哑铃飞鸟: {
        func: '三角肌后束、上背肌群',
        url: 'https://hiphotos.baidu.com/feed/pic/item/a71ea8d3fd1f4134c3bf64b9291f95cad0c85e68.jpg'
    },
    反握引体向上: {
        func: '肱二头肌、背部肌群',
        url: 'https://hiphotos.baidu.com/feed/pic/item/b03533fa828ba61ef923a9e84d34970a314e5923.jpg'
    },
    杠铃弯举: {
        func: '肱二头肌、肱肌、肱桡肌',
        url: 'https://hiphotos.baidu.com/feed/pic/item/c8177f3e6709c93d2e3f6f30933df8dcd0005423.jpg'
    },
    哑铃锤式弯举: {
        func: '肱二头肌外侧、肱肌、肱桡肌',
        // url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2584724511,122840358&fm=173&app=25&f=GIF?w=332&h=513&s=3BA878230B7152980D8C3DCF0100A0E2'
        url: 'http://p4.itc.cn/q_70/images03/20200812/efb33ddbdd894bfdb4eab49de88a36a6.gif'
    },
    哑铃弯举: {
        func: '肱二头肌',
        url: 'https://hiphotos.baidu.com/feed/pic/item/cefc1e178a82b901e952a2f47f8da9773812ef7e.jpg'
    },
    杠铃颈后臂屈伸: {
        func: '肱三头肌',
        url: 'http://p4.itc.cn/q_70/images03/20200812/b0edae30ff334920953633d6d86b6428.gif'
        // url: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2519072250,2787653949&fm=173&app=25&f=GIF?w=513&h=332&s=5AAC3C627C246E806844DCF50000E0A3'
    },
    直腿仰卧后撑: {
        func: '肱三头肌',
        url: 'https://hiphotos.baidu.com/feed/pic/item/cc11728b4710b912a0499739cffdfc0393452268.jpg'
    },
    站姿哑铃提肩: {
        func: '斜方肌',
        url: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1699893887,2185819762&fm=173&app=25&f=GIF?w=332&h=513&s=392C7033ABB07298156008E70100E023'
    },
    深蹲: {
        func: '臀腿部',
        url: 'https://hiphotos.baidu.com/feed/pic/item/8b82b9014a90f603d64ffd803512b31bb151ed7e.jpg'
    },
    杠铃硬拉: {
        func: '背部肌、臀腿部、腰部,股四头肌,臀大肌、腘绳肌,竖脊肌',
        url: 'https://hiphotos.baidu.com/feed/pic/item/b03533fa828ba61ef966a9e84d34970a314e5968.jpg'
    },
    哑铃单腿硬拉: {
        func: '腿部肌群、臀大肌',
        url: 'http://p6.itc.cn/q_70/images03/20200812/419308729be24ae3b4d9f7be38cf811b.gif',
        url2: 'https://dingyue.ws.126.net/2022/0402/a46b7bd8g00r9p6br01oyd200hr00btg00hr00bt.gif'
    },
    台阶登凳: {
        func: '股四头肌、臀大肌',
        url: 'https://hiphotos.baidu.com/feed/pic/item/960a304e251f95ca897df371c5177f3e66095268.jpg'
    },
    俯卧背臀训练: {
        func: '拉伸 背部肌群 臀大肌',
        url: 'http://img.mp.itc.cn/upload/20160513/17389c79c36140898af2a013262e7c1d_th.jpg'
    },
    仰卧卷腹: {
        func: '腹部肌群',
        url: 'http://img.mp.itc.cn/upload/20160513/24b39fce5e00422492640121085fbd55_th.jpg'
    },
    仰卧卷腹转体: {
        func: '腰腹部肌肉群,腹直肌、腹外斜肌和腹内斜肌,胸锁乳突肌,',
        url: 'http://img.mp.itc.cn/upload/20160513/858fe817a2ae40a79ad5ae12460009d4_th.jpg'
    },
    坐式反握腕弯举: {
        func: '桡侧腕屈肌、尺侧腕屈肌、掌长肌',
        url: 'http://p3.itc.cn/q_70/images03/20200812/350ebe8e4dd34cb58c410f4d6e2a5bc4.gif'
    },
    耸肩提哑铃: {
        func: '斜方肌上部、肩胛提肌',
        url: 'http://p5.itc.cn/q_70/images03/20200812/4aebb68752ef45689960915a3ac079f4.gif'
    },
    坐式划船: {
        func: '肱二头肌、肱肌、肱桡肌',
        url: 'https://5b0988e595225.cdn.sohucs.com/images/20170628/5333f85556a04ddc8e221530e17cec9e.gif'
    },
    悬挂屈腿收腹: {
        func: '腹部肌群',
        url: 'https://pic1.zhimg.com/v2-4ec812c1718f9bf5e15b393295ab8a44_b.webp'
    },
    仰卧平板壶铃肱三弯举: {
        func: '肱三头肌',
        url: 'https://pic4.zhimg.com/v2-9923ace484d1143170226d2033221a17_b.webp'
    },
    俯身背臀训练: {
        func: '背部肌群、臀大肌',
        url: 'https://p2.itc.cn/q_70/images03/20210822/5209e574ffa94e99a3cb6bfb113180cf.gif'
    },
    俯身单腿平衡训练: {
        func: '大腿肌肉',
        url: 'https://p3.itc.cn/q_70/images03/20210822/2e5461c18bf24b8c85d1db35ea9aff2c.gif'
    },

}

export const weight = {
    "胸部训练": {
        "杠铃平板卧推": {
            "胸大肌": 0.9,
            "三角肌前束": 0.4,
            "肱三头肌": 0.3
        },
        "上斜哑铃飞鸟夹胸": {
            "胸大肌上部": 0.7,
            "三角肌前束": 0.3
        },
        "上斜杠铃卧推": {
            "胸大肌上部": 0.8,
            "三角肌前束": 0.5,
            "肱三头肌": 0.3
        }
    },
    "背部训练": {
        "俯身哑铃划船": {
            "背阔肌": 0.8,
            "肩胛提肌": 0.6,
            "后三角肌": 0.4
        },
        "高位下拉": {
            "背阔肌": 0.75,
            "三角肌后束": 0.3
        },
        "俯身杠铃划船": {
            "背阔肌": 0.8,
            "肩胛提肌": 0.7,
            "后三角肌": 0.5
        }
    },
    "肩部训练": {
        "哑铃侧平提肩": {
            "三角肌中束": 0.65,
            "三角肌前束": 0.3
        },
        "站姿哑铃飞鸟": {
            "三角肌后束": 0.6,
            "三角肌中束": 0.4
        },
        "哑铃坐姿推肩": {
            "三角肌": 0.85
        },
        "站姿哑铃提肩": {
            "三角肌": 0.55
        }
    },
    "腿部训练": {
        "深蹲": {
            "股四头肌": 0.95,
            "臀大肌": 0.9,
            "腿后肌群": 0.8
        },
        "杠铃硬拉": {
            "臀大肌": 0.95,
            "腿后肌群": 0.9,
            "背阔肌": 0.4
        },
        "台阶登凳": {
            "股四头肌": 0.7,
            "臀大肌": 0.65
        }
    },
    "腹部训练": {
        "仰卧卷腹": {
            "腹直肌": 0.6
        },
        "仰卧卷腹转体": {
            "腹直肌": 0.65,
            "腹外斜肌": 0.4
        },
        "悬挂屈腿收腹": {
            "腹直肌": 0.65,
            "臀大肌": 0.4
        }
    },
    "手臂训练": {
        "杠铃弯举": {
            "肱二头肌": 0.8
        },
        "哑铃锤式弯举": {
            "肱二头肌": 0.75
        },
        "哑铃弯举": {
            "肱二头肌": 0.75
        },
        "杠铃颈后臂屈伸": {
            "肱三头肌": 0.7
        }
    },
    "综合": {
        "俯卧撑": {
            "胸大肌": 0.7,
            "三角肌前束": 0.4,
            "肱三头肌": 0.5
        },
        "滚轮支点俯卧撑": {
            "胸大肌": 0.8,
            "三角肌前束": 0.5,
            "肱三头肌": 0.6,
            "腹直肌": 0.4
        },
        "双杠臂屈伸": {
            "肱三头肌": 0.85,
            "三角肌": 0.4
        },
        "俯身哑铃飞鸟": {
            "三角肌后束": 0.65,
            "斜方肌": 0.4
        },
        "反握引体向上": {
            "背阔肌": 0.85,
            "肱二头肌": 0.6,
            "肩胛提肌": 0.4
        },
        "直腿仰卧后撑": {
            "腹直肌": 0.6,
            "肱三头肌": 0.4
        },
        "哑铃单腿硬拉": {
            "腿后肌群": 0.75,
            "臀大肌": 0.7
        },
        "俯卧背臀训练": {
            "背阔肌": 0.65,
            "臀大肌": 0.6
        },
        "坐式反握腕弯举": {
            "前臂肌群": 0.5
        },
        "耸肩提哑铃": {
            "斜方肌": 0.55
        },
        "坐式划船": {
            "背阔肌": 0.75,
            "三角肌后束": 0.4,
            "肩胛提肌": 0.5
        },
        "仰卧平板壶铃肱三弯举": {
            "肱三头肌": 0.7
        },
        "俯身背臀训练": {
            "背阔肌": 0.65,
            "臀大肌": 0.65
        },
        "俯身单腿平衡训练": {
            "腿后肌群": 0.6,
            "臀大肌": 0.6
        }
    }
}

export const weights = {

}

Object.values(weight).forEach(tps=>{
    Object.keys(tps).map(name=>{
        weights[name] = tps[name]
    })
})

export const Exercise1 = {
    "周一": {
        "胸部训练": ["杠铃平板卧推", "上斜杠铃卧推", "俯卧撑"],
        "三角肌训练": ["站姿哑铃飞鸟"]
    },
    "周二": {
        "背部训练": ["俯身哑铃划船", "俯身杠铃划船"],
        "手臂训练": ["哑铃弯举", "杠铃颈后臂屈伸"]
    },
    "周三": {
        "休息日": []
    },
    "周四": {
        "腿部训练": ["深蹲", "杠铃硬拉", "哑铃单腿硬拉"],
        "核心训练": ["仰卧卷腹"]
    },
    "周五": {
        "肩部训练": ["哑铃侧平提肩", "哑铃坐姿推肩"],
        "臂部训练": ["哑铃锤式弯举"]
    },
    "周六": {
        "全身训练": ["滚轮支点俯卧撑", "俯卧背臀训练", "站姿哑铃提肩"],
        "辅助训练": ["直腿仰卧后撑"]
    },
    "周日": {
        "休息日": []
    }
}

export const Exercise2 = {
    "周一": {
        "胸部训练": ["杠铃平板卧推", "上斜杠铃卧推", "俯卧撑"],
        "三角肌训练": ["站姿哑铃飞鸟", "哑铃坐姿推肩"]
    },
    "周二": {
        "背部训练": ["俯身哑铃划船", "高位下拉", "俯身杠铃划船"],
        "手臂训练": ["哑铃弯举", "哑铃锤式弯举", "杠铃颈后臂屈伸"]
    },
    "周三": {
        "腿部训练": ["深蹲", "杠铃硬拉", "哑铃单腿硬拉"],
        "核心训练": ["仰卧卷腹", "悬挂屈腿收腹"]
    },
    "周四": {
        "全身训练": ["滚轮支点俯卧撑", "俯卧背臀训练", "台阶登凳"],
        "辅助训练": ["坐式划船", "站姿哑铃提肩"]
    },
    "周五": {
        "重复核心训练": ["俯卧撑", "仰卧卷腹转体", "悬挂屈腿收腹"],
        "手臂强化": ["反握引体向上", "双杠臂屈伸"]
    },
    "周六": {
        "胸背强化": ["杠铃平板卧推", "高位下拉"],
        "肩腿联合训练": ["哑铃侧平提肩", "深蹲"]
    },
    "周日": {
        "休息日": []
    }
}

const group = {
    name: '',
    ls: []
}

const exercise = {
    count: 0,
    weight: 0,
    time: 0,
    date: ''
}


export default {
    EXERCISE: 'exercise',
    add(db, obj) {
        let datas = Taro.getStorageSync(db)
        if (datas) {
            // JSON.parse(datas)
            datas.push(obj)
            Taro.setStorageSync(db, datas)
        } else {
            Taro.setStorageSync(db, [obj])
        }
    },
    get(db) {
        const datas = Taro.getStorageSync(db)
        return datas ? datas : []
    }
}