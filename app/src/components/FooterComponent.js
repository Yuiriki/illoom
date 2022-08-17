import React from 'react';

const FooterComponent = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="gap">
                    <div className="wrap">
                        <div className="top">
                            <div className="left">
                                <a href="./index.html"><img src="./image/footer_logo.png" alt=""/></a>
                            </div>
                            <div className="center">
                                <ul>
                                    <li>
                                        <h2>ABOUT</h2>
                                        <a href="#!" title="회사소개"><h3>회사소개</h3></a>
                                        <a href="#!" title="매장안내"><h3>매장안내</h3></a>
                                        <a href="#!" title="인재채용"><h3>인재채용</h3></a>
                                    </li>
                                    <li>
                                        <h2>SUPPORT</h2>
                                        <a href="#!" title="고객지원"><h3>고객지원</h3></a>
                                        <a href="#!" title="서비스센터"><h3>서비스센터</h3></a>
                                        <a href="#!" title="대리점 개설안내"><h3>대리점 개설안내</h3></a>
                                    </li>
                                    <li>
                                        <h2>INFO</h2>
                                        <a href="#!" title="이용약관"><h3>이용약관</h3></a>
                                        <a href="#!" title="개인정보 처리방침"><h4>개인정보 처리방침</h4></a>                                       
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <p>빠른 상담문의</p>
                                        <a href="#!" title="챗봇상담">챗봇상담</a>
                                    </li>
                                    <li>
                                        <p>서비스 문의 및 신청</p>
                                        <a href="#!" title="일룸 서비스센터 바로가기">일룸 서비스센터 바로가기</a>
                                    </li>
                                    <li>
                                        <p>고객센터 전화문의</p>
                                        <span>
                                            <h5>1577-5670</h5>
                                            <h6>평일<p>9:30 ~ 17:30</p>(점심시간 12:30 ~ 13:30)</h6>
                                            <h6>토요일<p>9:30 ~ 12:30</p>(쇼핑몰 구매상담 제외)</h6>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <a href="#!"><img src="./image/footer_i.png" alt=""/></a>
                                <a href="#!"><img src="./image/footer_f.png" alt=""/></a>
                                <a href="#!"><img src="./image/footer_b.png" alt=""/></a>
                            </div>
                            <div className="center">
                                <ul>
                                    <li>서울시 송파구 오금로 311 (오금동45-1) (주)일룸 ·대표이사 강성문</li>
                                    <li>개인정보보호 책임자 : 강성문</li>
                                    <li>사업자등록번호 : 215-86-93600·통신판매업신고 : 2009-서울송파-0069호·부가통신사업신고필증 : 021129</li>
                                    <li>호스팅 서비스사업자 · (주)일룸</li>
                                    <li>webmaster@iloom.com·Copyright (c) 2018 iloom lnc. All rights reserved</li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li><a href="#!"><img src="./image/mark_1.png" alt=""/></a></li>
                                    <li><a href="#!"><img src="./image/mark_2.png" alt=""/></a></li>
                                    <li><a href="#!"><img src="./image/spc_iloom.png" alt=""/></a></li>
                                    <li><a href="#!"><img src="./image/isms_iloom_bw.png" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;