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
    map.VisualElement = document.createElement("DIV");
    map.VisualElement.className = "Map";

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
        map.VisualElement.innerHTML = "<DIV class=\"MapView\" id='MapView'/></DIV><DIV class='MapInfoPanel' id='MapInfoPanel'></DIV>"+
        "<DIV class='MapTool'><input type='text' id='MapSearchInput' class='MapSearchInput'><span class='MapMarkBtn'>标记位置</span><select name='路线选择' class='MapRouteSelect'><option value =\"5\">路线选择</option></select></DIV>";
        map.MapDiv = map.VisualElement.querySelector("DIV.MapView");
        map.MapInfoPanel = map.VisualElement.querySelector("DIV.MapInfoPanel");
        map.MapSearchInput = map.VisualElement.querySelector("input.MapSearchInput");

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

        var random = parseInt(Math.random()*100,10);

        map.CbName="MapCallback"+random;

        window[map.CbName] = map.LoadMap;
        map.MapDiv.id="MapView"+random;
        //TODO:动态插入script  异步加载地图 callback=map.LoadMap!!
        var mapJS = document.createElement("SCRIPT");
        mapJS.charset = "utf-8";
        mapJS.src = "https://webapi.amap.com/maps?v=1.4.11&key=501c9ef49f34ed644919c827c3d98b98&callback="+map.CbName;
        mapJS.type = 'text/javascript';
        document.body.appendChild(mapJS);

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

    //TODO:设置地图中心
    map.setMapCenter = function (c) {
        // map.aMap.setCenter();//设置地图中心点
    }

    //TODO:设置zoom
    map.setMapZoom = function (z) {

        // map.aMap.setZoomAndCenter();
    }


    //创建高德地图
    map.CreateAMap = function () {
        //创建高德地图
        map.aMap = new AMap.Map(map.MapDiv.id,{
            zoom:16,//级别
            // center: [125.3247893, 43.8868593],//中心点坐标
            // viewMode:'2D'//使用3D视图
            resizeEnable: true
            // features: ['bg', 'road', 'building', 'point']
        });

        ////显示要素，分别是：区域面、道路、建筑物、标注；
        map.aMap.setFeatures(['bg', 'road', 'building', 'point']);


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

    //地球点击结束
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
        AMap.plugin("AMap.Geolocation",function () {
            map.geolocation = new AMap.Geolocation({
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
            map.geolocation.getCurrentPosition();


            AMap.event.addListener(map.geolocation, 'complete', function (data) {
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

            AMap.event.addListener(map.geolocation, 'error', function (data) {
                console.log("定位失败"+JSON.stringify(data));
                //TODO:定位失败需要为用户做个提醒


            });

        });
    }


    //工具条、比例尺、鹰眼控件、类别切换控件
    map.CreatePlugins = function () {
        AMap.plugin(['AMap.Scale',
            'AMap.OverView',
            'AMap.MapType',
        ], function () {

            // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
            // map.aMap.addControl(new AMap.Scale());

            // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
            // map.aMap.addControl(new AMap.OverView({isOpen:true}));

            // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
            map.aMap.addControl(new AMap.MapType());

        });
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

        // 构造官方卫星、路网"图层"
        var satelliteLayer = new AMap.TileLayer.Satellite();
        var roadNetLayer =  new AMap.TileLayer.RoadNet();

        //批量添加"图层"
        // map.aMap.add([satelliteLayer, roadNetLayer]);

        //添加单个"图层"
        map.aMap.add(roadNetLayer);

        //移除"图层"
        // map.aMap.remove(satelliteLayer);


        //工具条、比例尺、鹰眼控件、类别切换控件  PC端选择性添加  App端不添加
        if(!map.isPhone){
            //PC端
            map.CreatePlugins();
            AMap.plugin("AMap.ToolBar",function () {
                // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
                map.toolBar = new AMap.ToolBar();
                map.aMap.addControl(map.toolBar);
            });

            //带检索功能的信息窗体
            // map.CreateAdvancedInfoWindow();

            AMap.plugin('AMap.Autocomplete', function(){
                // 实例化Autocomplete
                var autoOptions = {
                    //city 限定城市，默认全国
                    city: '全国'
                }
                var autoComplete= new AMap.Autocomplete(autoOptions);
                autoComplete.search("修正", function(status, result) {
                    // 搜索成功时，result即是对应的匹配数据
                })
            })

        }else {
            //App端

            AMap.plugin("AMap.ToolBar",function () {
                // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
                map.toolBar = new AMap.ToolBar({
                    position:"RB"
                    // liteStyle:true
                });
                map.aMap.addControl(map.toolBar);
                map.toolBar.hideDirection();
                map.toolBar.showLocation();
            });

        }
        

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
        DBFX.Serializer.SerializeCommand("MarkedPosition", c.MarkedPosition, xe);
        DBFX.Serializer.SerializeCommand("MarkerClick", c.MarkedPosition, xe);

    }

    //反系列化
    this.DeSerialize = function (c, xe, ns) {
        // DBFX.Serializer.DeSerialProperty("Placeholder", c, xe);

        //对方法反序列化
        DBFX.Serializer.DeSerializeCommand("MarkedPosition", xe, c);
        DBFX.Serializer.DeSerializeCommand("MarkerClick", xe, c);

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
            od.EventListBox.ItemSource = [{EventName:"MarkedPosition",EventCode:undefined,Command:od.dataContext.MarkedPosition,Control:od.dataContext},
                                            {EventName:"MarkerClick",EventCode:undefined,Command:od.dataContext.MarkerClick,Control:od.dataContext}];
        }, obdc);
    }

    //事件处理程序
    obdc.DataContextChanged = function (e) {
        obdc.DataBind(e);
        if(obdc.EventListBox != undefined){
            obdc.EventListBox.ItemSource = [{EventName:"MarkedPosition",EventCode:undefined,Command:obdc.dataContext.MarkedPosition,Control:obdc.dataContext},
                                            {EventName:"MarkerClick",EventCode:undefined,Command:obdc.dataContext.MarkerClick,Control:obdc.dataContext}];
        }
    }

    obdc.HorizonScrollbar = "hidden";
    obdc.OnCreateHandle();
    obdc.Class = "VDE_Design_ObjectGeneralDesigner";
    obdc.Text = "地图";
    return obdc;
}