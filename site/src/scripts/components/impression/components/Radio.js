import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * Radio组件.
 */
export default class Radio extends PureComponent {
    // props校验
    static propTypes = {
        // 名称
        name: PropTypes.any,
        // 返回值
        value: PropTypes.any,
        // 自定义样式
        className: PropTypes.string,
        // 是否选中
        checked: PropTypes.bool,
        // 默认是否选中
        defaultChecked: PropTypes.bool,
        // 是否disabled
        disabled: PropTypes.bool,
        // 回调函数
        onChange: PropTypes.func,
        children: PropTypes.any,
    }
    // 默认props
    static defaultProps = {
        disabled: false,
    }
    // 渲染
    render() {
        let {
            value,
            checked,
            defaultChecked,
            disabled,
            className,
            name,
            onChange,
            children,
            ...others,
            } = this.props;

        return(
            <label
                {...others}
                className={classnames('radio', className)}
                htmlFor={`radio${this._reactInternalInstance._mountOrder}`}>
                <input
                    ref="main"
                    type="radio"
                    name={name}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    onChange={event => onChange && onChange(event, value)}
                    id={`radio${this._reactInternalInstance._mountOrder}`} />
                <div className="radio-addon">
                    <i />
                </div>
                <span className="radio-label">{children}</span>
            </label>
        );
    }
}

// 获取checkbox是否选中
Radio.getValue = ref => {
    let { value } = ref.props,
        { main } = ref.refs;

    if(!ref) {
        return undefined;
    }

    if(value === undefined) {
        return main.checked;
    }

    return value;
};
