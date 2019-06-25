DBFX.RegisterNamespace("DBFX.Web.Controls");
DBFX.RegisterNamespace("DBFX.Web.NavControls");
DBFX.RegisterNamespace("DBFX.Design");
DBFX.RegisterNamespace("DBFX.Serializer");
DBFX.RegisterNamespace("DBFX.Design.ControlDesigners");


/*
* 20181128
* */
DBFX.Web.Controls.Map = function () {
    var map = new DBFX.Web.Controls.Control("Map");
    map.ClassDescriptor.Designers.splice(1, 0, "DBFX.Design.ControlDesigners.MapDesigner");
    map.ClassDescriptor.Serializer = "DBFX.Serializer.MapSerializer";
    map.VisualElement = document.createElement("div");
    map.VisualElement.className = "Map";

    //地图显示要素
    map.Features = [];

    //TODO:map.DesignTime  是否是设计时

    //标记位置
    //{P: 43.850344, R: 125.20754, lng: 125.20754, lat: 43.850344}
    map.MarkPosition = undefined;

    //城市信息{province: "吉林省", city: "长春市", citycode: "0431", district: "朝阳区"}
    map.City = undefined;

    //自定义的点标记数组
    map.CustomMarkers = [];

    //FIXME:百度地图  暂未实现动态加载  
    map.bMap = new Object();

    //高德地图
    map.aMap = new Object();

    map.routes = ["驾车路线","步行路线","公交路线","货车路线"];

    //通过正则表达式判断是否为手机端运行
    map.isPhone = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    console.log("是否为手机端"+map.isPhone);



    map.OnCreateHandle();
    map.OnCreateHandle = function () {
        map.VisualElement.innerHTML = "<div class=\"MapView\" id='MapView'/></div><div class='MapInfoPanel' id='MapInfoPanel'><div id='map123'></div></div>"+
            "<div class='MapPOIList'></div>"+
        "<div class='MapTool'><input type='text' id='MapSearchInput' class='MapSearchInput'><span class='MapMarkBtn'>标记位置</span><select name='路线选择' class='MapRouteSelect'><option value =\"5\">路线选择</option></select></div>";
        map.MapDiv = map.VisualElement.querySelector("div.MapView");
        map.MapInfoPanel = map.VisualElement.querySelector("div.MapInfoPanel");
        map.MapSearchInput = map.VisualElement.querySelector("input.MapSearchInput");

        //定位搜索工具栏
        map.MapTool = map.VisualElement.querySelector("div.MapTool");

        map.MapPOIList = map.VisualElement.querySelector("div.MapPOIList");


        map.MapSearchInput.placeholder = "搜索地址";

        //"标记"按钮
        map.MapMarkBtn = map.VisualElement.querySelector("span.MapMarkBtn");
        map.MapMarkBtn.addEventListener("click",map.MarkBtnClick);

        //路线选择器
        map.RouteSelect = map.VisualElement.querySelector("select.MapRouteSelect");
        map.RouteSelect.disabled = true;
        map.RouteSelect.className = "MapRouteSelectDisabled";

        for(var i=0;i<map.routes.length;i++){
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerText = map.routes[i];
            map.RouteSelect.add(opt);
        }
        //选择路线事件
        map.RouteSelect.addEventListener("change",map.OnRouteSelect);

        /************************** 集成高德地图 *****************************/
        var random = parseInt(Math.random()*100,10);
        map.CbName="MapCallback"+random;
        window[map.CbName] = map.LoadMap;
        map.MapDiv.id="MapView"+random;
        //TODO:动态插入script  异步加载高德地图 callback=map.LoadMap!!
        var mapJS = document.createElement("SCRIPT");
        mapJS.charset = "utf-8";
        mapJS.src = "https://webapi.amap.com/maps?v=1.4.11&key=501c9ef49f34ed644919c827c3d98b98&callback="+map.CbName;
        mapJS.type = 'text/javascript';
        document.body.appendChild(mapJS);

        /************************** TODO:集成百度地图  *****************************/
        //平台为Object扩展了很多属性 百度地图的代码运行报错

        // var random = parseInt(Math.random()*100,10);
        // map.CbName="MapCallback"+random;
        // window[map.CbName] = map.BLoadMap;
        // map.MapDiv.id="MapView"+random;
        // //TODO:动态插入script  异步加载百度地图 callback=map.LoadMap!!   密钥：VgbiGmjecFzgiIZjPxhSwXlXhWof4WaG
        // var mapJS = document.createElement("SCRIPT");
        // console.log(typeof mapJS);
        // mapJS.charset = "utf-8";
        // mapJS.src = "http://api.map.baidu.com/api?v=3.0&ak=VgbiGmjecFzgiIZjPxhSwXlXhWof4WaG&callback="+map.CbName;
        // mapJS.type = 'text/javascript';
        // document.body.appendChild(mapJS);
        // map.MapJS = mapJS;

        // document.head.insertAdjacentHTML("afterbegin", "<head></head>");
        // console.log(navigator.geolocation);

        //浏览器定位
        if(navigator.geolocation){
            map.currentPos = navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
            });
        }else {
            console.log("用户不允许获取当前位置信息");
        }
    }

    //TODO:地图类型： 普通交通地图、简易世界地图、简易中国地图、简易外国地图、简易省图
    map.mapStyle = "default";
    Object.defineProperty(map,"MapStyle",{
        get:function () {
            return map.mapStyle;
        },
        set:function (v) {
            map.mapStyle = v;

            //获取所有图层 然后移除
            var layers = map.aMap.getLayers();
            console.log(layers,"layers");
            map.aMap.remove(layers);

            // 获取已经添加的覆盖物 然后移除
            var overlays = map.aMap.getAllOverlays();
            console.log(overlays,"overlays");
            map.aMap.remove(overlays);

            switch (v){
                case "DisCountry"://简易国家地图
                    map.DrawDisCountry();
                    break;
                case "DisProvince":
                    map.DrawDisProvince();
                    break;
                case "DisWorld":
                    map.DrawDisWorld();
                    break;
                default:
                    map.DrawDefaultMap();
                    break;
            }
        }
    });

    //获取随机颜色值
    map.GetColorByRandom = function(){
        var rg = Math.random() * 155 + 50;
        return 'rgb(' + rg + ',' + rg + ',255)';
    }

    //TODO:绘制默认的交通地图 当前定位地点为中心点
    map.DrawDefaultMap = function () {

    }

    //TODO:1、绘制国家简易行政区图
    map.DrawDisCountry = function (config) {
        var zIndex = 12,
            SOC = 'CHN',//默认为中国
            depth = 2;
        if(config){
            zIndex = config.zIndex || zIndex;
            SOC = config.SOC || SOC;
            depth = config.depth || depth;
        }

        map.disCountry && map.disCountry.setMap(null);

        map.disCountry = new AMap.DistrictLayer.Country({
                zIndex:zIndex,
                SOC:SOC,
                depth:depth,
                styles:{
                    'nation-stroke':'#ff0000',
                    'coastline-stroke':[0.85, 0.63, 0.94, 1],
                    'province-stroke':'white',
                    'city-stroke': 'rgba(255,255,255,0.5)',//中国特有字段
                    'fill':function(props){
                        // console.log(props);

                        // return getColorByDGP(props.adcode_pro);//中国特有字段
                        return map.GetColorByRandom();
                    }
                }
        });
        //TODO:设置当前行政区中心在地图中心
        // map.aMap.setCity("北京");
        // map.setMapZoom(3);
        //添加图层
        // map.aMap.add([map.disCountry]);
        map.disCountry.setMap(map.aMap);
    }

    //切换国家简易行政区图
    map.SwitchCountry = function (soc) {
        map.disCountry && map.disCountry.setSOC(soc);
    }

    //TODO:2、绘制省份简易行政区图
    map.DrawDisProvince = function (config) {
        var zIndex = 12,
            adcode = 130000,
            depth = 2;

        if(config){
            zIndex = config.zIndex || zIndex;
            adcode = config.adcode || adcode;
            depth = config.depth || depth;
        }

        map.disProvince && map.disProvince.setMap(null);

        map.disProvince = new AMap.DistrictLayer.Province({
            zIndex: zIndex,
            adcode: [adcode],
            depth: depth,
            styles: {
                'fill': function (properties) {
                    // properties为可用于做样式映射的字段，包含
                    // NAME_CHN:中文名称
                    // adcode_pro
                    // adcode_cit
                    // adcode
                    // var adcode = properties.adcode;
                    // return getColorByAdcode(adcode);
                    return "#6786ff";
                },
                'province-stroke': 'cornflowerblue',
                'city-stroke': 'white', // 中国地级市边界
                'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
            }
        });
        //添加图层
        // map.aMap.add([map.disProvince]);
        map.disProvince.setMap(map.aMap);
        map.aMap.setCity(adcode+"");
        // map.setMapZoom(2);
    }

    //TODO:3、绘制世界简易行政区图
    map.DrawDisWorld = function (config) {
        var zIndex = 12;
        if(config){
            zIndex = config.zIndex || zIndex;
        }

        map.disWorld && map.disWorld.setMap(null);

        map.disWorld = new AMap.DistrictLayer.World({
            zIndex:zIndex,
            styles:{
                // 颜色格式: #RRGGBB、rgba()、rgb()、[r,g,b,a]
                'nation-stroke':function(props){
                    //props:{type:Nation_Border_China/Nation_Border_Foreign}
                    if(props.type=='Nation_Border_China'){
                        return 'red'
                    }else{
                        return 'white'
                    }
                },
                'coastline-stroke': [0.8, 0.63, 1, 1],
                'fill':function(props){

                    // return getColorBySOC(props.SOC);
                    return "#6786ff";
                }
            }
        });
        //添加图层
        map.disWorld.setMap(map.aMap);

    }

    //TODO:4、绘制外国简易行政区图

    //TODO:图层显示设置
    //是否显示工具栏
    map.showToolBar = true;
    Object.defineProperty(map,"ShowToolBar",{
        get:function () {
            return map.showToolBar;
        },
        set:function (v) {
            map.showToolBar = v;
            if(v == true || v == "true"){
                map.MapTool.style.visibility = "";
            }else {
                map.MapTool.style.visibility = "hidden";
            }
        }
    });

    //是否显示logo
    map.showLogo = true;
    Object.defineProperty(map,"ShowLogo",{
        get:function () {
            return map.showLogo;
        },
        set:function (v) {
            map.showLogo = v;
            if(v == true || v == "true"){
                map.HideLogo(false);
            }else {
                map.HideLogo(true);
            }
        }
    });

    //是否显示版权信息
    map.showCR = true;
    Object.defineProperty(map,"ShowCR",{
        get:function () {
            return map.showCR;
        },
        set:function (v) {
            map.showCR = v;
            if(v == true || v == "true"){
                map.HideCR(false);
            }else {
                map.HideCR(true);
            }
        }
    });

    //隐藏logo
    map.HideLogo = function (h) {
        //隐藏logo
        map.logoImg = map.VisualElement.querySelector("a.amap-logo");
        if(map.logoImg){
            map.logoImg.style.display = h?"none":"block";
        }
    }

    //隐藏版权信息
    map.HideCR = function (h) {
        //隐藏版权信息
        var copyInfo = map.VisualElement.querySelector("div.amap-copyright");
        if(copyInfo){
            copyInfo.style.bottom = h?"-300px":"1px";
        }
    }

    ////显示要素，分别是：区域面、道路、建筑物、标注；
    // map.aMap.setFeatures(['bg', 'road', 'building', 'point']);

    //显示区域面
    map.showBG = false;
    Object.defineProperty(map,"ShowBG",{
        get:function () {
            return map.showBG;
        },
        set:function (v) {
            map.showBG = v;

            if(v == true || v == "true"){
                map.Features.indexOf('bg')<0 ? map.Features.push('bg'):"";
            }else {
                map.Features.indexOf('bg')<0 ? "":delete map.Features[map.Features.indexOf('bg')];
            }
            map.aMap.setFeatures(map.Features);
        }
    });
    //显示道路
    map.showRoad = false;
    Object.defineProperty(map,"ShowRoad",{
        get:function () {
            return map.showRoad;
        },
        set:function (v) {
            map.showRoad = v;

            if(v == true || v == "true"){
                map.Features.indexOf('road')<0 ? map.Features.push('road'):"";
            }else {
                map.Features.indexOf('road')<0 ? "":delete map.Features[map.Features.indexOf('road')];
            }
            map.aMap.setFeatures(map.Features);
        }
    });

    //显示建筑物
    map.showBuilding = false;
    Object.defineProperty(map,"ShowBuilding",{
        get:function () {
            return map.showBuilding;
        },
        set:function (v) {
            map.showBuilding = v;

            if(v == true || v == "true"){
                map.Features.indexOf('building')<0 ? map.Features.push('building'):"";
            }else {
                map.Features.indexOf('building')<0 ? "":delete map.Features[map.Features.indexOf('building')];
            }
            map.aMap.setFeatures(map.Features);
        }
    });

    //显示建标注
    map.showPoint = false;
    Object.defineProperty(map,"ShowPoint",{
        get:function () {
            return map.showPoint;
        },
        set:function (v) {
            map.showPoint = v;

            if(v == true || v == "true"){
                map.Features.indexOf('point')<0 ? map.Features.push('point'):"";
            }else {
                map.Features.indexOf('point')<0 ? "": delete map.Features[map.Features.indexOf('point')];
            }
            map.aMap.setFeatures(map.Features);
        }
    });

    //地图是否可通过鼠标拖拽平移，默认为true
    map.dragEnable = true;
    Object.defineProperty(map,"DragEnable",{
        get:function () {
            return map.dragEnable;
        },
        set:function (v) {
            map.dragEnable = v;

            if(v == true || v == "true"){
                map.aMap.setStatus({dragEnable:true});
            }else {
                map.aMap.setStatus({dragEnable:false});
            }
        }
    });

    //地图是否可通过双击鼠标放大地图，默认为true
    map.doubleClickZoom = true;
    Object.defineProperty(map,"DoubleClickZoom",{
        get:function () {
            return map.doubleClickZoom;
        },
        set:function (v) {
            map.doubleClickZoom = v;

            if(v == true || v == "true"){
                map.aMap.setStatus({doubleClickZoom:true});
            }else {
                map.aMap.setStatus({doubleClickZoom:false});
            }
        }
    });

    //地图是否可缩放，默认值为true
    map.zoomEnable = true;
    Object.defineProperty(map,"ZoomEnable",{
        get:function () {
            return map.zoomEnable;
        },
        set:function (v) {
            map.zoomEnable = v;

            if(v == true || v == "true"){
                map.aMap.setStatus({zoomEnable:true});
            }else {
                map.aMap.setStatus({zoomEnable:false});
            }
        }
    });


    //TODO:设置zoom 缩放级别 PC：[3,18]; App:[3,19];
    map.zoom = 5;
    Object.defineProperty(map,"Zoom",{
        get:function () {
            return map.zoom;
        },
        set:function (v) {
            var v1 = v*1;
            map.zoom = !isNaN(v1) ? v1:5;
            map.setMapZoom(map.zoom);
        }
    });

    map.setMapZoom = function (z) {
        map.aMap.setZoom(z);
    }


    //加载百度地图  平台不能使用!!!
    map.BLoadMap = function () {
        delete window[map.CbName];
        delete Object.prototype.OnPropertyChanged;
        delete Object.prototype.propertyChanged;

        // map.MapJS = undefined;
        map.MapJS.PropertyChanged = null;
        var mp = new BMap.Map("map123");
        mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
    }


    //兴趣点结果展示列表 item点击事件
    map.OnPOIListItemClick = function (SCE) {
        console.log(SCE);
        //SCE:点击兴趣点搜索结果列表中某一个地点时 返回该地点信息
        map.POIItemInfo = SCE.data;
        console.log(map.POIItemInfo);


        if(map.POIListItemClick != undefined && map.POIListItemClick.GetType() == "Command"){
            map.POIListItemClick.Sender = map;
            map.POIListItemClick.Execute();
        }

        if(map.POIListItemClick != undefined && map.POIListItemClick.GetType() == "function"){
            map.POIListItemClick(map,e,SCE);
        }
    }


    //TODO:周边搜索兴趣点 20190604
    //config:配置信息对象
    /**
    var config = {
        //兴趣点类型 多个用|分隔
        type:"餐饮|酒店|电影院",
        //每页显示数据数
        pageSize:5,
        //默认显示页数
        pageIndex:1,
        city:"010",
        autoFitView:true,
        //LngLat
        cpoint:[116.405467, 39.907761],
        //取值范围0-50000
        radius:200
    }*/
    map.PlaceSearchNearBy = function (config) {


        if(!config){
            return;
        }

        AMap.service(["AMap.PlaceSearch"], function() {

            //构造地点查询类
            var placeSearch = new AMap.PlaceSearch({
                type: config.type || "", // 兴趣点类别
                pageSize: config.pageSize || 5, // 单页显示结果条数
                pageIndex: config.pageIndex || 1, // 页码
                city: config.city || map.City.citycode, // 兴趣点城市  默认为地图当前定位城市
                // citylimit: true,  //是否强制限制在设置的城市内搜索
                map: map.aMap, // 展现结果的地图实例
                panel: map.MapPOIList, // 结果列表将在此容器中进行展示。
                autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
            });

            var cpoint = config.cpoint; //中心点坐标
            placeSearch.searchNearBy('', cpoint, config.radius||2000, function(status, result) {
                    console.log("兴趣点搜索结果状态"+status);
                    console.log(result);
            });

            //SCE:SelectChangeEvent对象
            placeSearch.on("listElementClick",function (SCE) {
                //SCE:点击兴趣点搜索结果列表中某一个地点时 返回该地点信息
                map.OnPOIListItemClick(SCE);
            });
        });
    }


    //TODO:绘制热力图 20190613
    //1、绘制中国地图时 各个省份的颜色
    //2、绘制省份地图时 各个城市的颜色
    //3、颜色辅助方法
    var configs = {

    };
    map.HeatMap = function () {

        var colors = {};

        var GDPSpeed = {
            '520000':10,//贵州
            '540000':10,//西藏
            '530000':8.5,//云南
            '500000':8.5,//重庆
            '360000':8.5,//江西
            '340000':8.0,//安徽
            '510000':7.5,//四川
            '350000':8.5,//福建
            '430000':8.0,//湖南
            '420000':7.5, //湖北
            '410000':7.5,//河南
            '330000':7.0,//浙江
            '640000':7.5,//宁夏
            '650000':7.0,//新疆
            '440000':7.0,//广东
            '370000':7.0,//山东
            '450000':7.3,//广西
            '630000':7.0,//青海
            '320000':7.0,//江苏
            '140000':6.5,//山西
            '460000':7,// 海南
            '310000':6.5,//上海
            '110000':6.5, // 北京
            '130000':6.5, // 河北
            '230000':6, // 黑龙江
            '220000':6,// 吉林
            '210000':6.5, //辽宁
            '150000':6.5,//内蒙古
            '120000':5,// 天津
            '620000':6,// 甘肃
            '610000':8.5// 甘肃
        }

        var getColorByDGP = function(adcode){
            if(!colors[adcode]){
                var gdp = GDPSpeed[adcode];
                if(!gdp){
                    colors[adcode] = 'rgb(227,227,227)'
                }else{
                    var rg = 255-Math.floor((gdp-5)/5*255);
                    colors[adcode] = 'rgb('+ rg +','+ rg +',255)';
                }
            }
            return colors[adcode];
        }




        // map.aMap.setCenter([116.418261, 39.921984]);



        //TODO:设置地图的交互控制 作为设计器属性
        // map.aMap.setStatus({
        //     showIndoorMap: false, // 是否在有矢量底图的时候自动展示室内地图，PC默认true,移动端默认false
        //     resizeEnable: true, //是否监控地图容器尺寸变化，默认值为false
        //     // dragEnable: false, // 地图是否可通过鼠标拖拽平移，默认为true
        //     keyboardEnable: false, //地图是否可通过键盘控制，默认为true
        //     // doubleClickZoom: false, // 地图是否可通过双击鼠标放大地图，默认为true
        //     // zoomEnable: false, //地图是否可缩放，默认值为true
        //     rotateEnable: false // 地图是否可旋转，3D视图默认为true，2D视图默认false
        // });


        //TODO:限制地图显示范围
        // var bounds = map.aMap.getBounds();
        // map.aMap.setLimitBounds(bounds);


        //TODO:创建热力图
        map.aMap.plugin(["AMap.Heatmap"], function () {
            //初始化heatmap对象
            map.heatmap = new AMap.Heatmap(map.aMap, {
                radius: 25, //给定半径
                opacity: [0, 0.8],
                gradient:{
                    0.5: 'blue',
                    0.65: 'rgb(117,211,248)',
                    0.7: 'rgb(0, 255, 0)',
                    0.9: '#ffea00',
                    1.0: 'red'
                }
            });

            //设置数据集：该数据为北京部分“公园”数据
            map.heatmap.setDataSet({
                data: [{
                    "lng": 116.191031,
                    "lat": 39.988585,
                    "count": 10
                }, {
                    "lng": 116.389275,
                    "lat": 39.925818,
                    "count": 11
                }, {
                    "lng": 116.287444,
                    "lat": 39.810742,
                    "count": 12
                }, {
                    "lng": 116.481707,
                    "lat": 39.940089,
                    "count": 13
                }, {
                    "lng": 116.410588,
                    "lat": 39.880172,
                    "count": 14
                }, {
                    "lng": 116.394816,
                    "lat": 39.91181,
                    "count": 15
                }, {
                    "lng": 116.416002,
                    "lat": 39.952917,
                    "count": 16
                }, {
                    "lng": 116.39671,
                    "lat": 39.924903,
                    "count": 17
                }, {
                    "lng": 116.180816,
                    "lat": 39.957553,
                    "count": 18
                }, {
                    "lng": 116.382035,
                    "lat": 39.874114,
                    "count": 19
                }, {
                    "lng": 116.316648,
                    "lat": 39.914529,
                    "count": 20
                }, {
                    "lng": 116.395803,
                    "lat": 39.908556,
                    "count": 21
                }],
                max: 20
            });

            map.heatmap.show();

        });
    }


    //路线选择、绘制
    map.OnRouteSelect = function (e) {

        //绘制路线前 清除已绘制路线
       map.drivingRoute.clear();
       map.truckRoute.clear();
       map.walkingRoute.clear();
       map.transferRoute.clear();

        switch(this.value){
            case "0":
            {

                map.drivingRoute.search(map.currentMarker.getPosition(),map.targetMarker.getPosition(),function (status,result) {
                    if(status=='complete'){
                        console.log('绘制驾车路线完成');
                    }else {
                        console.log("绘制驾车路线失败"+result);
                    }
                });
            }
                break;
            case "1":
                map.walkingRoute.search(map.currentMarker.getPosition(),map.targetMarker.getPosition(),function (status,result) {
                    if(status=='complete'){
                        console.log('绘制步行路线完成');
                    }else {
                        console.log("绘制步行路线失败"+result);
                    }
                });
                break;
            case "2":
                map.transferRoute.search(map.currentMarker.getPosition(),map.targetMarker.getPosition(),function (status,result) {
                    if(status=='complete'){
                        console.log('绘制公交路线完成');
                    }else {
                        console.log("绘制公交路线失败"+result);
                    }
                });

                break;
            case "3":
                var curPos = map.currentMarker.getPosition();
                var tarPos = map.targetMarker.getPosition();
                var path = [];
                path.push({lnglat:[curPos.lng,curPos.lat]});
                path.push({lnglat:[tarPos.lng,tarPos.lat]});
                console.log(map.currentMarker.getPosition());
                map.truckRoute.search(path,function (status,result) {
                    if(status=='complete'){
                        console.log('绘制货车路线完成');
                    }else {
                        console.log("绘制货车路线失败"+result);
                    }
                });

                break;
            default:
                break;
        }
    }

    //设置地图中心 p:点坐标 [116.405467, 39.907761]
    map.setMapCenter = function (p) {
        map.aMap.setCenter(p);//设置地图中心点
    }






    //是否允许用户标记自己位置 获取位置信息 默认允许"yes",不允许为"no";
    map.allowMarkPos = "yes";
    Object.defineProperty(map,"AllowMarkPos",{
        get:function () {
            return map.allowMarkPos;
        },
        set:function (v) {
            map.allowMarkPos = v;
        }
    });


    //标记按钮点击
    map.isMarking = false;
    map.MarkBtnClick = function (e) {
        e.cancelBubble = true;
        console.log("标记按钮点击"+map.clickListener);

        if(!map.isMarking){
            map.clickListener = AMap.event.addListener(map.aMap,"click",map.OnMapClick);



            // map.mouseupListener = AMap.event.addListener(map.aMap,"mouseup",map.OnMapMouseup);
            // map.touchendListener = AMap.event.addListener(map.aMap,"touchend",map.OnMapMouseup);
        }else {
            AMap.event.removeListener(map.clickListener);//移除事件，以绑定时返回的对象作为参数

            //更改按钮文字显示
            map.MapMarkBtn.innerText = "标记位置";

            //设置用户标记的位置
            map.MarkPosition = map.userMarker.getPosition();
            console.log(map.MarkPosition);

            if (map.Command != undefined && map.Command != null) {
                map.Command.Sender = map;
                map.Command.Execute();
            }

            if(map.MarkedPosition != undefined && map.MarkedPosition.GetType() == "Command"){
                map.MarkedPosition.Sender = map;
                map.MarkedPosition.Execute();
            }

            if(map.MarkedPosition != undefined && map.MarkedPosition.GetType() == "function"){
                map.MarkedPosition(e,map);
            }
        }


        map.isMarking = !map.isMarking;
        map.MapMarkBtn.innerText = map.isMarking==true ? "结束标记":"标记位置";
    }

    //地图点击结束
    map.OnMapMouseup = function (e) {
        console.log("点击结束");

    }

    //TODO:地图点击事件
    map.OnMapClick = function (e) {
        //点击地图获取经纬度信息
        var lng = e.lnglat.lng;
        var lat = e.lnglat.lat;
        console.log(lng+"====="+lat);
        map.aMap.add(map.userMarker);
        map.userMarker.setPosition(new AMap.LngLat(lng,lat));
        map.userMarker.label = "您标记的位置";
        map.userMarker.setLabel({
            //修改label相对于maker的位置
            offset: new AMap.Pixel(20, 20),
            // // 设置label标签
            // label默认蓝框白底左上角显示，样式className为：amap-marker-label
            content: "<div class='info'><span class='MapUserMarkerLabel'>您标记的位置</span></div>"
        });

    }

    //地图加载完成 搜索地点完成
    map.OnMapComplete = function () {
        console.log("地图加载完成！");

        //获取城市信息
        map.aMap.getCity(function (result) {

            console.log("为Autocomplete设置城市代码");

            map.City = result;

            map.autoComplete.setCity(result.citycode);
            map.transferRoute.setCity(result.citycode);

        });

        AMap.plugin('AMap.Autocomplete', function(){
            // 实例化Autocomplete
            var autoOptions = {
                // input 为绑定输入提示功能的input的DOM ID
                input: "MapSearchInput"
            }

            console.log("实例化Autocomplete");
            map.autoComplete= new AMap.Autocomplete(autoOptions);
            // 无需再手动执行search方法，autoComplete会根据传入input对应的DOM动态触发search

            map.autoComplete.on("complete",function (result) {
                // console.log(result);
            });

            map.autoComplete.on("select",function (obj) {
                var selectLoc = obj.poi.location;
                console.log(obj.poi.location);

                map.RouteSelect.disabled = false;
                map.RouteSelect.className = "MapRouteSelect";

                //添加终点标记到地图
                map.aMap.add(map.targetMarker);
                //设置终点标记的位置
                map.targetMarker.setPosition(new AMap.LngLat(selectLoc.lng, selectLoc.lat));

                map.targetMarker.label = "您选择的位置";
                map.targetMarker.setLabel({
                    //修改label相对于maker的位置
                    offset: new AMap.Pixel(20, 20),
                    // // 设置label标签
                    // label默认蓝框白底左上角显示，样式className为：amap-marker-label
                    content: "<div class='info'><span class='MapUserMarkerLabel'>您选择的位置</span></div>"
                });
                //根据覆盖物调整地图范围  有参数时，自动适配到指定视野范围;无参数，自动自适应所有覆盖物
                map.aMap.setFitView([map.currentMarker,map.targetMarker]);

            });

        })


        //允许用户标记位置时
        if (map.allowMarkPos == "yes"){
            map.userMarker = new AMap.Marker();
            // map.aMap.add(map.userMarker);

            map.userMarker.on("click",map.OnMarkerClick);
        }

        //TODO：添加地图加载完成事件
        if (map.MapComplete != undefined) {
            if (map.MapComplete.GetType != undefined && map.MapComplete.GetType() == "Command") {
                map.MapComplete.Sender = map;
                map.MapComplete.Execute();
            }

            if (typeof (map.MapComplete) == "function")
                map.MapComplete(e);
        }
    }


    //创建高德地图
    map.CreateAMap = function () {
        //创建高德地图
        map.aMap = new AMap.Map(map.MapDiv.id,{
            // zoom:3,//级别
            // center: [125.3247893, 43.8868593],//中心点坐标
            // viewMode:'2D'//使用3D视图
            // resizeEnable: true
            // features: ['bg', 'road', 'building', 'point']
        });


        //地图事件绑定
        //地图加载完成
        map.aMap.on("complete", map.OnMapComplete);

        //地图点击
        // map.aMap.on("click",map.OnMapClick);
        //     map.aMap.on("mouseup",function () {
        //         console.log("鼠标抬起")
        //     });
        //
        //     map.aMap.on("touchend",function () {
        //         console.log("触摸结束")
        //     });
    }

    //创建点标记
    map.CreatePointMarker = function () {

        //创建当前位置点"标记"
       map.currentMarker = new AMap.Marker({
            // position: new AMap.LngLat(125.3247893, 43.8868593),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            // title: '长春',
           // 设置是否可以拖拽
           draggable: true,
           cursor: 'move',
           // 设置拖拽效果
           raiseOnDrag: true
        });
        map.aMap.add(map.currentMarker);

        map.currentMarker.on("click",map.OnMarkerClick);

        // 设置点标记的动画效果，此处为弹跳效果
        map.currentMarker.setAnimation('AMAP_ANIMATION_DROP');


        //构造目标点标记
        map.targetMarker = new AMap.Marker({
            offset: new AMap.Pixel(-13, -30),
            // 设置是否可以拖拽
            draggable: true,
            cursor: 'move',
            // 设置拖拽效果
            raiseOnDrag: true
        });
        map.targetMarker.setAnimation('AMAP_ANIMATION_DROP');

        map.targetMarker.on("click",map.OnMarkerClick);

    }

    //创建定位插件
    map.CreateGeolocation = function () {
        //定位插件
        AMap.plugin("Amap.Geolocation",function () {
            map.Geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                buttonOffset: new AMap.Pixel(10, 20),
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                zoomToAccuracy: true,
                //  定位按钮的排放位置,  RB表示右下
                buttonPosition: 'RB'
            });
            // map.aMap.addControl(geolocation);
            map.Geolocation.getCurrentPosition();


            AMap.event.addListener(map.Geolocation, 'complete', function (data) {
                console.log("定位完成"+JSON.stringify(data["position"]));
                //

                map.currentMarker.setPosition(new AMap.LngLat(data.position.lng, data.position.lat));
                map.aMap.setCenter(new AMap.LngLat(data.position.lng, data.position.lat));

                map.currentMarker.label = "您所在位置";
                map.currentMarker.setLabel({
                    //修改label相对于maker的位置
                    offset: new AMap.Pixel(20, 20),
                    // // 设置label标签
                    // label默认蓝框白底左上角显示，样式className为：amap-marker-label
                    content: "<div class='info'><span class='MapCurrentMarkerLabel'>您所在位置</span></div>"
                });

            });

            AMap.event.addListener(map.Geolocation, 'error', function (data) {
                console.log("定位失败"+JSON.stringify(data));
                //TODO:定位失败需要为用户做个提醒


            });

        });
    }


    //TODO:创建图层
    map.CreateLayer = function () {
        // 构造官方卫星、路网"图层"
        var satelliteLayer = new AMap.TileLayer.Satellite();
        var roadNetLayer =  new AMap.TileLayer.RoadNet();

        //批量添加"图层"
        // map.aMap.add([satelliteLayer, roadNetLayer]);

        //添加单个"图层"
        // map.aMap.add(roadNetLayer);

        //移除"图层"
        // map.aMap.remove(satelliteLayer);
    }

    //TODO:创建控件  工具条、比例尺、鹰眼控件、类别切换控件
    map.CreateMapControl = function () {
        //工具条、比例尺、鹰眼控件、类别切换控件  PC端选择性添加  App端不添加

        //"AMap.DistrictLayer"-简易行政区图层
        map.aMap.plugin(["AMap.ToolBar",'AMap.Scale','AMap.OverView','AMap.MapType',"AMap.DistrictLayer"],function () {

            //1、工具条  工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
            map.ToolBar = new AMap.ToolBar();

            //2、比例尺插件。位于地图右下角，用户可控制其显示与隐藏。
            map.Scale = new AMap.Scale();

            //3、地图鹰眼插件。
            map.OverView = new AMap.OverView();

            //4、地图类型切换插件。用户通过该插件进行地图切换。
            map.MapType = new AMap.MapType();

        });




        if(!map.isPhone){
            //PC端


        }else {//App端

            // map.aMap.addControl(map.ToolBar);
            // map.ToolBar.hideDirection();
            // map.ToolBar.showLocation();

        }


    }


    //TODO:工具条、比例尺、鹰眼控件、类别切换控件
    map.CreatePlugins = function () {

        // AMap.plugin(['AMap.Scale',
        //     'AMap.OverView',
        //     'AMap.MapType'
        // ], function () {
        //
        //     // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
        //     // map.aMap.addControl(new AMap.Scale());
        //
        //     // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
        //     // map.aMap.addControl(new AMap.OverView({isOpen:true}));
        //
        //     // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
        //     // map.aMap.addControl(new AMap.MapType());
        //
        // });


    }

    //带检索功能的信息窗体
    map.CreateAdvancedInfoWindow = function () {
        AMap.plugin("AMap.AdvancedInfoWindow",function () {
            var advancedInfo = new AMap.AdvancedInfoWindow({
                panel:"MapInfoPanel",
                autoMove:true,
                placeSearch: false,
                asDestination: false,
                offset: new AMap.Pixel(0, -30)
            });
            advancedInfo.open(map.aMap,map.aMap.getCenter());
            // map.aMap.addControl(advancedInfo);
        });
    }

    //创建路径规划
    map.CreateRoutes = function () {
        AMap.plugin(['AMap.Driving',
            'AMap.TruckDriving',
            'AMap.Transfer','AMap.Walking'
        ],function () {
            //驾车路线
            map.drivingRoute = new AMap.Driving({
                map:map.aMap
            });

            //货车路线
            map.truckRoute =new AMap.TruckDriving({
                map:map.aMap,
                size:2,
                policy:3
            });

            //公交车路线
            map.transferRoute = new AMap.Transfer({
                map:map.aMap
            });

            //步行路线
            map.walkingRoute = new AMap.Walking({
                map:map.aMap
            });
        });
    }

    //TODO：绘制带经过点的货车路线
    map.DrawTruckRoute = function (path) {

        if(Array.isArray(path) && path.length > 2){

            var pathArr = new Array();
            path.forEach(function (pos) {
                var p = {};
                var arr = new Array();
                arr.push(pos.lng);
                arr.push(pos.lat);
                p.lnglat = arr;
                pathArr.push(p);
            });


            map.truckRoute.search(pathArr,function (status,result) {
                console.log(status);
                console.log(result);
            })
        }

    }


    //TODO:给定点时在地图做标记
    map.LoadMarkers = function (points) {
        if(map.CustomMarkers.length>0){
            map.CustomMarkers.forEach(function (marker) {
                map.aMap.remove(marker);
            })
        }

        map.CustomMarkers = [];
        if(Array.isArray(points)){
            for(var i = 0;i<points.length;i++){
                var item = points[i];

                var cMarker = new AMap.Marker();

                //设置点标记上下文
                cMarker.dataContext = item;

                //TODO:监听点击事件
                cMarker.on("click",map.OnMarkerClick);

                cMarker.setPosition(new AMap.LngLat(item.lng, item.lat));
                if(item.title){
                    cMarker.setTitle(item.title);
                }
                 if(item.label){
                    var content = "<div class='info'>"+item.label+"</div>";
                    cMarker.label = item.label;
                    cMarker.setLabel({
                        //修改label相对于maker的位置
                        offset: new AMap.Pixel(20, 20),
                        content:content
                    });
                 }

                cMarker.setAnimation("AMAP_ANIMATION_DROP");
                map.aMap.add(cMarker);
                map.CustomMarkers.push(cMarker);
            }
        }
        //地图缩放至显示标记点
        map.aMap.setFitView(map.CustomMarkers);

    }

    //点击的标记的信息
    map.ClickedMarkerData = {};

    map.OnMarkerClick = function () {
        console.log("点标记点击了");

        var title = this.getTitle();
        var label = this.getLabel();
        var lng = this.getPosition().getLng();
        var lat = this.getPosition().getLat();

        map.ClickedMarkerData.title = title;
        map.ClickedMarkerData.label = label;
        map.ClickedMarkerData.lng = lng;
        map.ClickedMarkerData.lat = lat;


        console.log(map.ClickedMarkerData);

        if (map.Command != undefined && map.Command != null) {
            map.Command.Sender = map;
            map.Command.Execute();
        }

        if(map.MarkerClick != undefined && map.MarkerClick.GetType() == "Command"){
            map.MarkerClick.Sender = map;
            map.MarkerClick.Execute();
        }

        if(map.MarkerClick != undefined && map.MarkerClick.GetType() == "function"){
            map.MarkerClick(e,map);
        }
    }



    //加载地图
    map.LoadMap = function () {
        //TODO:创建百度地图  平台代码冲突？？
        delete window[map.CbName];
        // try{
        //     var bMap = new BMap.Map("MapView");
        //     console.log(bMap);
        //     var centerPoint = new BMap.Point(116.404, 39.915);
        //     console.log(centerPoint);
        //     bMap.centerAndZoom(centerPoint,15);
        // }catch (error){
        //     console.log(error);
        // }

        //创建AMap
        map.CreateAMap();


        //创建点标记
        map.CreatePointMarker();

        //创建定位插件
        map.CreateGeolocation();

        //创建工具条等控件
        map.CreateMapControl();


        //信息窗体
        //构建信息窗体中显示的内容
        var info = [];
        info.push("<div><div><img style=\"float:left;\" src=\" https://webapi.amap.com/images/autonavi.png \"/></div> ");
        info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>高德软件</b>");
        info.push("电话 : 010-84107000   邮编 : 100102");
        info.push("地址 :北京市朝阳区望京阜荣街10号首开广场4层</div></div>");

        var  infoWindow = new AMap.InfoWindow({
            content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
        });
        //显示信息窗体
        // infoWindow.open(map.aMap, map.aMap.getCenter());

        //关闭信息窗体
        // infoWindow.close();

        
        //获取某类覆盖物 marker:点；polyline:线；polygon:面；
        // map.aMap.getAllOverlays("marker");

        //创建路径规划
        map.CreateRoutes();
        
    }


    map.OnLoad = function () {
        // map.LoadMap();
    }

    map.OnCreateHandle();

    return map;
}

