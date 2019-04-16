var DBFX = new Object();
var Converter = new Object();
DBFX.RegisterNamespace = function (ns) {

    var nsseg = ns.split(".");

    var tobj = undefined;

    for (var i = 0; i < nsseg.length; i++) {

        var tns = nsseg[i];
        var cobj = undefined;
        if (i == 0) {

            cobj = window[tns];

        }
        else
            cobj = tobj[tns];

        if (cobj == undefined)
            cobj = new Object();

        if (tobj != undefined) {

            tobj[tns] = cobj;
        }
        else
            window[tns] = cobj;

        tobj = cobj;


    }

}

DBFX.DataDomain = function () {

    var dd = new Object();
    dd.GetType = function () {

        return "DataDomain";
    }

    return dd;
}

//数据类型转换器

Converter.ToInt32 = function (v) {

    return v * 1;
}

Converter.ToDate = function (v) {
    var dv = new Date(v)
    if (isNaN(dv))
        dv = new Date(v.replace("-", "/"));
    return dv;
}

Converter.ToString = function(ov, format) 
 {

    if (ov == undefined)
        ov = "";

    if (format == undefined || format=="")
        rv=ov;
    else
    if (format == "C")
    {
        var v = ov*1;
        var rv = "";
        rv = v.toFixed(2);
        var lang = navigator.systemLanguage;
        if (lang == undefined)
           lang = navigator.language;

        if (lang.toLowerCase().indexOf("zh-cn") >= 0)
            rv = "￥" + rv;
        else
            rv = "$" + rv;

      }
      else
        if (format == "yyyy-MM-dd") 
        {
           var dv = ov;
           if (ov.getSeconds == undefined)
                dv = new Date(ov);

           if (isNaN(dv))
                dv = new Date(ov.replace("-", "/"));

            var v = dv;
            if (!isNaN(dv))
                rv = v.getFullYear() + "-" + (v.getMonth() + 1) + "-" + v.getDate();
            else
                rv = "无效的日期";

        }
        else
            if (format == "yyyy-MM-dd HH:mm:ss") 
            {
                var dv = ov;
                if (ov.getSeconds == undefined)
                    dv = new Date(ov);

                if (isNaN(dv))
                    dv = new Date(ov.replace("-", "/"));

                if (!isNaN(dv))
                    rv = dv.getFullYear() + "-" + (dv.getMonth() + 1) + "-" + dv.getDate() + " " + dv.getHours() + ":" + dv.getMinutes() + ":" + dv.getSeconds();
                else
                    rv = "";

              }
              else
                if (format.toLowerCase() == "hh:mm") {
                    var dv = ov;
                    if (ov.getSeconds == undefined)
                        dv = new Date(ov);

                    if (isNaN(dv))
                        dv = new Date(ov.replace("-", "/"));

                    var v = dv;
                    if (!isNaN(dv))
                        rv = v.getHours() + ":" + v.getMinutes() + ":" + v.getSeconds();
                    else
                        rv = "";

                 }
                 else
                    if (format == "HH:mm:ss" || format=="hh:mm:ss") {
                        var dv = ov;
                        if (ov.getSeconds == undefined)
                            dv = new Date(ov);

                        dv.toLocaleString();
                        if (isNaN(dv))
                            dv = new Date(ov.replace("-", "/"));
                        var v = dv;

                        if (!isNaN(dv))
                            rv = v.getHours() + ":" + v.getMinutes() + ":" + v.getSeconds();
                        else
                            rv = "";


                    } else
                        if (format.indexOf("##0") >= 0 || format.indexOf("0.00") >= 0) {
                            var v1=ov*1.0;
                            if(v1==NaN)
                                v1=0;

                            var fs = format.split(".");
                            if (fs.length > 1) {

                                rv = v1.toFixed(fs[1].length);


                            }
                            else {
                                rv = v1.toFixed(0);
                            }

                        }
                        else {

                            var ns = ov.toString().split(".");
                            var fns = format.split(".");

                            if (ns[0].length < fns[0].length)
                                rv = fns[0].substring(0, (fns[0].length - ns[0].length)) + ns;
                            else
                                rv = v;
                        }

        return rv;
}



