define({ "api": [
  {
    "type": "DELETE",
    "url": "/api/file/{id}",
    "title": "Delete File",
    "name": "DeleteFile",
    "group": "File",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Path that file is currently located</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "400 Response": [
          {
            "group": "400 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "400 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "404 Response": [
          {
            "group": "404 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "404 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/file/delete.js",
    "groupTitle": "File"
  },
  {
    "type": "POST",
    "url": "/api/file/{id}/download",
    "title": "Download File",
    "name": "DownloadFile",
    "group": "File",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>path of requested file</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "passcode",
            "description": "<p>User inputted password to be used in encryption/decryption of file</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          },
          {
            "group": "200 Response",
            "type": "File",
            "optional": false,
            "field": "download",
            "description": "<p>Downloaded File</p>"
          }
        ],
        "400 Response": [
          {
            "group": "400 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "400 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "404 Response": [
          {
            "group": "404 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "404 Response",
            "type": "Boolean",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/file/download.js",
    "groupTitle": "File"
  },
  {
    "type": "GET",
    "url": "/api/file",
    "title": "Get User Files",
    "name": "GetFiles",
    "group": "File",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "200 Response",
            "type": "Array",
            "optional": false,
            "field": "files",
            "description": "<p>Array of user's files</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/file/userFiles.js",
    "groupTitle": "File"
  },
  {
    "type": "PUT",
    "url": "/api/file/{id}/share",
    "title": "Share/Unshare File",
    "name": "ShareFile",
    "group": "File",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Path that foler is currently located</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User email to share the file with</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204 Response": [
          {
            "group": "204 Response",
            "type": "null",
            "optional": false,
            "field": "null",
            "description": "<p>No body is returned with this response</p>"
          }
        ],
        "400 Response": [
          {
            "group": "400 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "400 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "404 Response": [
          {
            "group": "404 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "404 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/file/share.js",
    "groupTitle": "File"
  },
  {
    "type": "PUT",
    "url": "/api/file/{id}",
    "title": "Update File",
    "name": "UpdateFile",
    "group": "File",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "oldPath",
            "description": "<p>Path that file is currently located</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "newPath",
            "description": "<p>Path that user wishes to move file to</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "newName",
            "description": "<p>Name that user wishes to change folder to</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": true,
            "field": "favourite",
            "description": "<p>Favourite flag</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204 Response": [
          {
            "group": "204 Response",
            "type": "null",
            "optional": false,
            "field": "null",
            "description": "<p>No body is returned with this response</p>"
          }
        ],
        "400 Response": [
          {
            "group": "400 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "400 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "404 Response": [
          {
            "group": "404 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "404 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/file/update.js",
    "groupTitle": "File"
  },
  {
    "type": "POST",
    "url": "/api/file/upload",
    "title": "Upload File",
    "name": "UploadFile",
    "group": "File",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>File that user wishes to upload</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "passcode",
            "description": "<p>User inputted password to be used in encryption/decryption of file</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Absolute path of file</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201 Response": [
          {
            "group": "201 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "201 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "400 Response": [
          {
            "group": "400 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "400 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/file/upload.js",
    "groupTitle": "File"
  },
  {
    "type": "POST",
    "url": "/api/folder/create",
    "title": "Create Folder",
    "name": "CreateFolder",
    "group": "Folder",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "folderName",
            "description": "<p>Name of folder</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Absolute path of folder</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201 Response": [
          {
            "group": "201 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "201 Response",
            "type": "Array",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "400 Response": [
          {
            "group": "400 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "400 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "409 Response": [
          {
            "group": "409 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "409 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/folder/create.js",
    "groupTitle": "Folder"
  },
  {
    "type": "DELETE",
    "url": "/api/folder/{id}",
    "title": "Delete Folder",
    "name": "DeleteFolder",
    "group": "Folder",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Path that foler is currently located</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "400 Response": [
          {
            "group": "400 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "400 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "404 Response": [
          {
            "group": "404 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "404 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/folder/delete.js",
    "groupTitle": "Folder"
  },
  {
    "type": "GET",
    "url": "/api/folder",
    "title": "Get User Folders",
    "name": "GetFolders",
    "group": "Folder",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "200 Response",
            "type": "Array",
            "optional": false,
            "field": "files",
            "description": "<p>Array of user's files</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/folder/userFolders.js",
    "groupTitle": "Folder"
  },
  {
    "type": "PUT",
    "url": "/api/folder/{id}/share",
    "title": "Share/Unshare Folder",
    "name": "ShareFolder",
    "group": "Folder",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Path that foler is currently located</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User email to share the folder with</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204 Response": [
          {
            "group": "204 Response",
            "type": "null",
            "optional": false,
            "field": "null",
            "description": "<p>No body is returned with this response</p>"
          }
        ],
        "400 Response": [
          {
            "group": "400 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "400 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "404 Response": [
          {
            "group": "404 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "404 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/folder/share.js",
    "groupTitle": "Folder"
  },
  {
    "type": "PUT",
    "url": "/api/folder/{id}",
    "title": "Update Folder",
    "name": "UpdateFolder",
    "group": "Folder",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "oldPath",
            "description": "<p>Path that foler is currently located</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "newPath",
            "description": "<p>Path that user wishes to move folder to</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "newName",
            "description": "<p>Name that user wishes to change folder to</p>"
          },
          {
            "group": "Request Body",
            "type": "Boolean",
            "optional": true,
            "field": "favourite",
            "description": "<p>Favourite flag</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "204 Response": [
          {
            "group": "204 Response",
            "type": "null",
            "optional": false,
            "field": "null",
            "description": "<p>No body is returned with this response</p>"
          }
        ],
        "400 Response": [
          {
            "group": "400 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "400 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "404 Response": [
          {
            "group": "404 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "404 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/folder/update.js",
    "groupTitle": "Folder"
  },
  {
    "type": "POST",
    "url": "/api/user/authenticate",
    "title": "Authenticate User",
    "name": "AuthenticateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email associated with account</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password associated with account</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authorization token associated with User</p>"
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID associated with User</p>"
          },
          {
            "group": "200 Response",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>User object containing firstname, surname, and email</p>"
          }
        ],
        "400 Response": [
          {
            "group": "400 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "400 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "404 Response": [
          {
            "group": "404 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "404 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/user/authenticate.js",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/api/user/{id}",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "User",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "200 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/user/account.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/api/user/{id}",
    "title": "Get User",
    "name": "GetUser",
    "group": "User",
    "header": {
      "fields": {
        "Authorization": [
          {
            "group": "Authorization",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's unique bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 Response": [
          {
            "group": "200 Response",
            "type": "JSON",
            "optional": false,
            "field": "user",
            "description": "<p>User object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/user/account.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/user/register",
    "title": "Register new user",
    "name": "RegisterUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Mandatory Firstname of User</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Mandatory Surname of User</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email associated with account</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password associated with account</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201 Response": [
          {
            "group": "201 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "201 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "400 Response": [
          {
            "group": "400 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "400 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ],
        "409 Response": [
          {
            "group": "409 Response",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success state of operation</p>"
          },
          {
            "group": "409 Response",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Description of response</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/main/routes/api/user/register.js",
    "groupTitle": "User"
  }
] });
