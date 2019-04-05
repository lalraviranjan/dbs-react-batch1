import React, { Component } from 'react';

class Review extends Component {
    renderStars(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(<i style={{ color: 'red', fontSize: '20px' }} className="fa fa-star" key={i}></i>)
        }
        return arr;
    }
    render() {
        let { value: review } = this.props;
        let { stars, author, body } = review;
        return (
            <div>
                <div className="alert alert-info">
                    {this.renderStars(stars)} &mdash; {author}
                    <hr />
                    <div>{body}</div>
                </div>
            </div>
        );
    }
}

export default Review;