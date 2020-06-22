$(document).ready(function() {
    $('#example').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": {
            url: "api/data/", // json datasource
            type: "get",
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 401) {
                    document.location.href = "login";
                } else {
                    alert("Cannot get data from server, refresh the page or call support if error persists\n: (" + JSON.stringify(jqXHR)
                        + "\ntextStatus: " + textStatus
                        + "errorThrown: " + errorThrown + ")")
                }
            }
        }
    } );
} );