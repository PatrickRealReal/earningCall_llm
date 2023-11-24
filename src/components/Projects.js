import { Col, Container, Row, Form, Card } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ml_model from "../assets/img/performance_ml_model.png";
import { Column } from "@ant-design/charts";
import { useState } from "react";

// todo：加一个滚轮，使得可以看到好几个图表
// 解决好另外的文字展示问题
const DemoBox1 = () => {
    const modelLabels = ["Random baseline", "T5", "UL2", "FLAN-T5", "FLANUL2", "FLAN-Alpaca", "FLAN-T5+", 'FLAN-UL2+', 'FLAN-Alpaca+'];

    const data = [
        {
            name: 'Group 1',
            model: 'Random baseline',
            num: 0.54
        },
        {
            name: 'Group 2',
            model: 'T5',
            num: 0.00
        },
        {
            name: 'Group 2',
            model: 'UL2',
            num: 0.00
        },
        {
            name: 'Group 3',
            model: 'FLAN-T5',
            num: 0.70
        },
        {
            name: 'Group 3',
            model: 'FLAN-UL2',
            num: 0.69
        },
        {
            name: 'Group 3',
            model: 'FLAN-Alpaca',
            num: 0.69
        },
        {
            name: 'Group 4',
            model: 'FLAN-T5+',
            num: 0.67
        },
        {
            name: 'Group 4',
            model: 'FLAN-UL2+',
            num: 0.70
        },
        {
            name: 'Group 4',
            model: 'FLAN-Alpaca+',
            num: 0.63
        },

    ];
    const config = {
        data,
        isGroup: true,
        xField: 'name',
        yField: 'num',
        seriesField: 'model',
        yAxis: {
            min: 0,
            max: 1,
        },

        /** 设置颜色 */
        //color: ['#1ca9e6', '#f88c24'],

        /** 设置间距 */
        // marginRatio: 0.1,
        label: {
            // 可手动配置 label 数据标签位置
            position: 'top',
            // 'top', 'middle', 'bottom'
            // 可配置附加的布局方法
            layout: [
                // 柱形图数据标签位置自动调整
                {
                    type: 'interval-adjust-position',
                }, // 数据标签防遮挡
                {
                    type: 'interval-hide-overlap',
                }, // 数据标签文颜色自动调整
                {
                    type: 'adjust-color',
                },
            ],
        },
    };
    return <Column {...config}/>
}
// SEO
const DemoBox2 = () => {
    const modelLabels = ["Random baseline", "T5", "UL2", "FLAN-T5", "FLANUL2", "FLAN-Alpaca", "FLAN-T5+", 'FLAN-UL2+', 'FLAN-Alpaca+'];

    const data = [
        {
            name: 'Group 1',
            model: 'Random baseline',
            num: 0.52
        },
        {
            name: 'Group 2',
            model: 'T5',
            num: 0.00
        },
        {
            name: 'Group 2',
            model: 'UL2',
            num: 0.00
        },
        {
            name: 'Group 3',
            model: 'FLAN-T5',
            num: 0.79
        },
        {
            name: 'Group 3',
            model: 'FLAN-UL2',
            num: 0.78
        },
        {
            name: 'Group 3',
            model: 'FLAN-Alpaca',
            num: 0.78
        },
        {
            name: 'Group 4',
            model: 'FLAN-T5+',
            num: 0.79
        },
        {
            name: 'Group 4',
            model: 'FLAN-UL2+',
            num: 0.78
        },
        {
            name: 'Group 4',
            model: 'FLAN-Alpaca+',
            num: 0.85
        },

    ];
    const config = {
        data,
        isGroup: true,
        xField: 'name',
        yField: 'num',
        seriesField: 'model',
        yAxis: {
            min: 0,
            max: 1,
        },


        /** 设置颜色 */
        //color: ['#1ca9e6', '#f88c24'],

        /** 设置间距 */
        // marginRatio: 0.1,
        label: {
            // 可手动配置 label 数据标签位置
            position: 'top',
            // 'top', 'middle', 'bottom'
            // 可配置附加的布局方法
            layout: [
                // 柱形图数据标签位置自动调整
                {
                    type: 'interval-adjust-position',
                }, // 数据标签防遮挡
                {
                    type: 'interval-hide-overlap',
                }, // 数据标签文颜色自动调整
                {
                    type: 'adjust-color',
                },
            ],
        },
    };
    return <Column {...config}/>
}