Converter.Base64ToArrayBuffer = function (base64) {

    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }

    return bytes.buffer;

}

Converter.Base64ToUint8Array = function (base64) {

    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }

    return bytes;

}

Converter.ArrayBufferToBase64 = function (buf) {

    var binstr = Array.prototype.map.call(buf, function (ch) {
        return String.fromCharCode(ch);
    }).join('');
    return btoa(binstr);

}


Converter.StringToBase64 = function (str) {

    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

Converter.Base64ToString = function (str) {

    return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));


}
Converter.ToFixString = function (str, fchar, len) {
    str = str.toString();
    var l = len - str.length;
    var lstr = "";
    for (var idx = 0; idx < l; idx++)
        lstr = lstr + fchar;

    str = lstr + str;
    return str;

}

Converter.Int16ToBytes = function (d) {

    var buff = new ArrayBuffer(2);

    var i16v = new Uint16Array(buff);
    i16v[0] = d * 1;
    var u8a = new Uint8Array(buff);

    return u8a;

}


//转换MongoDB的ID
window.ObjectId = function (v) {

    return v;
}

window.CSUUID = function (v) {

    return v;
}

window.NumberLong = function (v) {

    return v;

}

window.ISODate = function (v) {
    var dv = new Date(v);

    if (isNaN(dv))
        dv = new Date();

    return dv;
}

Math.TwoPointDistance = function (x, y, x1, y1) {

    var calX = x1 - x;
    var calY = y1 - y;
    var v=Math.pow((calX * calX + calY * calY), 0.5);
    return v;
}

function Map() {

    Object.defineProperty(Map, "constructor", { enumerable: false, value: DBFX.Map });
    Map.prototype.list = new Array();
    Map.prototype.Add = function (k, v) {
        var item = new Object();
        item.Key = k;
        item.Value = v;
        this.list.push(item);
    }

    Map.prototype.Get = function (k) {

        for (var i = 0; i < this.list.length; i++) {

            if (this.list[i].Key == k)
                return this.list[i].Value;

        }

        return null;
       
    }

}


function ISODate(v) {
    return v;
}

var EventArg = function (sender, objs) {

    var arg = new Object();
    arg.Sender = sender;
    arg.Objects = objs;

    return arg;

}


var EventHandler = function (cb,f) {
    var eh = new Object();
    eh.f = f;
    eh.cb = cb;
    eh.ObjType = "EventHandler";
    return eh;

}

Object.prototype.OnPropertyChanged = function (propertyname, value) {

    if (Object.prototype.PropertyChanged != undefined)
        Object.prototype.PropertyChanged(propertyname, value, this);

}

Object.prototype.propertyChanged = function (propertyname, value,o) {

    // if (this.propertyChangedCbs.length == 0)
    //     return;
    //
    //
    //
    // for (var i = 0; i < this.propertyChangedCbs.length; i++) {
    //     var cb = this.propertyChangedCbs[i];
    //
    //     cb(propertyname, value,o);
    //
    // }

}

Object.prototype.propertyChangedCbs = new Array();

Object.defineProperty(Object.prototype, "PropertyChanged", {
    get: function () {

        return Object.prototype.propertyChanged;

    },
    set: function (v) {

        //Object.prototype.propertyChanged = v;
        if (v.ObjType != "EventHandler")
            throw ("无效的句柄");

        if (v.f == 1) {
            if(Object.prototype.propertyChangedCbs.indexOf(v.cb)<0)
                Object.prototype.propertyChangedCbs.Add(v.cb);
        }
        else {

            Object.prototype.propertyChangedCbs.Remove(v.cb);
        }

    }
});

Object.getOwnPropertyDescriptor(Object.prototype, "propertyChangedCbs").enumerable = false;



