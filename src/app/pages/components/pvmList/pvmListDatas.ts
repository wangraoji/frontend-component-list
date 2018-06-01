export const list1Data = {
    event: [
        { eventName: "onRowSelect", returns: "当前选中行的数据", dec: "单行选中触发", func: "(onRowSelect)='你的方法名'" },
        { eventName: "onRowUnselect", returns: "没有", dec: "取消选中行触发", func: "(onRowUnselect)='你的方法名'" },
        { eventName: "onRowDblClick", returns: "当前选中行的数据", dec: "双击行触发", func: "(onRowDblClick)='你的方法名'" },
        { eventName: "onPaginatorClick", returns: "当前页以及当前页条数", dec: "点击分页按钮触发", func: "(onPaginatorClick)='你的方法名'" },
    ],
    cont: [
        { contName: "header", contDec: "给列表头部添内容", contfunc: "&lt;header&gt;<br>...(这里你可以添你任何想要添的东西)<br>&lt;header&gt;" },
        { contName: "footer", contDec: "给列表底部部添内容", contfunc: "&lt;footer&gt;<br>...(这里你可以添你任何想要添的东西)<br>&lt;footer&gt;" },
    ],
}

export const edit1Data = {
    event: [
        { eventName: "onSave", returns: "当前整个数据", dec: "点工具栏保存", func: "(onSave)='你的方法名'" },
    ],
}

export const edit2Data = {
    event: [
        { eventName: "onRowSelect", returns: "当前选中行的数据,和所有数据", dec: "单行选中触发", func: "(onRowSelect)='你的方法名'" },
        { eventName: "onRowUnselect", returns: "当前取消航的数据，和所有数据", dec: "取消选中行触发", func: "(onRowUnselect)='你的方法名'" },
    ],
    cont: [
        { contName: "header", contDec: "给列表头部添内容", contfunc: "&lt;header&gt;<br>...(这里你可以添你任何想要添的东西)<br>&lt;header&gt;" },
    ],
}