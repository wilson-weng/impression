import React, { Component } from 'react';
import { Card, Row, Col, Button, Message, Icon, Breadcrumb } from '../components/impression';
import { CommenTable, Highlight } from '../components';

export default class MessageView extends Component{
    showInfoMessageHandle(){
        Message.info('你好，这是一条info消息！');
    }
    showSuccessMessageHandle(){
        Message.success('你好，这是一条success消息！');
    }
    showWarningMessageHandle(){
        Message.warning('你好，这是一条warning消息！');
    }
    showErrorMessageHandle(){
        Message.error('你好，这是一条error消息！');
    }
    showLoadingMessageHandle(){
        Message.loading('正在执行中...', 0);

        //5秒后关闭
        setTimeout(() => {
            Message.hideMessage();
        }, 5000);
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes.slice(1)}/>
                <Card block noborder>
                    <h5>Example</h5>
                    <Card>
                        <Card.Block>
                            <Row>
                                <Col>
                                    <Button theme="primary" outline onClick={this.showInfoMessageHandle}>
                                        信息
                                    </Button>
                                </Col>
                                <Col>
                                    <Button theme="default" onClick={this.showSuccessMessageHandle}>
                                        <span className="text-success">成功</span>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button theme="secondary" outline onClick={this.showWarningMessageHandle}>
                                        警告
                                    </Button>
                                </Col>
                                <Col>
                                   <Button theme="default" onClick={this.showErrorMessageHandle}>
                                        <span className="text-danger">错误</span>
                                   </Button>
                                </Col>
                                <Col>
                                   <Button theme="primary" outline onClick={this.showLoadingMessageHandle}>
                                        <Icon type="spinner" left/>Loading
                                   </Button>
                                </Col>
                            </Row>
                        </Card.Block>
                        <Highlight>
                            {`import { Message } from 'impression-react';\n\nMessage.info('你好，这是一条info消息！');\nMessage.success('你好，这是一条success消息！');\nMessage.warning('你好，这是一条warning消息！');\nMessage.error('你好，这是一条error消息！');\nMessage.loading('正在执行中...', 0);`}
                        </Highlight>
                    </Card>
                    <Message/>
                    <h5>API</h5>
                    <ul>
                        <li><code>Message.info(message, duration)</code></li>
                        <li><code>Message.success(message, duration)</code></li>
                        <li><code>Message.warning(message, duration)</code></li>
                        <li><code>Message.error(message, duration)</code></li>
                        <li><code>Message.loading(message)</code></li>
                        <li><code>Message.hideMessage()</code></li>
                    </ul>
                    <CommenTable
                        data = {[
                            ['message', '提示内容', 'string', ''],
                            ['duration', '停留时间（ms）', 'number', '2000'],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

MessageView.title = 'Message';
