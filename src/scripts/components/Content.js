import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


/**
 * 主内容区 组件.
 */
export default class Content extends Component {
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //动画名称
        transitionName: PropTypes.string,
        //进入动画时间
        transitionEnterTimeout: PropTypes.number,
        //退出动画时间
        transitionLeaveTimeout: PropTypes.number,
        //包裹元素
        component: PropTypes.string,
        //子元素为单一节点
        children: PropTypes.element.isRequired,

    }
    //默认props
    static defaultProps = {
        transitionName: 'zoom',
        component: 'div',
        transitionEnterTimeout: 1200,
        transitionLeaveTimeout: 1200,
    }
    render() {
        let { transitionName, transitionEnterTimeout, transitionLeaveTimeout, component, className, children } = this.props;
        children && (children = React.cloneElement(children, {
            key: children.props.location.pathname
        }));

        return (
            <div className={classnames('content', className)}>
                <ReactCSSTransitionGroup
                    component={component}
                    transitionName={transitionName}
                    transitionEnterTimeout={transitionEnterTimeout}
                    transitionLeaveTimeout={transitionLeaveTimeout}>
                    {children}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}