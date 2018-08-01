$('#singleUploadForm').submit(function(event) {
    var formElement = this;
    var formData = new FormData(formElement);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://localhost:8080/uploadFile",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
            // process response
        },
        error: function (error) {
            console.log(error);
            // process error
        }
    });

    event.preventDefault();
});

$('#multipleUploadForm').submit(function(event) {
    var formElement = this;
    var formData = new FormData(formElement);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://localhost:8080/uploadMultipleFiles",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
            // process response
        },
        error: function (error) {
            console.log(error);
            // process error
        }
    });

    event.preventDefault();
});

$('#singleUploadFormWithDescription').submit(function(event) {
    var formElement = this;
    var formData = new FormData(formElement);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://localhost:8080/uploadFileWithDescription",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
            // process response
        },
        error: function (error) {
            console.log(error);
            // process error
        }
    });

    event.preventDefault();
});