DBFX.Serializer.MapSerializer = function () {
    //系列化
    this.Serialize = function (c, xe, ns) {
        // DBFX.Serializer.SerialProperty("Placeholder", c.Placeholder, xe);

        //序列化方法
        DBFX.Serializer.SerializeCommand("MapComplete", c.MapComplete, xe);
        DBFX.Serializer.SerializeCommand("MarkedPosition", c.MarkedPosition, xe);
        DBFX.Serializer.SerializeCommand("MarkerClick", c.MarkerClick, xe);
        DBFX.Serializer.SerializeCommand("POIListItemClick", c.POIListItemClick, xe);

    }

    //反系列化
    this.DeSerialize = function (c, xe, ns) {
        // DBFX.Serializer.DeSerialProperty("Placeholder", c, xe);

        //对方法反序列化
        DBFX.Serializer.DeSerializeCommand("MapComplete", xe, c);
        DBFX.Serializer.DeSerializeCommand("MarkedPosition", xe, c);
        DBFX.Serializer.DeSerializeCommand("MarkerClick", xe, c);
        DBFX.Serializer.DeSerializeCommand("POIListItemClick", xe, c);

    }
}

DBFX.Design.ControlDesigners.MapDesigner = function () {
    var obdc = new DBFX.Web.Controls.GroupPanel();
    obdc.OnCreateHandle();
    obdc.OnCreateHandle = function () {
        DBFX.Resources.LoadResource("design/DesignerTemplates/FormDesignerTemplates/MapDesigner.scrp", function (od) {
            od.DataContext = obdc.dataContext;
            //设计器中绑定事件处理
            od.EventListBox = od.FormContext.Form.FormControls.EventListBox;
            od.EventListBox.ItemSource = [{EventName:"MapComplete",EventCode:undefined,Command:od.dataContext.MapComplete,Control:od.dataContext},
                                            {EventName:"MarkedPosition",EventCode:undefined,Command:od.dataContext.MarkedPosition,Control:od.dataContext},
                                            {EventName:"MarkerClick",EventCode:undefined,Command:od.dataContext.MarkerClick,Control:od.dataContext},
                                            {EventName:"POIListItemClick",EventCode:undefined,Command:od.dataContext.POIListItemClick,Control:od.dataContext}];
        }, obdc);
    }

    //事件处理程序
    obdc.DataContextChanged = function (e) {
        obdc.DataBind(e);
        if(obdc.EventListBox != undefined){
            obdc.EventListBox.ItemSource = [{EventName:"MapComplete",EventCode:undefined,Command:obdc.dataContext.MapComplete,Control:obdc.dataContext},
                                            {EventName:"MarkedPosition",EventCode:undefined,Command:obdc.dataContext.MarkedPosition,Control:obdc.dataContext},
                                            {EventName:"MarkerClick",EventCode:undefined,Command:obdc.dataContext.MarkerClick,Control:obdc.dataContext},
                                            {EventName:"POIListItemClick",EventCode:undefined,Command:obdc.dataContext.POIListItemClick,Control:obdc.dataContext}];
        }
    }

    obdc.HorizonScrollbar = "hidden";
    obdc.OnCreateHandle();
    obdc.Class = "VDE_Design_ObjectGeneralDesigner";
    obdc.Text = "地图";
    return obdc;
}