import React from 'react'
import { Checkbox, Row, Col, Icon } from 'antd'

export default class TimeCreate extends React.Component {
  static defaultProps = {
    grid: [
      // 日程数据
      {
        date: '2018-09-01',
        week_day: '星期一',
        periods: [
          // 含当天所有时段
          {
            time_from: '08:00', // 开始时间

            time_to: '09:00', // 截止时间

            checked: true // 是否可上课
          },

          {
            time_from: '09:00', // 开始时间

            time_to: '10:00', // 截止时间

            checked: false // 是否可上课
          }
        ]
      },
      {
        date: '2018-09-02',
        week_day: '星期一',
        periods: [
          // 含当天所有时段
          {
            time_from: '08:00', // 开始时间

            time_to: '09:00', // 截止时间

            checked: true // 是否可上课
          },

          {
            time_from: '09:00', // 开始时间

            time_to: '10:00', // 截止时间

            checked: false // 是否可上课
          }
        ]
      }
    ]
  }
  onCellClick = event => {
    const { grid } = this.props
    const {
      target: { dataset }
    } = event
    let { period, dateIndex, periodIndex } = dataset
    let currentPeriod = grid[(dateIndex, periodIndex)]
    currentPeriod.checked = !currentPeriod.checked
  }
  render () {
    const { grid } = this.props
    const timePeriods = grid[0]['periods']
    return (
      <div>
        <Row className="grid-head">
          <Col span={3}>
            <Icon type="left-square" theme="outlined" />
          </Col>
          {grid.map((item, index) => {
            const { date, week_day: weekDay } = item
            return (
              <Col span={3} key={`grid-head-${index}`}>
                <Checkbox> {`${date.slice(-5)} ${weekDay}`}</Checkbox>
                {index === grid.length - 1 && (
                  <Icon type="right-square" theme="outlined" />
                )}
              </Col>
            )
          })}
        </Row>
        <Row className="grid-body">
          <Col span={3}>
            {timePeriods.map((item, index) => {
              return (
                <div style={{ height: 45 }} key={`time-period-${index}`}>
                  {item.time_from}
                </div>
              )
            })}
          </Col>
          {grid.map((item, dateIndex) => {
            const { date, periods } = item
            return (
              <Col span={3} key={`grid-col-${date}`} onClick={this.onCellClick}>
                {periods.map((period, periodIndex) => {
                  const { checked } = period
                  return (
                    <div
                      key={`${date}-${periodIndex}`}
                      data-period={JSON.stringify({ ...period, date })}
                      data-date-index={dateIndex}
                      data-period-index={periodIndex}
                      style={{
                        background: checked ? '#0CC499' : '#fff',
                        height: 45,
                        border: '1px solid #E5E5E5'
                      }}
                    >
                      {period.time_from}
                    </div>
                  )
                })}
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}
