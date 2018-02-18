import React, {Component} from "react";
import FontAwesome from "react-fontawesome";

export default class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <div className="wrapper">
          {
            this.props.data.map((data, index) => {
              return (
                <div key={index} className="timeline-item">
                  <FontAwesome name={this.props.icon} className="timeline-img"/>
                  <div className="timeline-content timeline-card">
                    <div className="timeline-img-header" style={{"background": data.image}}>
                      <h2>{data.title}</h2>
                    </div>
                    <div className="date start-date">{data.startDate}</div>
                    <div className="date end-date">{data.endDate}</div>
                    {
                      data.descriptionHighlight && (
                        <p><strong><i>{data.descriptionHighlight}</i></strong></p>
                      )
                    }
                    <p>{data.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
