import { Component, PropsWithChildren } from 'react'
import { View, Map } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './index.less'

interface IState {
    latitude: number,
    longitude: number,
}
export default class Index extends Component<{},IState> {

    constructor(prop){
        super(prop)
        this.state = {
            latitude:0,
            longitude:0,
        }
    }
    componentDidShow() {
        console.log('++++componentDidShow++++')
        Taro.getLocation({
            type: 'gcj02',
            success:(res)=>{
                this.setState({
                    latitude: res.latitude,
                    longitude: res.longitude,
                })
            }
        })
    }
    regionchange(e){
        console.log('++++regionchange+++')
        console.log(e)
    }
    render() {
        return (
            <View className='index'>
                <Map
                    id="map"
                    style={{ width: '100%', height: '100vh' }}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    showLocation
                    scale={14}
                    onRegionChange={this.regionchange.bind(this)}
                />
            </View>
        )
    }
}