Object.prototype.ToJSon = function () {

    var ojson = JSON.stringify(this);
    var o = JSON.parse(ojson);
    
    if (o.propertyChangedCbs != undefined)
        delete o.propertyChangedCbs;

    ojson = JSON.stringify(o);
    return ojson;

}

Object.prototype.Clone = function () {

    var ojson = JSON.stringify(this);
    var o = JSON.parse(ojson);
    return o;

}

Object.prototype.ToBoolean = function () {

    if ((this==undefined || this ==null || this!=true || this == "false" || this == false) && (this.toString()!="true"))
        return false;
    else
        return true;


}

Object.prototype.ToString=function(format)
{
    return Converter.ToString(this.valueOf(), format);

}


//数组扩展操作
//查找指定值得位置
Array.prototype.IndexOf = function (val) {
    return this.indexOf(val);
};

//移除指定的值
Array.prototype.Remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

//移除指定的索引位置的值
Array.prototype.RemoveAt = function (idx) {
    if (index > -1) {
        this.splice(index, 1);
    }
};

//移除指定的索引位置的值
Array.prototype.Clear = function () {

        this.splice(0, this.length);

};

//添加元素
Array.prototype.Add = function (val) {


    this.push(val);

};

Array.prototype.GetType = function () {

    return "Array";
}

//插入
Array.prototype.Insert = function (val, tval)
{
    var idx = this.IndexOf(tval);
    this.splice(idx, 0, val)

}


//在指定位置插入
Array.prototype.InsertAt = function (idx,val)
{

    this.splice(idx, 0, val);

}


var iif = function (v,tv,fv) {

    if (v == true)
        return tv;
    else
        return fv;

}



var Msg = function (id, body) {
    var m = new Object();
    m.MsgId = id;
    m.Body = body;
    return m;
}

var DataItem = function () {

    var item = new Object();

    Object.defineProperty(item, "Title", {
        get: function () {

            return item.title;

        },
        set: function (v) {

            item.title = v;
        }
    });

    Object.defineProperty(item, "Name", {
        get: function () {

            return item.name;

        },
        set: function (v) {

            item.name = v;
        }
    });

    Object.defineProperty(item, "Description", {
        get: function () {

            return item.description;
        },
        set: function (v) {

            item.deescription = v;
        }
    });

    Object.defineProperty(item, "Value", {
        get: function () {

            return item.value;
        },
        set: function (v) {

            item.value = v;

        }
    });

    Object.defineProperty(item, "Categories", {
        get: function () {

            return item.categories;

        },
        set: function (v) {

            item.categories = v;
        }
    });

    Object.defineProperty(item, "DataType", {
        get: function () {

            return item.datatype;

        },
        set: function (v) {

            item.datatype = v;

        }
    });

    return item;

}


//命名元素数组
var NamedArray = function () {
    var narray = new Array();
    narray.ObjType = "NamedArray";
    narray.Add = function (key, val) {

        if (narray[name] != undefined)
            throw ("元素已经存在!");

        narray[key] = val;
        narray.push(val);


    }
    narray.BaseInsert = narray.Insert;
    narray.Insert=function(name, val, tval)
    {
        narray[name] = val;
        narray.BaseInsert(val, tval);

    }

    narray.Remove = function (name, val) {
        
        if (typeof name != "string" && val == undefined) {

            val = name;
            var index = narray.indexOf(val);

            if (index > -1) {
                narray.splice(index, 1);
            }

            for (var k in narray) {

                if(narray[k]==val)
                    delete narray[k];
            }

        }
        else {
            delete narray[name];

            var index = narray.indexOf(val);
            if (index > -1) {
                narray.splice(index, 1);
            }
        }

    }

    return narray;

}

