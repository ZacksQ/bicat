//公共接口调用前缀
var commonURL = "http://116.62.245.62:8080/bjcat/";
// var commonURL = "http://116.196.114.149:8080/bjcat/";

//获取datagrid单选行
function getRowIndex(selector) {
    var target = selector.datagrid('getSelected');
    var rowIndex = selector.datagrid('getRowIndex',target)
    return rowIndex
}

//获取url参数
function getRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var strs = url.substr(1).split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
        }
    }
    return theRequest;
}

function filterNull(value) {
    if(value === null || value === undefined){
        return ''
    }
    return value
}
function unique(array){
    var n = [];//临时数组
    for(var i = 0;i < array.length; i++){
        if(n.indexOf(array[i]) == -1) n.push(array[i]);
    }
    return n;
}
var useraccount = {
    sex: {
        0: '未知',
        1: '男',
        2: '女',
    },
    usertype: {
        1: '系统管理员',
        2: '教职工',
        3: '学生',
        4: '校外人员'
    },
    census_type: {
        1: '城镇',
        2: '农村'
    },
    teachtype: {
        1: '行政管理人员',
        2: '专职教师',
        3: '工勤人员'
    },
    contractype: {
        1: '劳动合同',
        2: '无固定期劳动合同',
        3: '劳动协议'
    },
    workstatus: {
        0: '离职',
        1: '在职',
        2: '休职'
    },
    enter_type: {
        1: '统招',
        2: '计划外'
    },
    study_status: {
        0: '毕业',
        1: '在读',
        2: '休学',
        3: '退学'
    },
    bools: {
        0: '否',
        1: '是'
    },
    jobtype: {
        1: '教职工',
        2: '后勤',
        3: '工人'
    },
    satype: {
        1: '统招',
        2: '计划外'
    }
}

$(document).ajaxComplete(function (event, xhr, settings) {
    var sessionStatus = xhr.getResponseHeader("sessionstatus");
    if (typeof (sessionStatus) !== 'undefined' && sessionStatus != null) {
        if (sessionStatus === "timeout") {
            window.location.href = "../home/login.html";
        }
    }
});