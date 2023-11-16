import {Col, Container, Row} from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ml_model from "../assets/img/performance_ml_model.png";
import {Column} from "@ant-design/charts";

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

export const Projects = () => {

    const CardBoxs = () => {
        return (
            <Row>
                <Col size={12}>
                    <div className={'card-box'}>
                        Read the summary of the an
                        earning call transcript and answer
                        the question.
                        {'<'} SUMMARY OF TRANSCRIPT>
                        QUESTION: Will Nike acquire
                        other companies within the next
                        three months after the earning call?
                        OPTIONS:
                        1. Yes.
                        2. No.
                        ANSWER:
                        transcript transcript transcript
                        transcript transcript transcript
                        transcript transcript transcript
                        transcript transcript transcript
                    </div>
                </Col>
                <Col size={12}>
                    <div className={'card-box'}>
                        Read the summary of the an
                        earning call transcript and answer
                        the question.
                        {'<'}SUMMARY OF TRANSCRIPT>
                        QUESTION: Will Nike acquire
                        other companies within the next
                        three months after the earning call?
                        OPTIONS:
                        1. Yes.
                        2. No.
                        ANSWER:
                        1. Yes.
                    </div>
                </Col>
            </Row>
        )
    }

    const projects = [{
        imgUrl: ml_model,
    }];

    return (<section className="project" id="projects">
        <Container>
        <Row>
    <Col size={12}>
        <h2>Experiment</h2>
        <p>Performance of different machine learning models, where the results are av- eraged over 5-fold cross-validation.</p>

        {/* 横向滚动的行 */}
        <Row className="charts-row">
            <Col span={8} className="project-image-col">
                <DemoBox1/>
                <h5 style={{marginTop: '20px', textAlign: 'center'}}>Acquisition</h5>
            </Col>
            <Col span={8} className="project-image-col">
                <DemoBox2/>
                <h5 style={{marginTop: '20px', textAlign: 'center'}}>Seasoned Equity Offering</h5>
            </Col>
            <Col span={8} className="project-image-col">
                <DemoBox3/>
                <h5 style={{marginTop: '20px', textAlign: 'center'}}>Corporate Bond Issuance</h5>
            </Col>
        </Row>
    </Col>
</Row>

            <CardBoxs/>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
    </section>)
}
