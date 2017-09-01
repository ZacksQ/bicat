//公共接口调用前缀
var commonURL = "http://115.159.225.127:7070/bjcat/";

//获取datagrid单选行
function getRowIndex(selector) {
    var target = selector.datagrid('getSelected');
    var rowIndex = selector.datagrid('getRowIndex',target)
    return rowIndex
}