(function($){

    class illoom{
      init(){
        this.header();
        this.section1();
        this.section6();
        this.footer();
        this.asideBox();
        this.menuModal();


    }
    header(){

        $('#nav').on({
            mouseleave:function(){
                $('.main-btn a').stop().next().fadeOut(300);
            },
            focusout:function(){
                $('.main-btn a').stop().next().fadeOut(300);
            }
        });
        $('.main-btn').on({
            mouseenter:function(){
                $(this).stop().next().fadeIn(300);
            },
            mouseleave:function(){
                $(this).stop().next().fadeOut(300);
            },
            focusin:function(){
                $(this).stop().next().fadeIn(300);
            },
            focusout:function(){
                $(this).stop().next().fadeOut(300);
            }
           
        });
        $('.sub-menu').on({
            mouseenter:function(){
                $(this).stop().fadeIn(300);
            },
            mouseleave:function(){
                $(this).stop().fadeOut(300);
            },
            focusin:function(){
                $(this).stop().fadeIn(300);
            }
           
        });
        $('.close-button').on({
            click:function(){
                $('#menuModal').fadeOut(300);
                $('.modal-sub1').stop().fadeIn(0);
                $('.modal-sub2').stop().fadeIn(0);
                $('.modal-sub3').stop().fadeIn(0);
                $('.modal-sub4').stop().fadeIn(0);
                $('.modal-sub5').stop().fadeIn(0);
                $('.modal-sub6').stop().fadeIn(0);
                $('.modal-sub7').stop().fadeIn(0);
            }
        });
        $('.menu-btn').on({
            click:function(e){
                $('#menuModal').fadeIn(300);
                e.preventDefault();
            }
        });
    }
    

    section1(){
        let cnt=0;
        let setId;        
        let setId2=0;
        let start=null;
        let end=null;
        let result='';
        let dragStart=null;
        let dragEnd=null;
        let mouseDown=false; 
        let winW=$(window).width();
            
            $(window).resize(function(){
                winW=$(window).width();
                mainSlide();
                return winW;
             });

          function mainSlide(){
            $('#section1 .slide-wrap').stop().animate({left:`${-100*cnt}%`},1000,function(){
                cnt>7?cnt=0:cnt;
                cnt<0?cnt=7:cnt;
                $('#section1 .slide-wrap').stop().animate({left:`${-100*cnt}%`},0);
            })
             
          }
       


          function nextCount(){
            cnt++; 
            cnt>7?cnt=0:cnt;  
            mainSlide();
          }
          function prevCount(){
            cnt--; 
            cnt<0?cnt=7:cnt;  
            mainSlide();
          }

          function autoTimer(){
           setId = setInterval(nextCount, 5000);
          }
          autoTimer();
          function timerfn(){
            let tCnt=0;
            clearInterval(setId);
            clearInterval(setId2);
            setId2=setInterval(function(){
                tCnt++;
                if(tCnt>=5){
                    
                    clearInterval(setId);
                    clearInterval(setId2);
                    autoTimer();
                }
            },1000);
            
        }

          $('.next-btn').on({
            click:function(){
                if(!$('.slide').is(':animated')){
                    nextCount();
                    clearInterval(setId);
                }
                
            }
          });
          $('.prev-btn').on({
           click:function(){
                if(!$('.slide').is(':animated')){
                    prevCount();
                    clearInterval(setId);
                }
                
            }

            
          });
          $('.slide-container').on({
            mousedown:function(e){
                timerfn();
                start = e.clientX;
                
                dragStart=e.clientX-$('.slide-wrap').offset().left-winW;                
                mouseDown=true;
            },
            mouseup:function(e){
                
                end = e.clientX;
                result= start-end > 0 ? "NEXT":"PREV";                
                
                if(Math.abs(start-end)>30){                    
                
                    if(result==='NEXT'){
                        if(!$('.slide-wrap').is(':animated')){
                            nextCount();
                        }
                    }if(result==='PREV'){
                        if(!$('.slide-wrap').is(':animated')){
                            prevCount();
                        }
                    }
                }
                mouseDown=false;
            },
            mousemove:function(e){
                if(mouseDown===false){
                    return;
                }
                dragEnd=e.clientX;
                $('.slide-wrap').css({left:dragEnd-dragStart});
                
            },
            mouseleave:function(e){
                if(mouseDown===false){
                    return;
                }
                end = e.clientX;
                result= start-end >0 ? "NEXT":"PREV";
                
                if(result==='NEXT'){
                    nextCount();
                    
                }else{
                    prevCount();
                    
                }
                mouseDown=false;
               
            }
           });

           $('.slide-container').on({
            touchstart:function(e){
                timerfn();
                start = e.originalEvent.changedTouches[0].clientX;                        
                dragStart =  e.originalEvent.changedTouches[0].clientX-$('.slide-wrap').offset().left-winW;  //반드시 초기값 0셋팅
                mouseDown = true;
                
            },
            touchend:function(e){
                end = e.originalEvent.changedTouches[0].clientX;  
                result = start-end > 0 ? 'NEXT' : 'PREV';
                if(result==='NEXT'){
                  if(!$('.slide-wrap').is(':animated')){
                    nextCount(); 
                  }                  
                }
                if(result==='PREV'){
                  if(!$('.slide-wrap').is(':animated')){
                    prevCount();
                  }
                }
               
                mouseDown = false;
            },
            touchmove: function(e){ 
                if(mouseDown===false){
                    return;
                }
                dragEnd = e.originalEvent.changedTouches[0].clientX;
                $('.slide-wrap').css({left: dragEnd-dragStart }); 
            }



           });
    }
    
    section6(){
        const sec6Top=$('#section6').offset().top-$(window).height();
            $(window).scroll(function(){
                if($(window).scrollTop()>sec6Top){
                $('#section6').addClass('sec6Ani');
                return;

                
                }
                if($(window).scrollTop()===0){
                    $('#section6').removeClass('sec6Ani');
                    return;
                }
            });
            $('.rotate').on({
                mouseenter:function(){
                    $(this).addClass('on');
                },
                focusin:function(){
                    $(this).addClass('on');
                },
                mouseleave:function(){
                    $(this).removeClass('on');
                },
                focusout:function(){
                    $(this).removeClass('on');
                }
            });
    }

    footer(){

    }

    asideBox(){
        $('.recentChk').on({
            click:function(){                
                $(this).toggleClass('on');
            }
        });

        let asideTop=($(window).height()-$('#asideBox').height())/2;
        console.log($('#asideBox').height());

        $(window).scroll(function(){
            $('#asideBox').stop().animate({top:asideTop+$(window).scrollTop()+250},600,'easeInOutExpo');
            
        });
            
    }
    menuModal(){
        console.log($(window).width())
        let winW=$(window).width();
        $(window).resize(function(){
            winW=$(window).width();
            modalMenu();            
            return winW;
            
         });
         modalMenu();
         function modalMenu(){
            if(winW<=1630){
                $('.modal-main1').on({
                    click:function(){
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub1').stop().fadeIn(300);
                    },
                    focusin:function(){
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub1').stop().fadeIn(300);
                    }
                });
                $('.modal-main2').on({
                    click:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub2').stop().fadeIn(300);
                    },
                    focusin:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub2').stop().fadeIn(300);
                    }
                });
                $('.modal-main3').on({
                    click:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeIn(300);
                    },
                    focusin:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeIn(300);
                    }
                });
                $('.modal-main4').on({
                    click:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeIn(300);
                    },
                    focusin:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeIn(300);
                    }
                });
                $('.modal-main5').on({
                    click:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeIn(300);
                    },
                    focusin:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeIn(300);
                    }
                });
                $('.modal-main6').on({
                    click:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeIn(300);
                    },
                    focusin:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeIn(300);
                    }
                });
                $('.modal-main7').on({
                    click:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeIn(300);
                    },
                    focusin:function(){
                        $('.modal-sub1').stop().fadeOut(0);                    
                        $('.modal-sub2').stop().fadeOut(0);
                        $('.modal-sub3').stop().fadeOut(0);
                        $('.modal-sub4').stop().fadeOut(0);
                        $('.modal-sub5').stop().fadeOut(0);
                        $('.modal-sub6').stop().fadeOut(0);
                        $('.modal-sub7').stop().fadeIn(300);
                    }
                });
            }else{
                $('.modal-sub1').stop().fadeIn(0);
                $('.modal-sub2').stop().fadeIn(0);
                $('.modal-sub3').stop().fadeIn(0);
                $('.modal-sub4').stop().fadeIn(0);
                $('.modal-sub5').stop().fadeIn(0);
                $('.modal-sub6').stop().fadeIn(0);
                $('.modal-sub7').stop().fadeIn(0);
            }
        }
        
        
    }



 
    }
    const newIlloom = new illoom();

    newIlloom.init();


})(jQuery)