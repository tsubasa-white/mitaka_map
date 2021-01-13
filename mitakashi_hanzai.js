var map;
var a;
function initMap(x) {
        a=x;
        map = new google.maps.Map(document.getElementById('map'), {
            zoom:  16,
            center: {
                lat: 35.6833,
                lng: 139.5594
            }
        });
	map.data.loadGeoJson('mitakashi.geojson');//initmapの中で必ず定義する
	map.data.setStyle({
            //fillColor: 'red',
            strokeWeight: 0.5
            //noStroke();
         });
        
        //console.log(sumida_data);
        var hanzai = new Array();
        if(x==0){
            map.data.loadGeoJson('mitakashi.geojson');
            //console.log(hanzai);
        };
        
        if(x==1){//total
            for (i = 0;i < mitaka_data.features.length;i++) {
                 hanzai[i] = mitaka_data.features[i].properties["mitakasi-3_TOTAL"];
            }
            for (i = 0;i < mitaka_data.features.length;i++) {                
                    var mydata = mitaka_data.features[i].geometry.coordinates[0][0];
                    //console.log(mydata[0][0]);
                    var arrCoords = new Array();
                    for (j = 0;j < mydata.length;j++) {
                        // 座標地をlatlng値に変換
                        var latlng = new google.maps.LatLng(mydata[j][1], mydata[j][0]);
                       // console.log(latlng);
                        // latlng値を配列に退避
                        arrCoords.push(latlng);
                    };
               if(20>hanzai[i]){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "green",//ストロークの色(16進数形式)
                        fillColor: "green",  //塗りつぶしの色(16進数形式)
                    });
                }else if(40>hanzai[i] && hanzai[i]>=20){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "yellow",//ストロークの色(16進数形式)
                        fillColor: "yellow",  //塗りつぶしの色(16進数形式)
                    }); 
                }else if(100>hanzai[i] && hanzai[i]>=40){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        //strokeColor: "#ffff00",//ストロークの色(16進数形式)
                        strokeColor: "orange",
                        //fillColor: "#ffff00",  //塗りつぶしの色(16進数形式)
                        fillColor: "orange",
                    }); 
                }else if(hanzai[i]>=100){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "red",//ストロークの色(16進数形式)
                        fillColor: "red",  //塗りつぶしの色(16進数形式)
                    });
                };
            };
        };
        
        if(x==2){//sobo
            for (i = 0;i < mitaka_data.features.length;i++) {
             hanzai[i] = mitaka_data.features[i].properties["mitakasi-3_SOBO"];
            }
            //console.log(hanzai);
        
            for (i = 0;i < mitaka_data.features.length;i++) {                
                    var mydata = mitaka_data.features[i].geometry.coordinates[0][0];
                    //console.log(mydata[0][0]);
                    var arrCoords = new Array();
                    for (j = 0;j < mydata.length;j++) {
                        // 座標地をlatlng値に変換
                        var latlng = new google.maps.LatLng(mydata[j][1], mydata[j][0]);
                       // console.log(latlng);
                        // latlng値を配列に退避
                        arrCoords.push(latlng);
                    };
               if(0==hanzai[i]){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "green",//ストロークの色(16進数形式)
                        fillColor: "green",  //塗りつぶしの色(16進数形式)
                    });
                }else if(1 == hanzai[i]){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "yellow",//ストロークの色(16進数形式)
                        fillColor: "yellow",  //塗りつぶしの色(16進数形式)
                    }); 
                }else if(4>=hanzai[i] && hanzai[i]>=2){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        //strokeColor: "#ffff00",//ストロークの色(16進数形式)
                        strokeColor: "orange",
                        //fillColor: "#ffff00",  //塗りつぶしの色(16進数形式)
                        fillColor: "orange",
                    }); 
                }else if(hanzai[i]>=3){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "red",//ストロークの色(16進数形式)
                        fillColor: "red",  //塗りつぶしの色(16進数形式)
                    });
                };
            };
        };
        
        if(x==3){//shinnyu
            for (i = 0;i < mitaka_data.features.length;i++) {
                hanzai[i] = mitaka_data.features[i].properties["mitakasi-3_SHINNYU"];
            }
            console.log(hanzai);
            for (i = 0;i < mitaka_data.features.length;i++) {                
                var mydata = mitaka_data.features[i].geometry.coordinates[0][0];
                    //console.log(mydata[0][0]);
                var arrCoords = new Array();
                for (j = 0;j < mydata.length;j++) {
                        // 座標地をlatlng値に変換
                        var latlng = new google.maps.LatLng(mydata[j][1], mydata[j][0]);
                       // console.log(latlng);
                        // latlng値を配列に退避
                        arrCoords.push(latlng);
                };
                if(0==hanzai[i]){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "green",//ストロークの色(16進数形式)
                        fillColor: "green",  //塗りつぶしの色(16進数形式)
                    });
                }else if(1 == hanzai[i]){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "yellow",//ストロークの色(16進数形式)
                        fillColor: "yellow",  //塗りつぶしの色(16進数形式)
                    }); 
                }else if(4>=hanzai[i] && hanzai[i]>=2){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        //strokeColor: "#ffff00",//ストロークの色(16進数形式)
                        strokeColor: "orange",
                        //fillColor: "#ffff00",  //塗りつぶしの色(16進数形式)
                        fillColor: "orange",
                    }); 
                }else if(hanzai[i]>=3){
                    var poly = new google.maps.Polygon({
                        map: map,
                        paths: arrCoords,     //閉ループを示す座標列
                        strokeWeight: 5,       //ストローク幅(ピクセル単位)
                        strokeColor: "red",//ストロークの色(16進数形式)
                        fillColor: "red",  //塗りつぶしの色(16進数形式)
                    });
                };
            };
        };
};