var Dictionary = function () {

    var dic = new Object();

    dic.Values = new Array();
    dic.Keys = new Object();


    dic.IndexOf = function (o) {

        return dic.Values.indexOf(o, 0);

    }

    dic.Add = function (k,o) {

        if (dic.Keys[k] != undefined)
            throw ("字典对象中不允许存储同名的元素!");


        dic.Keys[k] = o;
        dic.Values.push(o);

    }


    dic.Remove = function (k) {

        if (dic.Keys[k] == undefined)
            throw ("字段对象中不存在 "+k+" 的元素!");


        dic.Values.Remove(dic.Keys[k]);

        delete dic.Keys[k];


    }

    dic.Clear = function () {

        dic.Keys = new Object();
        dic.Value.splice(0, dic.Values.length);

    }

    dic.ContainsKey = function (k) {

        return (dic.Keys[k] != undefined);

    }

    dic.Contains = function (o) {

        return (dic.Values.IndexOf(o)>=0);

    }

    dic.GetValue = function (k) {
        return dic.Keys[k];
    }

    dic.SetValue = function (k, o) {

        var idx=dic.Values.IndexOf(dic.Keys[k]);
        dic.Values[idx] = o;
        dic.Keys[k] = o;

    }

    Object.defineProperty(dic, "length", {
        get: function () {

            return dic.Values.length;

        }
    });
   
    return dic;

}

DBFX.GetUniqueNumber = ((
	function () {
	    var value = 0;
	    return function () {
	        return ++value;
	    };
	}
)());

window.BaseAlert = alert;
window.alert = function (msgtext,title) {

    if (DBFX.Web == undefined) {
        window.BaseAlert(msgtext);
    } else {

        DBFX.Web.Forms.MessageBox.Show(msgtext, document.title, function (r) {


        }, undefined, undefined, undefined, undefined, false);
    }
}


/*
 *
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 *
 * By lizq
 *
 * 2006-11-11
 *
 */
/*
 *
 * Configurable variables.
 *
 */
var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase */
var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode */
/*
 *
 * The main function to calculate message digest
 *
 */
function hex_sha1(s) {

    return binb2hex(core_sha1(AlignSHA1(s)));

}

/*
 *
 * Perform a simple self-test to see if the VM is working
 *
 */
function sha1_vm_test() {

    return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";

}

/*
 *
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 *
 */
function core_sha1(blockArray) {

    var x = blockArray; // append padding
    var w = Array(80);

    var a = 1732584193;

    var b = -271733879;

    var c = -1732584194;

    var d = 271733878;

    var e = -1009589776;

    for (var i = 0; i < x.length; i += 16) // 每次处理512位 16*32
    {

        var olda = a;

        var oldb = b;

        var oldc = c;

        var oldd = d;

        var olde = e;

        for (var j = 0; j < 80; j++) // 对每个512位进行80步操作
        {

            if (j < 16)
                w[j] = x[i + j];

            else
                w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);

            var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));

            e = d;

            d = c;

            c = rol(b, 30);

            b = a;

            a = t;

        }

        a = safe_add(a, olda);

        b = safe_add(b, oldb);

        c = safe_add(c, oldc);

        d = safe_add(d, oldd);

        e = safe_add(e, olde);

    }

    return new Array(a, b, c, d, e);

}

/*
 *
 * Perform the appropriate triplet combination function for the current
 * iteration
 *
 * 返回对应F函数的值
 *
 */
function sha1_ft(t, b, c, d) {

    if (t < 20)
        return (b & c) | ((~b) & d);

    if (t < 40)
        return b ^ c ^ d;

    if (t < 60)
        return (b & c) | (b & d) | (c & d);

    return b ^ c ^ d; // t<80
}

/*
 *
 * Determine the appropriate additive constant for the current iteration
 *
 * 返回对应的Kt值
 *
 */
function sha1_kt(t) {

    return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;

}

/*
 *
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 *
 * to work around bugs in some JS interpreters.
 *
 * 将32位数拆成高16位和低16位分别进行相加，从而实现 MOD 2^32 的加法
 *
 */
function safe_add(x, y) {

    var lsw = (x & 0xFFFF) + (y & 0xFFFF);

    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);

    return (msw << 16) | (lsw & 0xFFFF);

}

/*
 *
 * Bitwise rotate a 32-bit number to the left.
 *
 * 32位二进制数循环左移
 *
 */
