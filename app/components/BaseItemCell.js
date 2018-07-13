import React, { Component } from 'react'
import { Dimensions,  StyleSheet, Text, View, Image } from 'react-native'
import { Card, WhiteSpace, WingBlank, Icon, Flex } from 'antd-mobile-rn'
import ItemCellIcon from '../components/ItemCellIcon'

const styles = StyleSheet.create({
    authorStyle: {
        fontSize: 12,
        color: '#000'
    },
    moduleStyle: {
        fontSize: 12,
        textAlign: 'right'
    },
    thumbStyle: {
        width: 16,
        height: 16,
        borderRadius: 8
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: '700',
        color: 'rgb(72,72,72)'
    },
    contentStyle: {
        fontSize: 12
    },
    footerTextStyle: {
        fontSize: 10
    }

})

/**
 * 如果有图片，则显示图片，否则只显示文章与标题
 * @param {*} props 
 */
const Body = function(props){
    const {width} = Dimensions.get('window')
    if(props.data.img!=null && props.data.img!==''){
        return ( <Flex direction="row"  align="stretch">
            <View style={{width:width - 115}}>
                <Text numberOfLines={2} style={styles.titleStyle}>{props.data.title}</Text>
                <WhiteSpace size="xs"></WhiteSpace>
                <Text numberOfLines={3} style={styles.contentStyle}>{props.data.des}</Text>
            </View>
            <View style={{ paddingLeft:5}}>
                <Image source={{uri:props.data.img}} style={{width:90, height:90}}></Image>
            </View>
        </Flex>)
        
    }else{
        return (<View>
            <Text numberOfLines={2} style={styles.titleStyle}>{props.data.title}</Text>
            <WhiteSpace size="xs"></WhiteSpace>
            <Text numberOfLines={3} style={styles.contentStyle}>{props.data.des}</Text>
        </View>) 
    }
}

/**
 * 基础的单个文章卡片
 */
export default class BaseItemCell extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const title = <Text style={styles.authorStyle}>{this.props.data.author}</Text>
        const extra = <Text style={styles.moduleStyle}>{this.props.data.module}</Text>
        const footer = (<Flex direction="row" >
            <ItemCellIcon icon={'\ue63b'} text={'1'} />
            <ItemCellIcon icon={'\ue684'} text={'评论'}/>
        </Flex>)
        return (
            <Card full style={{ borderWidth: 0 }}>
                <Card.Header title={title}
                    thumb={this.props.data.thumb}
                    thumbStyle={styles.thumbStyle}
                    extra={extra}
                >
                </Card.Header>
                <Card.Body style={{ paddingLeft: 10, paddingRight: 10, borderTopWidth:0 }}>
                    <Body data={this.props.data}/>
                </Card.Body>
                <Card.Footer
                    content={footer}
                />
            </Card>

        )
    }
}