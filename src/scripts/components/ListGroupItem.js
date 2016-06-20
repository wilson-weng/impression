import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * ListGroupItem 组件
 */
export default class ListGroupItem extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
        this.state = {
            Tag: props.href ? 'a': 'li'
        };
    }
    //props校验
    static propTypes = {
        href: PropTypes.string,
        disabled: PropTypes.bool,
        active: PropTypes.bool,
        header: PropTypes.string,
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { href, disabled, active, children, className, ...others } = this.props,
            { Tag } = this.state,
            disabledStyle = disabled ? 'disabled' : null,
            activeStyle = active ? 'active' : null,
            actionStyle = href ? 'list-group-item-action' : null;

        return(
            <Tag {...others} href={href} className={classnames('list-group-item', activeStyle, disabledStyle, actionStyle, className )}>
                {children}
            </Tag>
        );
    }
}