function rol(num, cnt) {

    return (num << cnt) | (num >>> (32 - cnt));

}

/*
 *
 * The standard SHA1 needs the input string to fit into a block
 *
 * This function align the input string to meet the requirement
 *
 */
function AlignSHA1(str) {

    var nblk = ((str.length + 8) >> 6) + 1, blks = new Array(nblk * 16);

    for (var i = 0; i < nblk * 16; i++)
        blks[i] = 0;

    for (i = 0; i < str.length; i++)

        blks[i >> 2] |= str.charCodeAt(i) << (24 - (i & 3) * 8);

    blks[i >> 2] |= 0x80 << (24 - (i & 3) * 8);

    blks[nblk * 16 - 1] = str.length * 8;

    return blks;

}

/*
 *
 * Convert an array of big-endian words to a hex string.
 *
 */
function binb2hex(binarray) {

    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";

    var str = "";

    for (var i = 0; i < binarray.length * 4; i++) {

        str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +

        hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);

    }

    return str;

}

/*
 *
 * calculate MessageDigest accord to source message that inputted
 *
 */
function calcDigest() {

    var digestM = hex_sha1(document.SHAForm.SourceMessage.value);

    document.SHAForm.MessageDigest.value = digestM;

}

DBFX.StringWriter = function () {

    var sw = new Object();
    sw.StringItems = new Array();
    sw.Indent = 0;
    //加入
    sw.AddLine = function (str, indent) {
        
        if (indent == undefined)
            indent = 0;

        if(indent<0)
            sw.Indent += indent;

        sw.StringItems.Add(sw.PaddingStr(" ", sw.Indent) + str + "\n");

        if(indent>0)
            sw.Indent += indent;

    }

    sw.ToString = function () {

        var str = "";
        for (var i = 0; i < sw.StringItems.length; i++)
            str += sw.StringItems[i];

        return str;

    }

    sw.PaddingStr = function (c, count) {

        var str="";
        for (var i = 0; i < count; i++)
            str += c;
        return str;

    }

    return sw;

}

Date.prototype.addDays = function (day) {
    
    var ms = this.valueOf();
    ms += (day * 24 * 60*60* 1000);
    var d = (new Date(ms));
    return d;

}

Date.prototype.addHours = function (hour) {

    var ms = this.valueOf();
    ms += (hour* 60 * 60 * 1000);
    var d = (new Date(ms));
    return d;

}

Date.prototype.addMinutes = function (minutes) {

    var ms = this.valueOf();
    ms += (minutes * 60 * 1000);
    var d = (new Date(ms));
    return d;

}

Date.prototype.addSeconds = function (seconds) {

    var ms = this.valueOf();
    ms += (seconds * 1000);
    var d = (new Date(ms));
    return d;

}


Date.prototype.addYears = function (y) {

    var dstr = this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds() + " " + (this.getMonth() + 1) + "/" + this.getDate() + "/" + (this.getFullYear()+y);
    var d = (new Date(dstr));
    return d;

}

Date.prototype.addMonth = function (m) {

    var dstr = this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds() + " " + (this.getMonth() + 1+m) + "/" + this.getDate() + "/" + (this.getFullYear());
    var d = (new Date(dstr));
    return d;

}

//
Date.prototype.toLongTimeString=function()
{

    return this.getHours().ToString(2) + ":" + this.getMinutes().ToString(2) + ":" + this.getSeconds().ToString(2);

}

Date.prototype.toLongDateString=function()
{

    return (this.getFullYear() +"-"+(this.getMonth() + 1).ToString(2) + "-" + this.getDate().ToString(2));

}


Object.prototype.GetType = function () {

    return (typeof this);

}

Number.prototype.ToString=function(len)
{
    if(typeof len=="number"){
            var str = this.toString();
            var l = len - str.length;

            for (var i = 0; i < l; i++)
                str = "0" + str;

            return str;
    }
    else
        return Converter.ToString(this.valueOf(),len);

}


