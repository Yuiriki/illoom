import React from 'react';

const Section2Component = () => {
    return (
        <section id="section2">
        <div className="container">
            <div className="gap">
                <div className="wrap">
                    <div className="title">
                        <h2>고객님을 위한 제품추천</h2>
                    </div>
                    <div className="content">
                        <input type="radio" id="front" name="face" defaultChecked/>
                        <label htmlFor="front">링키플러스</label>
                        <input type="radio" id="back" name="face" />
                        <label htmlFor="back">쿠시노 침대</label>
                        <input type="radio" id="left" name="face" />
                        <label htmlFor="left">코모 등받이 쿠션</label>
                        <input type="radio" id="right" name="face"/>
                        <label htmlFor="right">로이 모노</label>
                        <input type="radio" id="top" name="face"/>
                        <label htmlFor="top">보노 S02(Q)</label>
                        <input type="radio" id="bottom" name="face"/>
                        <label htmlFor="bottom">아쿠아클린 패브릭 모듈 소파</label>

                        <div className="cube">
                            <a href="#!" className="face front"></a>
                            <a href="#!" className="face back"></a>
                            <a href="#!" className="face left"></a>
                            <a href="#!" className="face right"></a>
                            <a href="#!" className="face top"></a>
                            <a href="#!" className="face bottom"></a>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
        
    </section>
    );
};

export default Section2Component;