import React from 'react';

const AsideBoxComponent = () => {
    return (
        <div id="asideBox">
            <div className="container">
                <ul>
                    <li><a href="#!" title="챗봇">챗봇</a></li>
                    <li><a href="#!" title="리뷰">리뷰</a></li>
                    <li>
                        <div className="recent-box">
                            <span className="recentChk"></span>
                            <p>최근본상품 (0)</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AsideBoxComponent;