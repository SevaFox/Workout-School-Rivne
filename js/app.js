const description = document.getElementById("description");
const box1_video = document.getElementById("box1-video");
const box1_social_icon = document.getElementById("box1-social_icon");
const container_Place = document.getElementById("containerPlaceItem");
const container_Place_Map = document.getElementById("containerPlaceItemMap");
const box2_h2 = document.getElementById("Box2-h2");
const box2_p = document.getElementById("Box2-p");
const box2_video = document.getElementById("Box2-video");
const container_Training_schedule_h2 = document.getElementById("container-Training_schedule-h2");
const container_Training_schedule_img = document.getElementById("container-Training_schedule-img");
const container_Training_schedule_p = document.getElementById("container-Training_schedule-p");
const container_Price_h1 = document.getElementById("container-Price-h1");
const container_Price_li_1 = document.getElementById("container-Price-li-1");
const container_Price_li_2 = document.getElementById("container-Price-li-2");
const container_Price_li_3 = document.getElementById("container-Price-li-3");
const container_box3 = document.getElementById("container-box3");
const box3_item1 = document.getElementById("box3-item1");
const box3_item2 = document.getElementById("box3-item2");
const box3_item3 = document.getElementById("box3-item3");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    console.log(offset);

    if(576<screen.width){
        if (offset > 520) {
            container_Place.classList.add("-animate");
            container_Place_Map.classList.add("-animate");
        }
    
        if (offset > 880) {
            box2_h2.classList.add("-animate");
            box2_p.classList.add("-animate");
            box2_video.classList.add("-animate");
        }
    
        if (offset > 1500) {
            container_Training_schedule_h2.classList.add("-animate");
    
        }
    
        if (offset > 1600) {
            container_Training_schedule_img.classList.add("-animate");
        }
    
        if (offset > 1700) {
            container_Training_schedule_p.classList.add("-animate");
        }
    
        if (offset > 1740) {
            container_Price_h1.classList.add("-animate");
        }
    
        if (offset > 1880) {
            setTimeout(PriceAnimation1, 10);
            setTimeout(PriceAnimation2, 100);
            setTimeout(PriceAnimation3, 200);
        }
    
        if (offset > 2200) {
            container_box3.classList.add("-animate");
            setTimeout(box3Animation1, 10);
            setTimeout(box3Animation2, 100);
            /*setTimeout(box3Animation3, 200);*/
        }
    }

    if(576<screen.height){
        if (offset > 520) {
            container_Place.classList.add("-animate");
            container_Place_Map.classList.add("-animate");
        }
    
        if (offset > 880) {
            box2_h2.classList.add("-animate");
            box2_p.classList.add("-animate");
            box2_video.classList.add("-animate");
        }
    
        if (offset > 1500) {
            container_Training_schedule_h2.classList.add("-animate");
    
        }
    
        if (offset > 1600) {
            container_Training_schedule_img.classList.add("-animate");
        }
    
        if (offset > 1700) {
            container_Training_schedule_p.classList.add("-animate");
        }
    
        if (offset > 1740) {
            container_Price_h1.classList.add("-animate");
        }
    
        if (offset > 1880) {
            setTimeout(PriceAnimation1, 10);
            setTimeout(PriceAnimation2, 100);
            setTimeout(PriceAnimation3, 200);
        }
    
        if (offset > 2200) {
            container_box3.classList.add("-animate");
            setTimeout(box3Animation1, 10);
            setTimeout(box3Animation2, 100);
            /*setTimeout(box3Animation3, 200);*/
        }
    }

    if(576>screen.width){
        if (offset > 750) {
            container_Place.classList.add("-animate");
            container_Place_Map.classList.add("-animate");
        }
    
        if (offset > 1180) {
            box2_h2.classList.add("-animate");

        }

        if(offset > 1220){
            box2_p.classList.add("-animate");            
        }

        if(offset > 1260){
        box2_video.classList.add("-animate");
        }
    
        if (offset > 1875) {
            container_Training_schedule_h2.classList.add("-animate");
    
        }
    
        if (offset > 1950) {
            container_Training_schedule_img.classList.add("-animate");
        }
    
        if (offset > 2030) {
            container_Training_schedule_p.classList.add("-animate");
        }
    
        if (offset > 2100) {
            container_Price_h1.classList.add("-animate");
        }
    
        if (offset > 2150) {
            setTimeout(PriceAnimation1, 10);
            setTimeout(PriceAnimation2, 100);
            setTimeout(PriceAnimation3, 200);
        }
    
        if (offset > 2350) {
            container_box3.classList.add("-animate");
            setTimeout(box3Animation1, 10);
            setTimeout(box3Animation2, 100);
            /*setTimeout(box3Animation3, 200);*/
        }
    }

    if(576>screen.height){
        if (offset > 750) {
            container_Place.classList.add("-animate");
            container_Place_Map.classList.add("-animate");
        }
    
        if (offset > 1180) {
            box2_h2.classList.add("-animate");

        }

        if(offset > 1220){
            box2_p.classList.add("-animate");            
        }

        if(offset > 1260){
        box2_video.classList.add("-animate");
        }
    
        if (offset > 1875) {
            container_Training_schedule_h2.classList.add("-animate");
    
        }
    
        if (offset > 1950) {
            container_Training_schedule_img.classList.add("-animate");
        }
    
        if (offset > 2030) {
            container_Training_schedule_p.classList.add("-animate");
        }
    
        if (offset > 2100) {
            container_Price_h1.classList.add("-animate");
        }
    
        if (offset > 2150) {
            setTimeout(PriceAnimation1, 10);
            setTimeout(PriceAnimation2, 100);
            setTimeout(PriceAnimation3, 200);
        }
    
        if (offset > 2350) {
            container_box3.classList.add("-animate");
            setTimeout(box3Animation1, 10);
            setTimeout(box3Animation2, 100);
            /*setTimeout(box3Animation3, 200);*/
        }
    }

    if(1023<screen.width){
        if (offset > 480) {
            container_Place.classList.add("-animate");
            container_Place_Map.classList.add("-animate");
        }
    
        if (offset > 1030) {
            box2_h2.classList.add("-animate");

        }

        if(offset > 1515){
            box2_p.classList.add("-animate");            
        }

        if(offset > 1650){
        box2_video.classList.add("-animate");
        }
    
        if (offset > 1875) {
            container_Training_schedule_h2.classList.add("-animate");
    
        }
    
        if (offset > 1950) {
            container_Training_schedule_img.classList.add("-animate");
        }
    
        if (offset > 2030) {
            container_Training_schedule_p.classList.add("-animate");
        }
    
        if (offset > 2100) {
            container_Price_h1.classList.add("-animate");
        }
    
        if (offset > 1880) {
            setTimeout(PriceAnimation1, 10);
            setTimeout(PriceAnimation2, 100);
            setTimeout(PriceAnimation3, 200);
        }
    
        if (offset > 2110) {
            container_box3.classList.add("-animate");
            setTimeout(box3Animation1, 10);
            setTimeout(box3Animation2, 100);
            /*setTimeout(box3Animation3, 200);*/
        }
    }

    if(1023<screen.height){
        if (offset > 480) {
            container_Place.classList.add("-animate");
            container_Place_Map.classList.add("-animate");
        }
    
        if (offset > 1030) {
            box2_h2.classList.add("-animate");

        }

        if(offset > 1515){
            box2_p.classList.add("-animate");            
        }

        if(offset > 1650){
        box2_video.classList.add("-animate");
        }
    
        if (offset > 1875) {
            container_Training_schedule_h2.classList.add("-animate");
    
        }
    
        if (offset > 1950) {
            container_Training_schedule_img.classList.add("-animate");
        }
    
        if (offset > 2030) {
            container_Training_schedule_p.classList.add("-animate");
        }
    
        if (offset > 2100) {
            container_Price_h1.classList.add("-animate");
        }
    
        if (offset > 1880) {
            setTimeout(PriceAnimation1, 10);
            setTimeout(PriceAnimation2, 100);
            setTimeout(PriceAnimation3, 200);
        }
    
        if (offset > 2110) {
            container_box3.classList.add("-animate");
            setTimeout(box3Animation1, 10);
            setTimeout(box3Animation2, 100);
            /*setTimeout(box3Animation3, 200);*/
        }
    }

    if(1439<screen.height){
        if (offset > 330) {
            container_Place.classList.add("-animate");
            container_Place_Map.classList.add("-animate");
        }
    
        if (offset > 880) {
            box2_h2.classList.add("-animate");
            box2_p.classList.add("-animate");
            box2_video.classList.add("-animate");
        }
    
        if (offset > 1330) {
            container_Training_schedule_h2.classList.add("-animate");
    
        }
    
        if (offset > 1460) {
            container_Training_schedule_img.classList.add("-animate");
        }
    
        if (offset > 1680) {
            container_Training_schedule_p.classList.add("-animate");
        }
    
        if (offset > 1720) {
            container_Price_h1.classList.add("-animate");
        }
    
        if (offset > 1730) {
            setTimeout(PriceAnimation1, 10);
            setTimeout(PriceAnimation2, 100);
            setTimeout(PriceAnimation3, 200);
        }
    
        if (offset > 1940) {
            container_box3.classList.add("-animate");
            setTimeout(box3Animation1, 10);
            setTimeout(box3Animation2, 100);
            /*setTimeout(box3Animation3, 200);*/
        }
    }

    if(1439<screen.width){
        if (offset > 330) {
            container_Place.classList.add("-animate");
            container_Place_Map.classList.add("-animate");
        }
    
        if (offset > 880) {
            box2_h2.classList.add("-animate");
            box2_p.classList.add("-animate");
            box2_video.classList.add("-animate");
        }
    
        if (offset > 1330) {
            container_Training_schedule_h2.classList.add("-animate");
    
        }
    
        if (offset > 1460) {
            container_Training_schedule_img.classList.add("-animate");
        }
    
        if (offset > 1680) {
            container_Training_schedule_p.classList.add("-animate");
        }
    
        if (offset > 1720) {
            container_Price_h1.classList.add("-animate");
        }
    
        if (offset > 1730) {
            setTimeout(PriceAnimation1, 10);
            setTimeout(PriceAnimation2, 100);
            setTimeout(PriceAnimation3, 200);
        }
    
        if (offset > 1940) {
            container_box3.classList.add("-animate");
            setTimeout(box3Animation1, 10);
            setTimeout(box3Animation2, 100);
            /*setTimeout(box3Animation3, 200);*/
        }
    }

    if(1599<screen.width){
        if (offset > 200) {
            container_Place.classList.add("-animate");
            container_Place_Map.classList.add("-animate");
        }
    
        if (offset > 700) {
            box2_h2.classList.add("-animate");
            box2_p.classList.add("-animate");
            box2_video.classList.add("-animate");
        }
    
        if (offset > 1210) {
            container_Training_schedule_h2.classList.add("-animate");
    
        }
    
        if (offset > 1360) {
            container_Training_schedule_img.classList.add("-animate");
        }
    
        if (offset > 1510) {
            container_Training_schedule_p.classList.add("-animate");
        }
    
        if (offset > 1550) {
            container_Price_h1.classList.add("-animate");
        }
    
        if (offset > 1620) {
            setTimeout(PriceAnimation1, 10);
            setTimeout(PriceAnimation2, 100);
            setTimeout(PriceAnimation3, 200);
        }
    
        if (offset > 1800) {
            container_box3.classList.add("-animate");
            setTimeout(box3Animation1, 100);
            setTimeout(box3Animation2, 200);
            /*setTimeout(box3Animation3, 300);*/
        }
    }

    if(1599<screen.height){
        if (offset > 200) {
            container_Place.classList.add("-animate");
            container_Place_Map.classList.add("-animate");
        }
    
        if (offset > 700) {
            box2_h2.classList.add("-animate");
            box2_p.classList.add("-animate");
            box2_video.classList.add("-animate");
        }
    
        if (offset > 1210) {
            container_Training_schedule_h2.classList.add("-animate");
    
        }
    
        if (offset > 1360) {
            container_Training_schedule_img.classList.add("-animate");
        }
    
        if (offset > 1510) {
            container_Training_schedule_p.classList.add("-animate");
        }
    
        if (offset > 1550) {
            container_Price_h1.classList.add("-animate");
        }
    
        if (offset > 1620) {
            setTimeout(PriceAnimation1, 10);
            setTimeout(PriceAnimation2, 100);
            setTimeout(PriceAnimation3, 200);
        }
    
        if (offset > 1800) {
            container_box3.classList.add("-animate");
            setTimeout(box3Animation1, 100);
            setTimeout(box3Animation2, 200);
            /*setTimeout(box3Animation3, 300);*/
        }
    }

});

