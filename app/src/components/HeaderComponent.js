import React from 'react';

const HeaderComponent = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                    <div className="wrap">
                        <nav id="nav">
                        <ul>
                            <li><a href="#!" className="menu-btn" title="메뉴"><img src="./image/icon_menu_30px.svg" alt=""/></a></li>
                            <li ><a href="#!" title="침실" className="main-btn">침실</a>
                                <ul className="sub-menu">
                                    <li><a href="#!" title="침대">침대</a></li>
                                    <li><a href="#!" title="매트리스">매트리스</a></li>
                                    <li><a href="#!" title="옷장">옷장</a></li>
                                    <li><a href="#!" title="수납장">수납장</a></li>
                                    <li><a href="#!" title="화장대">화장대</a></li>
                                </ul>
                            </li>
                            <li ><a href="#!"  title="거실" className="main-btn">거실</a>
                                <ul className="sub-menu">
                                    <li><a href="#!" title="테이블">테이블</a></li>
                                    <li><a href="#!" title="거실장">거실장</a></li>
                                    <li><a href="#!" title="소파">소파</a></li>
                                    <li><a href="#!" title="수납장">수납장</a></li>
                                    <li><a href="#!" title="액세서리">액세서리</a></li>
                                </ul>
                            </li>
                            <li ><a href="#!"  title="주방" className="main-btn">주방</a>
                                <ul className="sub-menu"> 
                                    <li><a href="#!" title="식탁">식탁</a></li>
                                    <li><a href="#!" title="수납장">수납장</a></li>
                                    <li><a href="#!" title="의자">의자</a></li>
                                    
                                </ul>
                            </li>
                            <li ><a href="#!"  title="키즈룸" className="main-btn">키즈룸</a>  
                                <ul className="sub-menu">
                                    <li><a href="#!" title="침대">침대</a></li>
                                    <li><a href="#!" title="책상">책상</a></li>
                                    <li><a href="#!" title="수납장">수납장</a></li>
                                    <li><a href="#!" title="소파/의자">소파/의자</a></li>
                                    <li><a href="#!" title="액세서리">액세서리</a></li>
                                </ul>
                            </li>
                            <li ><a href="#!"  title="학생방" className="main-btn">학생방</a>
                                <ul className="sub-menu">
                                    <li><a href="#!" title="책상">책상</a></li>
                                    <li><a href="#!" title="책장">책장</a></li>
                                    <li><a href="#!" title="수납장">수납장</a></li>
                                    <li><a href="#!" title="의자">의자</a></li>
                                    <li><a href="#!" title="침대">침대</a></li>
                                </ul>
                            </li>
                            <li ><a href="#!"  title="서재" className="main-btn">서재</a>
                                <ul className="sub-menu">
                                    <li><a href="#!" title="책상">책상</a></li>
                                    <li><a href="#!" title="책장">책장</a></li>
                                    <li><a href="#!" title="서랍장">서랍장</a></li>
                                    <li><a href="#!" title="의자">의자</a></li>
                                    <li><a href="#!" title="수납장">수납장</a></li>
                                </ul>
                            </li>
                            <li ><a href="#!"  title="펫" className="main-btn">펫</a>
                                <ul className="sub-menu">
                                    <li><a href="#!" title="가구">가구</a></li>                                
                                </ul>
                            </li>
                            <li ><a href="#!"  title="시리즈" className="main-btn">시리즈</a></li>
                            <li ><a href="#!"  title="아울렛" className="main-btn">아울렛</a>
                                <ul className="sub-menu">
                                    <li><a href="#!" title="침실">침실</a></li>
                                    <li><a href="#!" title="거실">거실</a></li>
                                    <li><a href="#!" title="주방">주방</a></li>
                                    <li><a href="#!" title="키즈룸">키즈룸</a></li>
                                    <li><a href="#!" title="학생방">학생방</a></li>
                                </ul>
                            </li>
                        </ul>
                        </nav>
                        <div className="logo">
                            <div className="logo-gap">
                                <a href="./index.html" title="logo"><img src="./image/gnb_logo.png" alt="logo"/></a>
                            </div>
                        </div>
                        <div className="item">
                            <ul>
                                <li><a href="#!" title="로그인">로그인</a></li>
                                <li><a href="#!" title="회원가입">회원가입</a></li>
                                <li><a href="#!" title="주문/배송">주문/배송</a></li>
                                <li><a href="#!" title="고객지원">고객지원</a></li>
                                <li><a href="#!" title="매장안내">매장안내</a></li>
                                <li><a href="#!"><img src="./image/icon_search_30px.svg" alt=""/></a></li>
                                <li><a href="#!"><img src="./image/icon_cart_30px.svg" alt=""/></a></li>
                            </ul>
                        </div>
                    </div>
                    
                
            </div>
            </div>
                        
        </header>
    );
};

export default HeaderComponent;