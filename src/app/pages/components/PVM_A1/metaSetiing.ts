export const metaData = {
    treeData: {
        selectionMode: "single",
        eventEmitter: true,
        data: [
            {
                "label": "总公司",
                "data": "Documents Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [
                    {
                        "label": "子公司",
                        "data": "子公司",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{ "label": "子公司1-1", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
                    }
                ]
            },
        ],
    }
}


export const showmetaData = `
{
    "metaData":{    
        "treeData": {
            "selectionMode": "single",
            "eventEmitter": true,
            "data": [
                {
                    "label": "总公司",
                    "data": "Documents Folder",
                    "expandedIcon": "fa-folder-open",
                    "collapsedIcon": "fa-folder",
                    "children": [
                        {
                            "label": "子公司",
                            "data": "子公司",
                            "expandedIcon": "fa-folder-open",
                            "collapsedIcon": "fa-folder",
                            "children": [{ "label": "子公司1-1", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
                        }
                    ]
                }
            ]
        }
    }
}
`;


export const metaDateDetail = [
    { name: 'meatData', type: "object", detail: '元数据', standard: "meatData:{ treeData?:{...}, tableData?:{...}}" },
    { name: 'treeData', type: "object", detail: 'tree数据，如果没有不传，或者空', standard: "treeData:{}|| treeData:{...}" },
    { name: 'treeData.selectionMode', type: "string || NULL", detail: '节点选中Mode，single->单选, multiple->多选(摁住Ctrl)， checkbox-> 复选框多选', standard: "selectionMode:'NULL' || 'single' ||'multiple' || 'checkbox'" },
    { name: 'treeData.eventEmitter', type: "boolean", detail: '是否到处事件，如选中事件，取消选中事件(摁住Ctrl)，右键事件', standard: "eventEmitter: true or false" },
    { name: 'treeData.data', type: "array", detail: 'tree节点数据', standard: "数据结构如演示代码" },
];