const DemoBox3 = () => {
    const modelLabels = ["Random baseline", "T5", "UL2", "FLAN-T5", "FLANUL2", "FLAN-Alpaca", "FLAN-T5+", 'FLAN-UL2+', 'FLAN-Alpaca+'];

    const data = [
        {
            name: 'Group 1',
            model: 'Random baseline',
            num: 0.52
        },
        {
            name: 'Group 2',
            model: 'T5',
            num: 0.00
        },
        {
            name: 'Group 2',
            model: 'UL2',
            num: 0.00
        },
        {
            name: 'Group 3',
            model: 'FLAN-T5',
            num: 0.60
        },
        {
            name: 'Group 3',
            model: 'FLAN-UL2',
            num: 0.60
        },
        {
            name: 'Group 3',
            model: 'FLAN-Alpaca',
            num: 0.60
        },
        {
            name: 'Group 4',
            model: 'FLAN-T5+',
            num: 0.61
        },
        {
            name: 'Group 4',
            model: 'FLAN-UL2+',
            num: 0.60
        },
        {
            name: 'Group 4',
            model: 'FLAN-Alpaca+',
            num: 0.58
        },

    ];
    const config = {
        data,
        isGroup: true,
        xField: 'name',
        yField: 'num',
        seriesField: 'model',
        yAxis: {
            min: 0,
            max: 1,
        },


        /** 设置颜色 */
        //color: ['#1ca9e6', '#f88c24'],

        /** 设置间距 */
        // marginRatio: 0.1,
        label: {
            // 可手动配置 label 数据标签位置
            position: 'top',
            // 'top', 'middle', 'bottom'
            // 可配置附加的布局方法
            layout: [
                // 柱形图数据标签位置自动调整
                {
                    type: 'interval-adjust-position',
                }, // 数据标签防遮挡
                {
                    type: 'interval-hide-overlap',
                }, // 数据标签文颜色自动调整
                {
                    type: 'adjust-color',
                },
            ],
        },
    };
    return <Column {...config}/>
}

const TranscriptCard = ({ isCorrect }) => {
    const cardTitle = "Read the summary of the an earning call transcript and answer the question.";
    const cardBody = (
        <>
            <p><strong>QUESTION:</strong> Will Nike acquire other companies within the next three months after the earning call?</p>
            <p><strong>OPTIONS:</strong></p>
            <ol>
                <li>Yes.</li>
                <li>No.</li>
            </ol>
            <p><strong>ANSWER:</strong></p>
            <p>transcript transcript transcript transcript transcript transcript transcript transcript transcript</p>
        </>
    );

    const footerIcon = isCorrect ? (
        <span className="text-success">&#10003; Correct</span> // This can be replaced with an icon or image
    ) : (
        <span className="text-danger">&#10007; Incorrect</span> // This can be replaced with an icon or image
    );

    return (
        <Card style={{ backgroundColor: '#000', color: '#fff', border: '1px solid #fff' }}> {/* Added border style here */}
            <Card.Header style={{ backgroundColor: '#000', color: '#fff' }}>{cardTitle}</Card.Header>
            <Card.Body style={{ border: '1px solid #fff' }}>{cardBody}</Card.Body>
            <Card.Footer className="text-muted" style={{ backgroundColor: '#000', color: '#fff', borderTop: '1px solid #fff' }}>
                {footerIcon}
            </Card.Footer>
        </Card>
    );
};

export const Projects = () => {

    const [selectedValue, setSelectedValue] = useState('Acquisition');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }

    const renderSelectedBox = () => {
        switch (selectedValue) {
            case 'Acquisition':
                return <DemoBox1 />;
            case 'SEO':
                return <DemoBox2 />;
            case 'CBI':
                return <DemoBox3 />;
            default:
                return null;
        }
    };


    const projects = [{
        imgUrl: ml_model,
    }];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Experiment</h2>
                        <p>Performance(F1-score) of different machine learning models.</p>
                        <Form.Select value={selectedValue} onChange={handleChange} style={{ width: '250px', margin: '0px 0 20px' }} aria-label="Model select">
                            <option value="Acquisition">Acquisition</option>
                            <option value="SEO">Seasoned Equity Offering</option>
                            <option value="CBI">Corporate Bond Issuance</option>
                        </Form.Select>
                        <Row className="charts-row">
                            <Col span={8} className="project-image-col">
                                {renderSelectedBox()}
                            </Col>
                        </Row>
                        {/* Add some space after the chart */}
                        <div style={{ margin: '20px 0' }}></div>
                        {/* Subtitle Row */}
                        <Row>
                            <Col size={12}>
                                <h4 className="text-center" style={{ marginBottom: '20px' }}>Outputs of raw UL2 and FLAN-UL2.</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col size={12}>
                    <TranscriptCard isCorrect={false} />
                </Col>
                <Col size={12}>
                    <TranscriptCard isCorrect={true} />
                </Col>
            </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}