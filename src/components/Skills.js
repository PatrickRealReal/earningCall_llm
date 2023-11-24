import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import {Column} from '@ant-design/charts';
import {Col, Row, Table} from "react-bootstrap";


const DemoPie = () => {
    const data = [
        {
            type: 'Calls',
            value: 7058,
        },
        {
            type: 'Companies',
            value: 1058,
        },
        {
            type: 'Sentences per transcript',
            value: 430.7,
        },
        {
            type: 'Max sentences per transcript',
            value: 1650,
        },
        {
            type: 'Words per transcript',
            value: 8277.8,
        },
    ];
    let allVal = 0
    data.forEach(it => {
        allVal += it.value
    })
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: `<div style="color:#fff;font-size: 20px">Num\n${allVal}</div>>`,
            },
        },
    };
    // return <Pie {...config} />;
    return (
        <Table striped="columns" bordered={false} variant={'dark'} borderless={false}>
            <thead>
            <tr>
                <th>Calls</th>
                <th>7,058</th>

            </tr>
            <tr>
                <th>Companies</th>
                <th>1,058</th>
            </tr>
            <tr>
                <th>Sentences per transcript</th>
                <th>430.7</th>
            </tr>
            <tr>
                <th>Max sentences per transcript</th>
                <th>1,650</th>
            </tr>
            <tr>
                <th>Words per transcript</th>
                <th>8,277.8</th>
            </tr>
            <tr>
                <th>Max words per transcript</th>
                <th>32,563</th>
            </tr>
            </thead>

        </Table>

    )
};

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    const distributionData = [
        {action: 'Acquisition', type: 'Yes', value: 23.79},
        {action: 'Acquisition', type: 'No', value: 76.21},
        {action: 'SEO', type: 'Yes', value: 16.2},
        {action: 'SEO', type: 'No', value: 83.8},
        {action: 'CBI', type: 'Yes', value: 30.6},
        {action: 'CBI', type: 'No', value: 69.4}
    ];

    const distributionConfig = {
        data: distributionData,
        xField: 'action',
        yField: 'value',
        seriesField: 'type',
        isPercent: true,
        isStack: true,
        legend: {
            position: 'top-left',
            style:{
                fontSize: '20px'
            }
        }
    };

    return (
        <section className="skill" id="data">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Dataset</h2>
                            <p>Dataset statistics (left) and label distribution for each event (right).</p>
                            <Row>
                                <Col span={12}>
                                    <div className="item" style={{marginTop:'60px'}}>

                                    {/*<img className="zoomable-image" src={Dataset} alt="Image"/>*/}
                                        <DemoPie/>

                                        <h5>Dataset</h5>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="item">
                                        <Column {...distributionConfig} />
                                        <h5 style={{marginTop: '20px'}}>Distribution</h5>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image"/>
        </section>
    )
}