function firstAnimation(){
    box1_video.classList.add("-animate");
    description.classList.add("-animate");
    box1_social_icon.classList.add("-animate");
}

function PriceAnimation1(){
    container_Price_li_1.classList.add("-animate");
}

function PriceAnimation2(){
    container_Price_li_2.classList.add("-animate");
}

function PriceAnimation3(){
    container_Price_li_3.classList.add("-animate");
}

function box3Animation1(){
    box3_item1.classList.add("-animate");
}

function box3Animation2(){
    box3_item2.classList.add("-animate");
}

function box3Animation3(){
    box3_item3.classList.add("-animate");
}

setTimeout(firstAnimation, 10);

function AllAnimation(){
    container_Place.classList.add("-animate");
    container_Place_Map.classList.add("-animate");
    box2_h2.classList.add("-animate");
    box2_p.classList.add("-animate");
    box2_video.classList.add("-animate");
    container_Training_schedule_h2.classList.add("-animate");
    container_Training_schedule_img.classList.add("-animate");
    container_Training_schedule_p.classList.add("-animate");
    container_Price_h1.classList.add("-animate");
    container_Price_li_1.classList.add("-animate");
    container_Price_li_2.classList.add("-animate");
    container_Price_li_3.classList.add("-animate");
    container_box3.classList.add("-animate");
    box3_item1.classList.add("-animate");
    box3_item2.classList.add("-animate");
    /*box3_item3.classList.add("-animate");*/
}

if(2030<screen.width){
    setTimeout(AllAnimation, 10);
}