var columnDefs = [
    { headerName: "Family Head Name", field: "fHeadName", rowGroup: true },
    { headerName: "Member Name", field: "memberName" },
    { headerName: "Current Address", field: "currentAddress" }
];

// specify the data
var rowData = [
    { fHeadName: "વશરામભાઈ માવજીભાઈ ગડારા", memberName: "વશરામભાઈ માવજીભાઈ ગડારા", currentAddress: "જબલપુર" },
    { fHeadName: "વશરામભાઈ માવજીભાઈ ગડારા", memberName: "મૂકતાબેન વશરામભાઇ ગડારા", currentAddress: "જબલપુર" },
    { fHeadName: "વશરામભાઈ માવજીભાઈ ગડારા", memberName: "કિશોરભાઈ વશરામભાઇ ગડારા", currentAddress: "જબલપુર" },
    { fHeadName: "વશરામભાઈ માવજીભાઈ ગડારા", memberName: "વીણાબેન કિશોરભાઈ ગડારા", currentAddress: "જબલપુર" },
    { fHeadName: "વશરામભાઈ માવજીભાઈ ગડારા", memberName: "વંશિલ કિશોરભાઈ ગડારા", currentAddress: "જબલપુર" },
    { fHeadName: "વશરામભાઈ માવજીભાઈ ગડારા", memberName: "ધૃતિબેન કિશોરભાઈ ગડારા", currentAddress: "જબલપુર" },
    //
    { fHeadName: "મણીભાઈ માવજીભાઈ ગડારા", memberName: "મણીભાઈ માવજીભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "મણીભાઈ માવજીભાઈ ગડારા", memberName: "મંજુબેન માવજીભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "મણીભાઈ માવજીભાઈ ગડારા", memberName: "પાર્થભાઈ મણીભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "મણીભાઈ માવજીભાઈ ગડારા", memberName: "અવનીબેન પાર્થભાઇ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "મણીભાઈ માવજીભાઈ ગડારા", memberName: "આરનાં પાર્થભાઈ ગડારા", currentAddress: "મોરબી" },
    //
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "પ્રભુભાઈ માવજીભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "પ્રભાબેન પ્રભુભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "વાત્સલ્ય ભાઈપ્રભુભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "રેખાબેન વાત્સલ્યભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "કૃષીલવાત્સલ્ય ભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "જયેશભાઈ પ્રભુભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "રેખાબેન જયેશભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "દિયાબેન જયેશભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "ધ્યાનીબેન જયેશભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "પંકજ ભાઈપ્રભુભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "હીનાબેન પંકજભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "પ્રભુભાઈ માવજીભાઈ ગડારા", memberName: "પ્રીયાંશકુમાર પંકજભાઈ ગડારા", currentAddress: "મોરબી" },
    //
    { fHeadName: "ઠાકરશીભાઈ માવજીભાઈ ગડારા", memberName: "ઠાકરશીભાઈ માવજીભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "ઠાકરશીભાઈ માવજીભાઈ ગડારા", memberName: "વનીતાબેન ઠાકરશીભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "ઠાકરશીભાઈ માવજીભાઈ ગડારા", memberName: "ગૌરવભાઇ ઠાકરશીભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "ઠાકરશીભાઈ માવજીભાઈ ગડારા", memberName: "રોશનીબેન ગૌરવભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "ઠાકરશીભાઈ માવજીભાઈ ગડારા", memberName: "શ્રેયા ગૌરવભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "ઠાકરશીભાઈ માવજીભાઈ ગડારા", memberName: "જયદીપભાઈ ઠાકરશીભાઈ ગડારા", currentAddress: "મોરબી" },
    { fHeadName: "ઠાકરશીભાઈ માવજીભાઈ ગડારા", memberName: "સ્વાતિબેન જયદીપભાઈ ગડારા", currentAddress: "મોરબી" }
];

// let the grid know which columns and what data to use
var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    sideBar: true,
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});
