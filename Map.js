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

    //地图显示要素 默认全部显示
    map.Features = ['bg','road','building','point'];

    //TODO:map.DesignTime  是否是设计时

    //标记位置
    //{P: 43.850344, R: 125.20754, lng: 125.20754, lat: 43.850344}
    map.MarkPosition = undefined;

    //城市信息{province: "吉林省", city: "长春市", citycode: "0431", district: "朝阳区"}
    map.City = undefined;

    //自定义的点标记数组
    map.CustomMarkers = [];

    //FIXME:百度地图  平台文件冲突 暂实现不了
    map.bMap = new Object();

    //高德地图
    map.aMap = new Object();

    //地图是否加载完成
    map.HasLoaded = false;

    map.routes = ["驾车路线","步行路线","公交路线","货车路线"];

    //通过正则表达式判断是否为手机端运行
    map.isPhone = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    console.log("是否为手机端"+map.isPhone);

    map.OnCreateHandle();
    map.OnCreateHandle = function () {
        map.VisualElement.innerHTML = "<div class='MapContainer'><div class=\"MapView\" id='MapView'/></div><div class='MapInfoPanel' id='MapInfoPanel'><div id='map123'></div></div>"+
            "<div class='MapPOIList'></div>"+
        "<div class='MapTool'>" +
            "<div class='MapSearchModule'><img class='MapUserLogo' draggable='false'><input type='text' id='MapSearchInput' class='MapSearchInput'><span class='MapSearchBtn'>搜索</span></div>" +
            "<span class='MapMarkBtn'>标记位置</span><select name='路线选择' class='MapRouteSelect'><option value =\"5\">路线选择</option></select></div></div>";
        map.MapDiv = map.VisualElement.querySelector("div.MapView");
        map.MapInfoPanel = map.VisualElement.querySelector("div.MapInfoPanel");
        map.MapSearchInput = map.VisualElement.querySelector("input.MapSearchInput");

        map.UserLogo = map.VisualElement.querySelector("img.MapUserLogo");
        map.UserLogo.src = "https://wfs.dbazure.cn/root//AppData/af18cdfd5dd14888bafa9d86f5352a88//efcdca8b871e4987aef1abe171041f08.png";
        //定位搜索工具栏
        map.MapTool = map.VisualElement.querySelector("div.MapTool");
        map.MapPOIList = map.VisualElement.querySelector("div.MapPOIList");
        map.MapSearchInput.placeholder = "搜索地址";
        map.SearchButton = map.VisualElement.querySelector("span.MapSearchBtn");
        //搜索按钮点击
        map.SearchButton.onclick = function(e){
            var kw = map.MapSearchInput.value;
            console.log(kw);
            map.SearchPlace(kw);
        }

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
        //AMap.ToolBar,AMap.Scale,AMap.OverView,AMap.MapType  1.4.11  1.4.15
        mapJS.src = "https://webapi.amap.com/maps?v=1.4.15&key=501c9ef49f34ed644919c827c3d98b98&callback="+map.CbName+"&plugin=AMap.DistrictLayer,AMap.ToolBar,AMap.Scale,AMap.OverView,AMap.MapType";
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

    //TODO:20201103---标注模式
    //标注模式时，不显示标记按钮和路径规划，点击地图时直接标记地点
    map.signMode = false;
    Object.defineProperty(map,"SignMode",{
        get:function () {
            return map.signMode;
        },
        set:function (v) {
            v=(v==true||v=="true");
            map.signMode = v;
            map.MapMarkBtn.style.display = v?"none":"inline-block";
        }
    });

    //TODO:地图类型： 普通交通地图、简易世界地图、简易中国地图、简易外国地图、简易省图
    map.mapStyle = "default";
    Object.defineProperty(map,"MapStyle",{
        get:function () {
            return map.mapStyle;
        },
        set:function (v) {
            map.mapStyle = v;
            if(map.aMap.getLayers){
                map.setStyle(map.mapStyle);
            }
        }
    });

    //设置地图样式
    map.setStyle = function (v) {
        console.log("设置地图类型");
        // //获取所有图层 然后移除
        // var layers = map.aMap.getLayers();
        // console.log(layers,"layers");
        // map.aMap.remove(layers);
        //
        // // 获取已经添加的覆盖物 然后移除
        // var overlays = map.aMap.getAllOverlays();
        // console.log(overlays,"overlays");
        // map.aMap.remove(overlays);

        switch (v){
            case "DisCountry"://简易国家地图
                map.DrawDisCountry(map.Config);
                break;
            case "DisProvince":
                map.DrawDisProvince(map.Config);
                break;
            case "DisWorld":
                map.DrawDisWorld(map.Config);
                break;
            default:
                map.DrawDefaultMap();
                break;
        }
    }

    //获取随机颜色值
    map.GetColorByRandom = function(){
        var rg = Math.floor(Math.random() * 155 + 50);
        return 'rgb(' + rg + ',' + rg + ',255)';
    }

    //TODO:绘制默认的交通地图 当前定位地点为中心点
    map.DrawDefaultMap = function () {
        map.aMap.setFeatures(map.Features);

        //获取城市信息
        map.aMap.getCity(function (result) {

            console.log("为Autocomplete设置城市代码");
            // console.log(result);
            // map.Zoom = map.zoom;
            map.City = result;

            map.autoComplete && map.autoComplete.setCity(result.citycode);
            map.transferRoute && map.transferRoute.setCity(result.citycode);
            map.aMap.setCity(result.citycode);
            // map.Zoom = map.zoom;
        });
        map.currentMarker && map.aMap.add(map.currentMarker);
    }

    //简易行政区图的配置项
    map.config = {};
    Object.defineProperty(map,"Config",{
        get:function () {
            return map.config;
        },
        set:function (v) {
            map.config = v;
        }
    });

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
                        var color = map.GetColorByRandom();
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
            adcode = '130000',
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
        map.aMap.setFitView();
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


    //网络访问请求方法
    map._ajax =  function (url, option, callback) {
        var defaultOption = {
            method: 'GET',
            dataType: 'JSON'
        };

        if (typeof option === 'function') {
            callback = option;
            option = defaultOption;
        } else {
            for (var key in defaultOption) {
                if (defaultOption.hasOwnProperty(key) && option[key] === undefined) {
                    option[key] = defaultOption[key];
                }
            }
        }

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0)) {
                    var response = xhr.responseText;

                    if (option.dataType === 'JSON') {
                        try {
                            response = JSON.parse(response);
                        } catch (err) {
                            return callback(err);
                        }

                        callback(null, response);
                    } else {
                        callback(new Error(url + ' request failed'));
                    }
                }
            }
        }
        xhr.open(option.method || 'GET', url);
        xhr.send();
    }

    //加载geoJSon图层
    map.LoadGeoJson = function(url,cb){
        map._ajax(url,function (err, geoJSON) {
            if (!err) {
                var geojson = new AMap.GeoJSON({
                    geoJSON: geoJSON,
                    // 还可以自定义getMarker和getPolyline
                    getPolygon: function (geojson, lnglats) {
                        // 计算面积
                        var area = AMap.GeometryUtil.ringArea(lnglats[0]);

                        return new AMap.Polygon({
                            path: lnglats,
                            fillOpacity: 1 - Math.sqrt(area / 8000000000),// 面积越大透明度越高
                            strokeColor: 'white',
                            fillColor: 'rgba(7,169,237,0.43)',
                            zIndex:2
                        });
                    }
                });
                map.aMap.clearMap();
                geojson.setMap(map.aMap);
                map.aMap.setFitView();
                console.log('GeoJSON 数据加载完成');
            }else {
                cb && cb(err);
            }

        });
    }

    //TODO:搜索工具图层显示设置
    //是否显示工具栏
    map.showTools = true;
    Object.defineProperty(map,"ShowTools",{
        get:function () {
            return map.showTools;
        },
        set:function (v) {

            if(v == true || v == "true"){
                map.showTools = true;
                map.MapTool.setAttribute("ShowTools","yes");
            }else {
                map.showTools = false;
                map.MapTool.setAttribute("ShowTools","no");
            }
        }
    });

    map.showSearchBarOnly = false;
    Object.defineProperty(map,"ShowSearchBarOnly",{
        get:function () {
            return map.showSearchBarOnly;
        },
        set:function (v) {

            if(v == true || v == "true"){
                map.showSearchBarOnly = true;

                map.MapTool.setAttribute("showSearchBarOnly","yes");
            }else {
                map.showSearchBarOnly = false;
                map.MapTool.removeAttribute("showSearchBarOnly");

            }
        }
    });

    //是否显示logo
    map.showLogo = false;
    Object.defineProperty(map,"ShowLogo",{
        get:function () {
            return map.showLogo;
        },
        set:function (v) {
            if(v == true || v == "true"){
                map.showLogo = true;
                map.HideLogo(false);
            }else {
                map.showLogo = false;
                map.HideLogo(true);
            }
        }
    });

    //是否显示版权信息
    map.showCR = false;
    Object.defineProperty(map,"ShowCR",{
        get:function () {
            return map.showCR;
        },
        set:function (v) {

            if(v == true || v == "true"){
                map.showCR = true;
                map.HideCR(false);
            }else {
                map.showCR = false;
                map.HideCR(true);
            }
        }
    });

    //隐藏logo
    map.HideLogo = function (h) {
        //隐藏logo
        map.logoImg = map.VisualElement.querySelector("a.amap-logo");
        if(map.logoImg){
            map.logoImg.removeAttribute("href");
            map.logoImg.style.display = h? "none":"block";
            map.logoImg.style.visibility = h? "hidden":"visible";
        }
    }

    //隐藏版权信息
    map.HideCR = function (h) {
        //隐藏版权信息
        map.copyInfo = map.VisualElement.querySelector("div.amap-copyright");
        if(map.copyInfo){
            map.copyInfo.style.bottom = h?"-3000px":"1px";
        }
    }

    ////显示要素，分别是：区域面、道路、建筑物、标注；
    // map.aMap.setFeatures(['bg', 'road', 'building', 'point']);

    //显示区域面
    map.showBG = true;
    Object.defineProperty(map,"ShowBG",{
        get:function () {
            return map.showBG;
        },
        set:function (v) {
            if(v == true || v == "true"){
                map.showBG = true;
                map.Features.indexOf('bg')<0 ? map.Features.push('bg'):"";
            }else {
                map.showBG = false;
                map.Features.indexOf('bg')<0 ? "":delete map.Features[map.Features.indexOf('bg')];
            }
            if(map.aMap.setFeatures)
                map.aMap.setFeatures(map.Features);
        }
    });

    //显示道路
    map.showRoad = true;
    Object.defineProperty(map,"ShowRoad",{
        get:function () {
            return map.showRoad;
        },
        set:function (v) {
            if(v == true || v == "true"){
                map.showRoad = true;
                map.Features.indexOf('road')<0 ? map.Features.push('road'):"";
            }else {
                map.showRoad = false;
                map.Features.indexOf('road')<0 ? "":delete map.Features[map.Features.indexOf('road')];
            }
            if(map.aMap.setFeatures)
                map.aMap.setFeatures(map.Features);
        }
    });

    //显示建筑物
    map.showBuilding = true;
    Object.defineProperty(map,"ShowBuilding",{
        get:function () {
            return map.showBuilding;
        },
        set:function (v) {

            if(v == true || v == "true"){
                map.showBuilding = true;
                map.Features.indexOf('building')<0 ? map.Features.push('building'):"";
            }else {
                map.showBuilding = false;
                map.Features.indexOf('building')<0 ? "":delete map.Features[map.Features.indexOf('building')];
            }
            if(map.aMap.setFeatures)
                map.aMap.setFeatures(map.Features);
        }
    });

    //显示标注
    map.showPoint = true;
    Object.defineProperty(map,"ShowPoint",{
        get:function () {
            return map.showPoint;
        },
        set:function (v) {
            if(v == true || v == "true"){
                map.showPoint = true;
                map.Features.indexOf('point')<0 ? map.Features.push('point'):"";
            }else {
                map.showPoint = false;
                map.Features.indexOf('point')<0 ? "": delete map.Features[map.Features.indexOf('point')];
            }
            if(map.aMap.setFeatures)
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
            if(v == true || v == "true"){
                map.dragEnable = true;
            }else {
                map.dragEnable = false;
            }
            map.aMap.setStatus && map.aMap.setStatus({dragEnable:map.dragEnable});
        }
    });

    //地图是否可通过双击鼠标放大地图，默认为true
    map.doubleClickZoom = true;
    Object.defineProperty(map,"DoubleClickZoom",{
        get:function () {
            return map.doubleClickZoom;
        },
        set:function (v) {

            if(v == true || v == "true"){
                map.doubleClickZoom = true;
            }else {
                map.doubleClickZoom = false;
            }
            map.aMap.setStatus && map.aMap.setStatus({doubleClickZoom:map.doubleClickZoom});
        }
    });

    //地图是否可缩放，默认值为true
    map.zoomEnable = true;
    Object.defineProperty(map,"ZoomEnable",{
        get:function () {
            return map.zoomEnable;
        },
        set:function (v) {
            if(v == true || v == "true"){
                map.zoomEnable = true;
            }else {
                map.zoomEnable = false;
            }
            map.aMap.setStatus && map.aMap.setStatus({zoomEnable:map.zoomEnable});
        }
    });


    //TODO:设置zoom 缩放级别 PC：[3,18]; App:[3,19];
    map.zoom = 3;
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
        if(map.aMap.setZoom)
            map.aMap.setZoom(z);
    }


    //FIXME:加载百度地图  平台不能使用!!!
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

    map.PlaceSearch = undefined;
    map.PlaceSearchNearBy = function (config,keyword) {


        if(typeof config != "object"){
            return;
        }

        var panel = config.panel;
        if(panel && panel.VisualElement){
            panel = panel.VisualElement;
        }else {
            panel = map.MapPOIList;
        }


        AMap.service(["AMap.PlaceSearch"], function() {

            //构造地点查询类
            var placeSearch = new AMap.PlaceSearch({
                type: config.type || "", // 兴趣点类别
                pageSize: config.pageSize || 5, // 单页显示结果条数 取值范围1-50，超出取值范围按最大值返回
                pageIndex: config.pageIndex || 1, // 页码 取值范围1-100，超多实际页数不返回poi
                city: config.city || map.City.citycode, // 兴趣点城市  默认为地图当前定位城市
                // citylimit: true,  //是否强制限制在设置的城市内搜索
                map: map.aMap, // 展现结果的地图实例
                panel: panel, // 结果列表将在此容器中进行展示。
                autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
            });

            var cpoint = config.cpoint; //中心点坐标

            if(keyword){
                //通过关键词进行搜索
                placeSearch.search(keyword,function (status,result) {
                    switch (status) {
                        case "complete":
                            map.SearchResults = result["poiList"]["pois"];
                            break;
                        case "error":
                        case "no_data":
                        default:
                            map.SearchResults = [];
                            break;
                    }
                    map.OnPlaceSearchCompleted();
                });
            }else {
                //根据中心点经纬度、半径以及关键字进行周边查询
                placeSearch.searchNearBy('', cpoint, config.radius||2000, function(status, result) {

                        switch (status) {
                            case "complete":
                                map.SearchResults = result["poiList"]["pois"];
                                break;
                            case "error":
                            case "no_data":
                            default:
                                map.SearchResults = [];
                                break;
                        }
                    map.OnPlaceSearchCompleted();
                });
            }


            //SCE:SelectChangeEvent对象
            placeSearch.on("listElementClick",function (SCE) {
                //SCE:点击兴趣点搜索结果列表中某一个地点时 返回该地点信息
                map.OnPOIListItemClick(SCE);
                var itemData = SCE["data"];
                //选中的搜索结果对象
                map.SearchResult = itemData;
                map.SearchResult.district = (itemData["pname"] || "") +(itemData["cityname"] || "")+(itemData["adname"] || "");

                //TODO：20191018 添加地图搜索结果选中完成事件
                if (map.SearchResultSelect != undefined) {
                    if (map.SearchResultSelect.GetType != undefined && map.SearchResultSelect.GetType() == "Command") {
                        map.SearchResultSelect.Sender = map;
                        map.SearchResultSelect.Execute();
                    }
                    if (typeof (map.SearchResultSelect) == "function")
                        map.SearchResultSelect(map.SearchResult);
                }
            });

            map.PlaceSearch = placeSearch;
        });
    }

    //搜索完成时
    //搜索的结果集合
    map.SearchResults = [];
    map.OnPlaceSearchCompleted = function(){
        console.log(map.SearchResults);
        if (map.PlaceSearchCompleted != undefined) {
            if (map.PlaceSearchCompleted.GetType != undefined && map.PlaceSearchCompleted.GetType() == "Command") {
                map.PlaceSearchCompleted.Sender = map;
                map.PlaceSearchCompleted.Execute();
            }
            if (typeof (map.PlaceSearchCompleted) == "function")
                map.PlaceSearchCompleted(map.SearchResults);
        }
    }


    //TODO:绘制热力图 20190613
    //1、绘制中国地图时 各个省份的颜色
    //2、绘制省份地图时 各个城市的颜色
    //3、颜色辅助方法
    var configs = {

    };

    //TODO:热力图显示数据
    map.heatMapData = {};
    Object.defineProperty(map,"HeatMapData",{
        get:function () {
            return map.heatMapData;
        },
        set:function (v) {
            map.heatMapData = v;
            //
            if(map.heatmap){
                map.HeatMap(map.heatMapData);
            }
        }
    });

    map.HeatMap = function (dataSet) {

        console.log("设置热力图数据 显示热力图");
        //TODO:限制地图显示范围
        // var bounds = map.aMap.getBounds();
        // map.aMap.setLimitBounds(bounds);

        map.heatmap.setDataSet(dataSet);
        map.heatmap.show();
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


    //是否允许用户标记自己位置 获取位置信息 默认允许true,不允许为false;
    map.allowMarkPos = true;
    Object.defineProperty(map,"AllowMarkPos",{
        get:function () {
            return map.allowMarkPos;
        },
        set:function (v) {
            v=(v==true||v=="true");
            map.allowMarkPos = v;
            map.MapMarkBtn.style.display = v?"inline-block":"none";
        }
    });


    //是否定位当前位置信息
    map.allowGeolocation = true;
    Object.defineProperty(map,"AllowGeolocation",{
        get:function () {
            return map.allowGeolocation;
        },
        set:function (v) {
            v=(v==true||v=="true");
            map.allowGeolocation = v;
        }
    })

    //标记按钮点击
    map.isMarking = false;
    //标记位置按钮点击
    map.MarkBtnClick = function (e) {
        e.cancelBubble = true;
        console.log("标记按钮点击"+map.clickListener);
        /**
         * 方案2：点击标记按钮标记，标记时及时获取标记的位置
         */

        map.clickListener = AMap.event.addListener(map.aMap,"click",map.OnMapClick);


        //方案1：点击按钮时开始标记，再次点击按钮时结束标记。（暂废弃）
        return;
        if(!map.isMarking){
            //
            map.clickListener = AMap.event.addListener(map.aMap,"click",map.OnMapClick);


            // map.mouseupListener = AMap.event.addListener(map.aMap,"mouseup",map.OnMapMouseup);
            // map.touchendListener = AMap.event.addListener(map.aMap,"touchend",map.OnMapMouseup);
        }else {
            AMap.event.removeListener(map.clickListener);//移除事件，以绑定时返回的对象作为参数

            //更改按钮文字显示
            map.MapMarkBtn.innerText = "标记位置";

            //设置用户标记的位置
            map.MarkPosition = map.userMarker.getPosition();

            map.Geocoder.getAddress([map.MarkPosition.lng,map.MarkPosition.lat],function (status,result) {
                console.log(status);
                if(status == "complete"){

                    map.MarkPosition.address = result.regeocode.formattedAddress;
                    map.MarkPosition.addressInfo = result.regeocode.addressComponent;
                    // console.log(map.MarkPosition);
                }

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

            });

        }

        // map.isMarking = !map.isMarking;
        map.MapMarkBtn.innerText = map.isMarking==true ? "结束标记":"标记位置";
    }

    //地图点击结束
    map.OnMapMouseup = function (e) {
        console.log("点击结束");
    }

    //TODO:地图点击事件
    map.OnMapClick = function (e) {

        map.isMarking = false;
        // map.MapMarkBtn.innerText = "结束标记";
        //点击地图获取经纬度信息
        var lng = e.lnglat.lng;
        var lat = e.lnglat.lat;
        console.log(lng+"====="+lat);

        //标记模式时
        if(map.SignMode){
            map.currentMarker.setPosition(new AMap.LngLat(lng,lat));
            map.currentMarker.label = "您标记的位置";
            map.currentMarker.setLabel({
                //修改label相对于maker的位置
                offset: new AMap.Pixel(20, 20),
                // // 设置label标签
                // label默认蓝框白底左上角显示，样式className为：amap-marker-label
                content: "<div class='info'><span class='MapUserMarkerLabel'>您标记的位置</span></div>"
            });
            //获取用户标记的位置
            map.MarkPosition = map.currentMarker.getPosition();
        }else {
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
            //获取用户标记的位置
            map.MarkPosition = map.userMarker.getPosition();
        }


        map.Geocoder.getAddress([map.MarkPosition.lng,map.MarkPosition.lat],function (status,result) {
            console.log(status);
            if(status == "complete"){


                map.MarkPosition.address = result.regeocode.formattedAddress;
                map.MarkPosition.addressInfo = result.regeocode.addressComponent;
                console.log(map.MarkPosition);

            }

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

        });
    }

    //FIXME:设置标记 通过标记判断此方法执行过几次 然后执行相应的方法
    map.executeC= 0;
    //地图加载完成 搜索地点完成
    map.OnMapComplete = function (v) {
        map.executeC ++;

        console.log("地图加载完成！");
        console.log(map.executeC,"executeC");
        //设置地图样式
        map.SetMapStyle(map.aMapStyle);

        //设置地图显示样式
        map.MapStyle = map.mapStyle;

        //设置logo与版权信息
        map.ShowLogo = map.showLogo;
        map.ShowCR = map.showCR;

        //设置工具栏插件
        map.ShowToolBar = map.showToolBar;
        map.ShowScale = map.showScale;
        map.ShowOverView = map.showOverView;
        map.ShowMapType = map.showMapType;
        map.ShowSatellite = map.showSatellite;
        map.ShowRoadNet = map.showRoadNet;

        //交互设置
        map.DragEnable = map.dragEnable;
        map.DoubleClickZoom = map.doubleClickZoom;
        map.ZoomEnable = map.zoomEnable;

        //创建输入提示
        AMap.plugin('AMap.Autocomplete', function(info){

            console.log(info);
            // 实例化Autocomplete
            var autoOptions = {
                // input 为绑定输入提示功能的input的DOM ID
                input: "MapSearchInput"
            }

            console.log("实例化Autocomplete");

            map.autoComplete= new AMap.Autocomplete(autoOptions);
            console.log(map.autoComplete);
            // 无需再手动执行search方法，autoComplete会根据传入input对应的DOM动态触发search
            map.autoComplete.on("complete",function (result) {
                // console.log(result);
                // map.Zoom = map.Zoom;
            });

            map.autoComplete.on("select",function (obj) {
                var selectLoc = obj.poi.location;
                console.log(obj.poi);
                console.log(obj.poi.location);
                //选中的搜索结果对象
                map.SearchResult = obj.poi;
                //TODO：20191018 添加地图搜索结果选中完成事件
                if (map.SearchResultSelect != undefined) {
                    if (map.SearchResultSelect.GetType != undefined && map.SearchResultSelect.GetType() == "Command") {
                        map.SearchResultSelect.Sender = map;
                        map.SearchResultSelect.Execute();
                    }
                    if (typeof (map.SearchResultSelect) == "function")
                        map.SearchResultSelect(map.SearchResult);
                }

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
        if (map.allowMarkPos == true){
            map.userMarker = new AMap.Marker();
            // map.aMap.add(map.userMarker);
            map.userMarker.on("click",map.OnMarkerClick);
        }

        //TODO:第一次执行时 执行只需要执行一次的代码
        if(map.executeC == 1){
            console.log("执行一次的代码");



            //创建点标记
            map.CreatePointMarker();

            //创建工具条等控件
            map.CreateMapControl();

            //创建定位插件
            map.CreateGeolocation();

            map.CreatePlugins();

            //创建图层
            map.CreateLayer();

            //创建路径规划
            map.CreateRoutes();

            // map.Zoom = map.Zoom;

            //地图加载完成执行设置项
            map.aMap.setFeatures(map.Features);

            if(map.SignMode){
                map.clickListener = AMap.event.addListener(map.aMap,"click",map.OnMapClick);
            }

            //添加地图加载完成事件
            console.log("添加地图加载完成事件");
            if (map.MapComplete != undefined) {

                if (map.MapComplete.GetType != undefined && map.MapComplete.GetType() == "Command") {
                    map.MapComplete.Sender = map;
                    map.MapComplete.Execute();
                }

                if (typeof (map.MapComplete) == "function")
                    map.MapComplete(map);
            }

            //绘制热力图
            if(map.HeatMapData && map.HeatMapData.data && map.HeatMapData.data.length>0){
                // map.heatmap.setMap(map.aMap);

                //TODO:设置热力图选项 也可通过数据给定
                var options = {
                    radius: 25, //给定半径
                    opacity: [0, 0.8],
                    gradient: {
                        0.5: 'blue',
                        0.65: 'rgb(117,211,248)',
                        0.7: 'rgb(0, 255, 0)',
                        0.9: '#ffea00',
                        1.0: 'red'
                    }
                };

                options = map.HeatMapData.options || options;
                //设置heatMap样式
                map.heatmap.setOptions(options);
                map.HeatMap(map.HeatMapData);
            }
        }


        // map.aMap.setFitView();

        // console.log(map.aMap.getBounds());
        // map.aMap.setBounds(map.aMap.getBounds());
        map.HasLoaded = true;
        //设置显示比例
        // map.setMapZoom(map.Zoom);

        console.log('completeEnd');

    }


    //创建高德地图
    map.CreateAMap = function () {
        //创建高德地图
        map.aMap = new AMap.Map(map.MapDiv.id,{
            zoom:map.Zoom,//级别
            // center: [125.3247893, 43.8868593],//中心点坐标
            // viewMode:'2D'//使用3D视图
            // resizeEnable: true
            // features: ['bg', 'road', 'building', 'point']
            showIndoorMap:false,
            resizeEnable: true,
            keyboardEnable: false,
            rotateEnable: false
        });

        //地图事件绑定
        //地图加载完成
        map.aMap.on("complete", map.OnMapComplete);

        map.firstZoom = true;
        map.aMap.on("zoomstart", function (v) {
            console.log(v);

        });

        map.aMap.on("zoomend", function (v) {
            console.log(v);
            map.firstZoom = false;
        });

        map.aMap.on("zoomchange",function (v,a,b) {
            console.log(v);
            console.log(a);
            console.log(b);

            if(map.aMap.getZoom()!=map.zoom && map.firstZoom){

                map.Zoom = map.zoom;
                map.aMap.setFitView();
            }

        })

    }

    //创建点标记
    map.CreatePointMarker = function () {

        //允许定位当前位置
        if(map.allowGeolocation){
            //创建当前位置点"标记"
            map.currentMarker = new AMap.Marker({
                // position: new AMap.LngLat(125.3247893, 43.8868593),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                // title: '长春',
                // 设置是否可以拖拽
                draggable: false,
                cursor: 'move',
                // 设置拖拽效果
                raiseOnDrag: true
            });
            map.aMap.add(map.currentMarker);
            map.currentMarker.on("click",map.OnMarkerClick);
            // 设置点标记的动画效果，此处为弹跳效果
            map.currentMarker.setAnimation('AMAP_ANIMATION_DROP');
        }


        //构造目标点标记
        map.targetMarker = new AMap.Marker({
            offset: new AMap.Pixel(-13, -30),
            // 设置是否可以拖拽
            draggable: false,
            cursor: 'move',
            // 设置拖拽效果
            raiseOnDrag: true
        });
        map.targetMarker.setAnimation('AMAP_ANIMATION_DROP');

        map.targetMarker.on("click",map.OnMarkerClick);

    }

    //创建定位插件
    map.CreateGeolocation = function () {
        if(!map.allowGeolocation){
            return;
        }


        //定位插件
        map.aMap.plugin("AMap.Geolocation",function () {
            map.Geolocation = new AMap.Geolocation({
                // 是否使用高精度定位，默认：true
                enableHighAccuracy: true,
                // 设置定位超时时间，默认：无穷大
                // timeout: 10000,
                // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                // buttonOffset: new AMap.Pixel(10, 20),
                GeoLocationFirst:true,
                //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                zoomToAccuracy: false,
                //  定位按钮的排放位置,  RB表示右下
                // buttonPosition: 'RB',


                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                showButton: true,        //显示定位按钮，默认：true
                buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
                buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });

            //TODO:标记模式 显示定位插件
            if(map.SignMode){
                map.aMap.addControl(map.Geolocation);

                //模式1、标记点始终处于地图中心，移动地图后，获取地图中心位置为标记位置，但是只能在其他事件中获取标记的位置信息；
                // var center = map.aMap.getCenter();
                // map.currentMarker.setPosition(center);
                // AMap.event.addListener(map.aMap,"dragging",function (para) {
                //     console.log(para);
                //     var center = map.aMap.getCenter();
                //     map.currentMarker.setPosition(center);
                // });

            //    2、点击地图时，移动标记到点击处，执行点击事件，实时获取点击的位置信息；
                map.currentMarker.setLabel({
                    //修改label相对于maker的位置
                    offset: new AMap.Pixel(20, 20),
                    // // 设置label标签
                    // label默认蓝框白底左上角显示，样式className为：amap-marker-label
                    content: "<div class='info'><span class='MapCurrentMarkerLabel'>您标记的位置</span></div>"
                });

            }


            map.Geolocation.getCurrentPosition();

            //定时的获取当前位置信息  默认一分钟刷新一次
            // map.LiveLocationTimeId = setInterval(function () {
            //     console.log("map.CreateGeolocation");
            //     map.Geolocation.getCurrentPosition();
            // },30000);

            //监听获取位置信息完成的状态
            AMap.event.addListener(map.Geolocation, 'complete', map.OnLiveLocation);
            AMap.event.addListener(map.Geolocation, 'error', map.OnLiveLocation);

        });
    }

    //设置地图样式
    /**官方提供
     *标准-normal；马卡龙-macaron；涂鸦-graffiti；远山黛-whitesmoke；幻影黑-dark；
     *草色青-fresh；极夜蓝-darkblue；靛青蓝-blue；月光银-light；雅士灰-grey；
     * 酱籽-wine；
     * 还可以自定义地图平台
     */
    map.SetMapStyle = function(style){
        map.aMap && map.aMap.setMapStyle && map.aMap.setMapStyle('amap://styles/'+style);
    }

    map.aMapStyle = "normal";
    Object.defineProperty(map,"AMapStyle",{
        get:function () {
            return map.aMapStyle;
        },
        set:function (v) {
            map.aMapStyle = v;
            map.SetMapStyle(v);
        }
    });

    //刷新当前位置信息的时间间隔
    map.liveLocationTime = 30000;
    Object.defineProperty(map,"LiveLocationTime",{
        get:function () {
            return map.liveLocationTime;
        },
        set:function (v) {
            var t = v*1;
            if(v==undefined||v==" "||isNaN(t)||t<=0){
                map.liveLocationTime = " ";
                setTimeout(function () {
                    clearInterval(map.LiveLocationTimeId);
                    map.Geolocation && map.Geolocation.getCurrentPosition();
                },500);
            }else {
                map.liveLocationTime = t;
                //延时执行 为了清除之前的定时器
                setTimeout(function () {
                    clearInterval(map.LiveLocationTimeId);
                    //定时的获取当前位置信息
                    map.LiveLocationTimeId = setInterval(function () {
                        map.Geolocation && map.Geolocation.getCurrentPosition();
                    },t);
                },500);
            }
        }
    });

    //获取当前的位置信息 触发OnLiveLocation事件
    map.GetCurrentPosition = function(){
        //是否获取当前位置信息
        if(!map.allowGeolocation){
            return;
        }

        // map.Zoom = map.zoom;

        map.LiveLocationTimeId && clearInterval(map.LiveLocationTimeId);
        //定时的获取当前位置信息
        if(map.liveLocationTime==""){
            map.Geolocation && map.Geolocation.getCurrentPosition();
        }else {
            map.LiveLocationTimeId = setInterval(function () {
                map.Geolocation && map.Geolocation.getCurrentPosition();
            },map.liveLocationTime);
        }
    }

    //实时获取当前的位置信息
    map.CurrentPosition = {};
    map.OnLiveLocation = function (data) {
        //是否获取当前位置信息
        if(!map.allowGeolocation){
            return;
        }
        //20191016 记录当前的位置信息
        // map.Zoom = map.zoom;
        if(data.status == 0){//定位失败{"type":"error","message":"Get geolocation time out.Get ipLocation failed.","info":"FAILED","status":0}
            // console.log("定位失败"+JSON.stringify(data));
            //TODO:定位失败需要为用户做个提醒
            map.CurrentPosition.status = 0;
            map.CurrentPosition.type = data.type;
            map.CurrentPosition.message = data.message;
            map.CurrentPosition.info = data.info;//FAILED、NOT_SUPPORTED

        }else {//定位成功
            // console.log("定位完成"+JSON.stringify(data["position"]));

            map.CurrentPosition.status = 1;
            map.CurrentPosition.type = data.location_type;
            map.CurrentPosition.message = data.message;
            map.CurrentPosition.info = data.info;
            map.CurrentPosition.lng = data.position.lng;
            map.CurrentPosition.lat = data.position.lat;
            map.CurrentPosition.addressComponent = data.addressComponent;
            map.CurrentPosition.formattedAddress = data.formattedAddress;

            map.currentMarker.setPosition(new AMap.LngLat(data.position.lng, data.position.lat));
            map.aMap.setCenter(new AMap.LngLat(data.position.lng, data.position.lat));
            // map.currentMarker.label = "您所在位置";
            var t = "您所在位置";
            t = map.SignMode?"您标记的位置":t;
            map.currentMarker.setLabel({
                //修改label相对于maker的位置
                offset: new AMap.Pixel(20, 20),
                // // 设置label标签
                // label默认蓝框白底左上角显示，样式className为：amap-marker-label
                content: "<div class='info'><span class='MapCurrentMarkerLabel'>"+t+"</span></div>"
            });
        }

        if(map.LiveLocation != undefined && map.LiveLocation.GetType() == "Command"){
            map.LiveLocation.Sender = map;
            map.LiveLocation.Execute();
        }

        if(map.LiveLocation != undefined && map.LiveLocation.GetType() == "function"){
            map.LiveLocation(map,data);
        }
    }


    //TODO:显示卫星图层
    map.showSatellite = false;
    Object.defineProperty(map,"ShowSatellite",{
        get:function () {
            return map.showSatellite;
        },
        set:function (v) {

            if(v == true || v == "true"){
                map.showSatellite = true;
                map.aMap && map.satelliteLayer && map.aMap.add(map.satelliteLayer);
            }else {
                map.showSatellite = false;
                map.aMap && map.satelliteLayer && map.aMap.remove(map.satelliteLayer);
            }
        }
    });

    //TODO:显示路网图层
    map.showRoadNet = false;
    Object.defineProperty(map,"ShowRoadNet",{
        get:function () {
            return map.showRoadNet;
        },
        set:function (v) {

            if(v == true || v == "true"){
                map.showRoadNet = true;
                map.aMap && map.roadNetLayer && map.aMap.add(map.roadNetLayer);
            }else {
                map.showRoadNet = false;
                map.aMap && map.roadNetLayer && map.aMap.remove(map.roadNetLayer);
            }
        }
    });

    //TODO:创建图层
    map.CreateLayer = function () {
        // 构造官方卫星、路网"图层"
        map.satelliteLayer = new AMap.TileLayer.Satellite();
        map.roadNetLayer =  new AMap.TileLayer.RoadNet();

        //批量添加"图层"
        // map.aMap.add([satelliteLayer, roadNetLayer]);

        //添加单个"图层"
        // map.aMap.add(roadNetLayer);

        //移除"图层"
        // map.aMap.remove(satelliteLayer);
    }

    //TODO:显示工具条
    map.showToolBar = false;
    Object.defineProperty(map,"ShowToolBar",{
        get:function () {
            return map.showToolBar;
        },
        set:function (v) {

            if(v == true || v == "true"){
                map.showToolBar = true;
                map.aMap && map.ToolBar && map.aMap.addControl(map.ToolBar);
            }else {
                map.showToolBar = false;
                map.aMap && map.ToolBar && map.aMap.remove(map.ToolBar);
            }
        }
    });

    //TODO:显示比例尺
    map.showScale = false;
    Object.defineProperty(map,"ShowScale",{
        get:function () {
            return map.showScale;
        },
        set:function (v) {

            if(v == true || v == "true"){
                map.showScale = true;
                map.aMap && map.Scale && map.aMap.addControl(map.Scale);
            }else {
                map.showScale = false;
                map.aMap && map.Scale && map.aMap.remove(map.Scale);
            }
        }
    });

    //TODO:显示鹰眼
    map.showOverView = false;
    Object.defineProperty(map,"ShowOverView",{
        get:function () {
            return map.showOverView;
        },
        set:function (v) {

            if(v == true || v == "true"){
                map.showOverView = true;
                map.aMap && map.OverView && map.aMap.addControl(map.OverView);
            }else {
                map.showOverView = false;
                map.aMap && map.OverView && map.aMap.remove(map.OverView);
            }
        }
    });

    //TODO:显示地图类型切换
    map.showMapType = false;
    Object.defineProperty(map,"ShowMapType",{
        get:function () {
            return map.showMapType;
        },
        set:function (v) {

            if(v == true || v == "true"){
                map.showMapType = true;
                map.aMap && map.MapType && map.aMap.addControl(map.MapType);
            }else {
                map.showMapType = false;
                map.aMap && map.MapType && map.aMap.remove(map.MapType);
            }
        }
    });


    //TODO:创建控件  工具条、比例尺、鹰眼控件、类别切换控件
    map.CreateMapControl = function () {
        //工具条、比例尺、鹰眼控件、类别切换控件  PC端选择性添加  App端不添加

        //"AMap.DistrictLayer"-简易行政区图层

        // AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView','AMap.MapType'],function () {
        //
        //     console.log("异步加载插件");
        //     //1、工具条  工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
        //     map.ToolBar = new AMap.ToolBar();
        //
        //     //2、比例尺插件。位于地图右下角，用户可控制其显示与隐藏。
        //     map.Scale = new AMap.Scale();
        //
        //     //3、地图鹰眼插件。
        //     map.OverView = new AMap.OverView();
        //
        //     //4、地图类型切换插件。用户通过该插件进行地图切换。
        //     map.MapType = new AMap.MapType();
        //
        // });

        //1、工具条  工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
        map.ToolBar = new AMap.ToolBar();

        //2、比例尺插件。位于地图右下角，用户可控制其显示与隐藏。
        map.Scale = new AMap.Scale();

        //3、地图鹰眼插件。
        map.OverView = new AMap.OverView();

        //4、地图类型切换插件。用户通过该插件进行地图切换。
        map.MapType = new AMap.MapType();

    }

    //创建地图插件
    map.CreatePlugins = function () {

        //创建热力图/定位与地址、行政区查询
        map.aMap.plugin(["AMap.Heatmap","AMap.Geocoder","AMap.DistrictSearch"], function () {
            //初始化heatmap对象
            map.heatmap = new AMap.Heatmap();
            map.aMap.add(map.heatmap);

            //创建坐标与地址插件
            map.Geocoder = new AMap.Geocoder();

            //创建行政区查询
            map.DistrictSearch  = new AMap.DistrictSearch( {
                subdistrict: 1,   //返回下一级行政区
                showbiz:false  //最后一级返回街道信息
            });

            // map.Zoom = map.Zoom;
        });


    }

    //搜索行政区
    map.Polygons = [];
    map.SearchDistrict = function(adcode,level){
        if(!map.DistrictSearch) return;

        //清除地图上Polygon覆盖物
        for (var i = 0, l = map.Polygons.length; i < l; i++) {
            map.Polygons[i].setMap(null);
        }
        if(level){
            map.DistrictSearch && map.DistrictSearch.setLevel(level); //行政区级别
            map.DistrictSearch && map.DistrictSearch.setExtensions('all');
        }


        map.DistrictSearch.search(adcode,function (status,result) {
            if(status == 'complete'){
                map.OnGetDistrictData(result.districtList[0]);
            }
        })
    }

    //获取行政区数据
    map.OnGetDistrictData = function(data,level){
        var bounds = data.boundaries;
        if (bounds) {
            for (var i = 0, l = bounds.length; i < l; i++) {
                var polygon = new AMap.Polygon({
                    map: map.aMap,
                    strokeWeight: 1,
                    strokeColor: '#0091ea',
                    fillColor: '#80d8ff',
                    fillOpacity: 0.2,
                    path: bounds[i]
                });
                map.Polygons.push(polygon);
            }
            map.aMap.setFitView();//地图自适应
        }

        map.DistrictList = data.districtList;
        // console.log(map.DistrictList);

        if(map.DistrictList){
            if(map.GetDistrictData != undefined && map.GetDistrictData.GetType() == "Command"){
                map.GetDistrictData.Sender = map;
                map.GetDistrictData.Execute();
            }

            if(map.GetDistrictData != undefined && map.GetDistrictData.GetType() == "function"){
                map.GetDistrictData(map);
            }
        }

    }

    //带检索功能的信息窗体
    map.CreateAdvancedInfoWindow = function () {
        AMap.plugin("AMap.AdvancedInfoWindow",function () {
            var advancedInfo = new AMap.AdvancedInfoWindow({
                panel:"MapInfoPanel",
                autoMove:true,
                closeWhenClickMap:false,
                offset: new AMap.Pixel(0, -30)
            });
            advancedInfo.open(map.aMap,map.aMap.getCenter());
            // map.aMap.addControl(advancedInfo);
        });
    }

    /******************************创建路径规划******************************************/
    map.CreateRoutes = function () {
        AMap.plugin(['AMap.Driving',
            'AMap.TruckDriving',
            'AMap.Transfer','AMap.Walking',"AMap.Riding","AMap.DragRoute"
        ],function () {
            //驾车路线规划服务，提供可带途经点的起点、终点的驾车导航路线查询功能
            map.drivingRoute = new AMap.Driving({
                map:map.aMap,
                hideMarkers:true
            });

            //货车路线规划服务，提供可带途经点的起点、终点之间的货车导航路线查询功能
            map.truckRoute =new AMap.TruckDriving({
                map:map.aMap,
                size:4,//默认大型货车
                policy:3,
                hideMarkers:true
            });

            //公交换乘服务，提供起、终点公交路线规划服务，整合步行方式
            map.transferRoute = new AMap.Transfer({
                map:map.aMap
            });

            //步行导航服务，提供起、终点步行路线规划服务
            map.walkingRoute = new AMap.Walking({
                map:map.aMap
            });

            //骑行路径规划服务，提供起、终点骑行路线规划服务
            map.ridingRoute = new AMap.Riding({map:map.aMap});

            //拖拽导航插件
            map.dragRoute = new AMap.DragRoute({map:map.aMap});

        });
    }


    /***
     * 绘制驾车路线
     * @param points  路线上顺序经过的点{"lng":123.000,"lat":32.000}集合，起始点-经过点（）-终点
     * @param policy    数值 驾车路线规划策略：1-最快捷模式(默认)，2-最经济模式，3-最短距离模式，4-考虑实时路况
     * @param cb        路线规划后回调函数
     * @constructor
     */
    //LngLat类  构造函数AMap.LngLat(lng:Number,lat:Number,noAutofix:bool)
    map.drivingMarkers = [];
    map.DrawDrivingRoute = function (points,policy,cb) {

        if(!(Array.isArray(points) && points.length >= 2)) return;
        //AMap.DrivingPolicy
        // {LEAST_TIME: 0, LEAST_FEE: 1, LEAST_DISTANCE: 2, REAL_TRAFFIC: 4}
        var p = policy*1;
        switch (p){
            case 2: //2-最经济模式  AMap.DrivingPolicy.LEAST_FEE
                map.drivingRoute.setPolicy(AMap.DrivingPolicy.LEAST_FEE);
                break;
            case 3: //3-最短距离模式
                map.drivingRoute.setPolicy(AMap.DrivingPolicy.LEAST_DISTANCE);
                break;
            case 4: //4-考虑实时路况
                map.drivingRoute.setPolicy(AMap.DrivingPolicy.REAL_TRAFFIC);
                break;
            case 1:
            default:
                map.drivingRoute.setPolicy(AMap.DrivingPolicy.LEAST_TIME);
                break;
        }

        var waypoints = [];
        var origin = {};
        var des = {};
        points.forEach(function (p,index) {
            var lnglat = new AMap.LngLat(p.lng,p.lat,true);
            if(index == 0){
                origin = lnglat;
            }else if(index == points.length-1){
                des = lnglat;
            }else {
                waypoints.push(lnglat);
            }
        });

        //绘制标记
        map.LoadMarkers(points,map.drivingMarkers);

        //status为complete时，result为DrivingResult；当status为error时，result为错误信息info；
        map.drivingRoute.search(origin,des,{"waypoints":waypoints},function (s,r) {
            if(typeof cb == "function") cb(s,r);
        });
    }


    /**
     *  绘制带经过点的货车路线
     * @param points  路线上顺序经过的点{"lng":123.000,"lat":32.000}集合
     * @param policy  路线规划策略，1-9
     * @param cb      路线规划后回调函数
     * @constructor
     */
    map.DrawTruckRoute = function (points,policy,cb) {

        if(!(Array.isArray(points) && points.length >= 2) || !map.truckRoute) return;
        var p = policy*1;
        p = (p>=1&&p<=9)?p:1;
        if(map.truckRoute.setPolicy) map.truckRoute.setPolicy(p);

        var pathArr = new Array();
        points.forEach(function (pos) {
            var p = {};
            var arr = new Array();
            arr.push(pos.lng);
            arr.push(pos.lat);
            p.lnglat = arr;
            pathArr.push(p);
        });


        map.truckRoute.search(pathArr,function (status,result) {
            if(typeof cb == "function") cb(status,result);
        });

    }


    //
    map.truckRouteMarkers = [];
    /**
     * 绘制最短的货车路径规划路线
     * @param points  路线上需要经过的点 第一个为起始点，其余为经过点
     * @param cb      规划路径后的回调函数
     * @constructor
     */
    map.DrawTruckShortPath = function (points,cb) {

        if(!(Array.isArray(points) && points.length >= 2) || !map.truckRoute) return;

        var startP = [];
        var pathArr = new Array();
        var otherArr = new Array();
        points.forEach(function (pos,index) {
            // var p = {};
            //online为0时  不绘制在路径上
            if(pos.online != 0 || pos.online != "0"){
                var arr = new Array();
                arr.push(pos.lng);
                arr.push(pos.lat);
                if(index==0){
                    startP = arr;
                }else {
                    otherArr.push(arr);
                }
            }
        });

        pathArr.push(startP);

        var curStart = startP;
        var tempP = [];
        var tempI = 0;

        while (otherArr.length>0){
            var minDis = Number.MAX_VALUE;
            for(var i=0;i<otherArr.length;i++){
                //计算两个点之间的直线距离
                var dis = AMap.GeometryUtil.distance(curStart, otherArr[i]);
                if(dis<minDis){
                    minDis = dis;
                    tempP = otherArr[i];
                    tempI = i;
                }
            }

            pathArr.push(tempP);
            curStart = tempP;
            otherArr.splice(tempI,1);
        }

        var pathArrs = [];
        pathArr.forEach(function (value) {
            var p = {};
            p.lnglat = value;
            pathArrs.push(p);
        });


        if(pathArrs.length<2) return;

        //绘制路径规划  规划出行驶最短的路线
        map.truckRoute && map.truckRoute.search(pathArrs,function (status,result) {
            if(typeof cb == "function") cb(status,result);
        });

        map.LoadMarkers(points,map.truckRouteMarkers);

    }

    /**
     * 规划公交路线
     * @param start  起始点{"lng":123.000,"lat":32.000}或{"keyword":"北京南站"}
     * @param des    终点 {"lng":123.000,"lat":32.000}或{"keyword":"北京西站"}
     * @param options  参数配置 {"city":"0431"}city-String 公交换乘的城市，支持城市名称、城市区号、电话区号，此项为必填
     * @param cb        规划路径后的回调函数
     * @constructor
     */
    map.DrawTransferRoute = function (start,des,options,cb)   {
        //没有起始点信息就不绘制
        if(!start || !des || !options.city) return;
        //TODO:获取当前城市编码  作为默认的公交搜索城市

        var p = options.policy*1;//LEAST_FEE: 1;LEAST_TIME: 0;LEAST_TRANSFER: 2;LEAST_WALK: 3;MOST_COMFORT: 4;NO_SUBWAY: 5
        p=(p>=0 && p<=5)?p:0;

        map.transferRoute.setPolicy(p);
        map.transferRoute.setCity(options.city);

        if(start.keyword && des.keyword){
            map.transferRoute.search([start,des],function (status,result) {
                if(typeof cb == "function") cb(status,result);
            });
        }else{
            var s = new AMap.LngLat(start.lng,start.lat,true);
            var d = new AMap.LngLat(des.lng,des.lat,true);
            map.transferRoute.search(s,d,function (status,result) {
                if(typeof cb == "function") cb(status,result);
            });
        }
    }


    /**
     * 规划骑行路线
     * @param start  起始点{"lng":123.000,"lat":32.000}或{"keyword":"北京南站"}
     * @param des    终点 {"lng":123.000,"lat":32.000}或{"keyword":"北京西站"}
     * @param cb
     * @constructor
     */
    map.DrawRidingRoute = function(start,des,cb){
        //没有起始点信息就不绘制
        if(!(start && des)) return;
        if(start.keyword && des.keyword){
            map.ridingRoute && map.ridingRoute.search([start,des],function (status,result) {
                if(typeof cb == "function") cb(status,result);
            });
        }else{
            var s = new AMap.LngLat(start.lng,start.lat,true);
            var d = new AMap.LngLat(des.lng,des.lat,true);
            map.ridingRoute && map.ridingRoute.search(s,d,function (status,result) {
                if(typeof cb == "function") cb(status,result);
            });
        }
    }


    /**
     * 规划步行路线
     * @param start  起始点{"lng":123.000,"lat":32.000}或{"keyword":"北京南站"}
     * @param des    终点 {"lng":123.000,"lat":32.000}或{"keyword":"北京西站"}
     * @param cb 回调函数
     */
    map.DrawWalkingRoute = function(start,des,cb){
        //没有起始点信息就不绘制
        if(!(start && des)) return;
        if(start.keyword && des.keyword){
            map.walkingRoute && map.walkingRoute.search([start,des],function (status,result) {
                if(typeof cb == "function") cb(status,result);
            });
        }else{
            var s = new AMap.LngLat(start.lng,start.lat,true);
            var d = new AMap.LngLat(des.lng,des.lat,true);
            map.walkingRoute && map.walkingRoute.search(s,d,function (status,result) {
                if(typeof cb == "function") cb(status,result);
            });
        }
    }


    //20191018-实现搜索地点的方法
    map.SearchPlace = function(kw){
        if(typeof kw != "string") return;
        map.MapSearchInput.value = kw;
        map.autoComplete && map.autoComplete.search(kw,function (status,result) {
            switch (status) {
                case "complete":
                    map.SearchResults = result["tips"];
                    if(!map.ShowTools){
                        map.autoComplete.closeResult();
                    }
                    break;
                case "error":
                case "no_data":
                default:
                    map.SearchResults = [];
                    break;
            }
            map.OnPlaceSearchCompleted();
        });
    }

    //给定点时在地图做标记
    map.LoadMarkers = function (points,markersArr) {
        if(!AMap) return;

        var tempArr = [];
        if(markersArr != undefined){
            tempArr = markersArr;
        }else {
            tempArr = map.CustomMarkers;
        }

        if(tempArr.length>0){
            tempArr.forEach(function (marker) {
                map.aMap.remove(marker);
            })
        }

        //数组保存自定义的点标记
        tempArr.length = 0;
        if(Array.isArray(points)){
            for(var i = 0;i<points.length;i++){
                var item = points[i];

                var cMarker =new AMap.Marker();


                //设置点标记上下文
                cMarker.DataContext = item;
                cMarker.dataContext = item;

                //TODO:监听点击事件
                cMarker.on("click",map.OnMarkerClick);

                var t = item.title || "",l = item.label || "",c = item.c || "#616465",bgc = item.bgc || "transparent",w=item.w||24,h=item.h||24;

                cMarker.setPosition(new AMap.LngLat(item.lng, item.lat));
                cMarker.setTitle(t);//鼠标悬停时显示的文字

                 if(item.label){
                    var content = "<div class='info' style='background-color: "+bgc+";color: "+c+"'>"+item.label+"</div>";
                    cMarker.label = item.label;
                    cMarker.setLabel({
                        //修改label相对于maker的位置
                        offset: new AMap.Pixel(20, 20),
                        content:content
                    });
                 }

                if(item.icon){
                    var icon = new AMap.Icon({
                        size:new AMap.Size(w,h),
                        image:item.icon,
                        imageSize:new AMap.Size(w,h)
                    });
                    cMarker.setIcon(icon);
                }

                cMarker.setAnimation("AMAP_ANIMATION_DROP");
                map.aMap && map.aMap.add && map.aMap.add(cMarker);
                tempArr.push(cMarker);
            }
        }

        //地图缩放至显示标记点
        map.aMap && map.aMap.setFitView && map.aMap.setFitView(tempArr);

    }


    //点击的标记的信息
    map.ClickedMarkerData = {};

    map.OnMarkerClick = function (e) {
        console.log("点标记点击了");

        map.ClickedMarker = this;

        var title = this.getTitle();
        var label = this.label || this.getLabel();
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

        //创建AMap
        map.CreateAMap();

        //TODO:以下方法在地图创建完成后调用?-20201020
        // //创建点标记
        // map.CreatePointMarker();
        //
        // //创建工具条等控件
        // map.CreateMapControl();
        //
        // //创建定位插件
        // map.CreateGeolocation();
        //
        // map.CreatePlugins();
        //
        // //创建图层
        // map.CreateLayer();
        //
        // //创建路径规划
        // map.CreateRoutes();
        //
        // map.Zoom = map.Zoom;

    }


    map.OnLoad = function () {
        // map.LoadMap();
    }

    //20191016-实现控件UnLoad方法 在界面卸载时会被调用 清除定时器
    map.UnLoad = function () {
        clearInterval(map.LiveLocationTimeId);
        map.HasLoaded = false;
        map.aMap && map.aMap.destroy && map.aMap.destroy();
        var rs = document.getElementsByClassName("amap-sug-result");
        if(!rs.length)return;
        for(var i=0;i<rs.length;i++){
            rs[i].style.visibility = "hidden";
        }
    }

    map.OnCreateHandle();

    return map;
}

DBFX.Serializer.MapSerializer = function () {
    //系列化
    this.Serialize = function (c, xe, ns) {
        // DBFX.Serializer.SerialProperty("Placeholder", c.Placeholder, xe);
        DBFX.Serializer.SerialProperty("Zoom", c.Zoom, xe);
        DBFX.Serializer.SerialProperty("ShowTools", c.ShowTools, xe);
        // DBFX.Serializer.SerialProperty("ShowLogo", c.ShowLogo, xe);
        // DBFX.Serializer.SerialProperty("ShowCR", c.ShowCR, xe);
        DBFX.Serializer.SerialProperty("ShowBG", c.ShowBG, xe);
        DBFX.Serializer.SerialProperty("ShowRoad", c.ShowRoad, xe);
        DBFX.Serializer.SerialProperty("ShowBuilding", c.ShowBuilding, xe);
        DBFX.Serializer.SerialProperty("ShowPoint", c.ShowPoint, xe);
        DBFX.Serializer.SerialProperty("DragEnable", c.DragEnable, xe);
        DBFX.Serializer.SerialProperty("DoubleClickZoom", c.DoubleClickZoom, xe);
        DBFX.Serializer.SerialProperty("ZoomEnable", c.ZoomEnable, xe);
        DBFX.Serializer.SerialProperty("ShowMapType", c.ShowMapType, xe);
        DBFX.Serializer.SerialProperty("ShowOverView", c.ShowOverView, xe);
        DBFX.Serializer.SerialProperty("ShowScale", c.ShowScale, xe);
        DBFX.Serializer.SerialProperty("ShowToolBar", c.ShowToolBar, xe);
        DBFX.Serializer.SerialProperty("ShowRoadNet", c.ShowRoadNet, xe);
        DBFX.Serializer.SerialProperty("ShowSatellite", c.ShowSatellite, xe);
        DBFX.Serializer.SerialProperty("MapStyle", c.MapStyle, xe);
        DBFX.Serializer.SerialProperty("AMapStyle", c.AMapStyle, xe);
        DBFX.Serializer.SerialProperty("LiveLocationTime", c.LiveLocationTime, xe);
        DBFX.Serializer.SerialProperty("AllowGeolocation", c.AllowGeolocation, xe);
        DBFX.Serializer.SerialProperty("AllowMarkPos", c.AllowMarkPos, xe);
        DBFX.Serializer.SerialProperty("SignMode", c.SignMode, xe);

        //序列化方法
        DBFX.Serializer.SerializeCommand("MapComplete", c.MapComplete, xe);
        DBFX.Serializer.SerializeCommand("MarkedPosition", c.MarkedPosition, xe);
        DBFX.Serializer.SerializeCommand("MarkerClick", c.MarkerClick, xe);
        DBFX.Serializer.SerializeCommand("POIListItemClick", c.POIListItemClick, xe);
        DBFX.Serializer.SerializeCommand("LiveLocation", c.LiveLocation, xe);
        DBFX.Serializer.SerializeCommand("PlaceSearchCompleted", c.PlaceSearchCompleted, xe);
        DBFX.Serializer.SerializeCommand("SearchResultSelect", c.SearchResultSelect, xe);
        DBFX.Serializer.SerializeCommand("GetDistrictData", c.GetDistrictData, xe);

    }

    //反系列化
    this.DeSerialize = function (c, xe, ns) {
        // DBFX.Serializer.DeSerialProperty("Placeholder", c, xe);
        DBFX.Serializer.DeSerialProperty("Zoom", c, xe);
        DBFX.Serializer.DeSerialProperty("ShowTools", c, xe);
        // DBFX.Serializer.DeSerialProperty("ShowLogo", c, xe);
        // DBFX.Serializer.DeSerialProperty("ShowCR", c, xe);
        DBFX.Serializer.DeSerialProperty("ShowBG", c, xe);
        DBFX.Serializer.DeSerialProperty("ShowRoad", c, xe);
        DBFX.Serializer.DeSerialProperty("ShowBuilding", c, xe);
        DBFX.Serializer.DeSerialProperty("ShowPoint", c, xe);
        DBFX.Serializer.DeSerialProperty("DragEnable", c, xe);
        DBFX.Serializer.DeSerialProperty("DoubleClickZoom", c, xe);
        DBFX.Serializer.DeSerialProperty("ZoomEnable", c, xe);
        DBFX.Serializer.DeSerialProperty("ShowMapType", c, xe);
        DBFX.Serializer.DeSerialProperty("ShowOverView", c, xe);
        DBFX.Serializer.DeSerialProperty("ShowScale", c, xe);
        DBFX.Serializer.DeSerialProperty("ShowToolBar", c, xe);
        DBFX.Serializer.DeSerialProperty("ShowRoadNet", c, xe);
        DBFX.Serializer.DeSerialProperty("ShowSatellite", c, xe);
        DBFX.Serializer.DeSerialProperty("MapStyle", c, xe);
        DBFX.Serializer.DeSerialProperty("AMapStyle", c, xe);
        DBFX.Serializer.DeSerialProperty("LiveLocationTime", c, xe);
        DBFX.Serializer.DeSerialProperty("AllowGeolocation", c, xe);
        DBFX.Serializer.DeSerialProperty("AllowMarkPos", c, xe);
        DBFX.Serializer.DeSerialProperty("SignMode", c, xe);

        //对方法反序列化
        DBFX.Serializer.DeSerializeCommand("MapComplete", xe, c);
        DBFX.Serializer.DeSerializeCommand("MarkedPosition", xe, c);
        DBFX.Serializer.DeSerializeCommand("MarkerClick", xe, c);
        DBFX.Serializer.DeSerializeCommand("POIListItemClick", xe, c);
        DBFX.Serializer.DeSerializeCommand("LiveLocation", xe, c);
        DBFX.Serializer.DeSerializeCommand("PlaceSearchCompleted", xe, c);
        DBFX.Serializer.DeSerializeCommand("SearchResultSelect", xe, c);
        DBFX.Serializer.DeSerializeCommand("GetDistrictData", xe, c);

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
                                            {EventName:"POIListItemClick",EventCode:undefined,Command:od.dataContext.POIListItemClick,Control:od.dataContext},
                                            {EventName:"LiveLocation",EventCode:undefined,Command:od.dataContext.LiveLocation,Control:od.dataContext},
                                            {EventName:"PlaceSearchCompleted",EventCode:undefined,Command:od.dataContext.PlaceSearchCompleted,Control:od.dataContext},
                                            {EventName:"SearchResultSelect",EventCode:undefined,Command:od.dataContext.SearchResultSelect,Control:od.dataContext},
                                            {EventName:"GetDistrictData",EventCode:undefined,Command:od.dataContext.GetDistrictData,Control:od.dataContext}];

        }, obdc);
    }

    //事件处理程序
    obdc.DataContextChanged = function (e) {
        obdc.DataBind(e);
        if(obdc.EventListBox != undefined){
            obdc.EventListBox.ItemSource = [{EventName:"MapComplete",EventCode:undefined,Command:obdc.dataContext.MapComplete,Control:obdc.dataContext},
                                            {EventName:"MarkedPosition",EventCode:undefined,Command:obdc.dataContext.MarkedPosition,Control:obdc.dataContext},
                                            {EventName:"MarkerClick",EventCode:undefined,Command:obdc.dataContext.MarkerClick,Control:obdc.dataContext},
                                            {EventName:"POIListItemClick",EventCode:undefined,Command:obdc.dataContext.POIListItemClick,Control:obdc.dataContext},
                                            {EventName:"LiveLocation",EventCode:undefined,Command:obdc.dataContext.LiveLocation,Control:obdc.dataContext},
                                            {EventName:"PlaceSearchCompleted",EventCode:undefined,Command:obdc.dataContext.PlaceSearchCompleted,Control:obdc.dataContext},
                                            {EventName:"SearchResultSelect",EventCode:undefined,Command:obdc.dataContext.SearchResultSelect,Control:obdc.dataContext},
                                            {EventName:"GetDistrictData",EventCode:undefined,Command:obdc.dataContext.GetDistrictData,Control:obdc.dataContext}];
        }
    }

    obdc.HorizonScrollbar = "hidden";
    obdc.OnCreateHandle();
    obdc.Class = "VDE_Design_ObjectGeneralDesigner";
    obdc.Text = "地图";
    return obdc;
}